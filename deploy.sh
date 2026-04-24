#!/bin/bash
# Deploy script for Strapi CMS on Hostinger VPS
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Strapi CMS deployment..."

# Variables
PROJECT_DIR=$(pwd)
ENV_FILE=".env"
BACKUP_DIR="backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}Error: .env file not found${NC}"
    echo "Please copy .env.example to .env and configure it first:"
    echo "  cp .env.example .env"
    echo "  nano .env"
    exit 1
fi

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo -e "${YELLOW}1️⃣  Creating backup...${NC}"
BACKUP_FILE="$BACKUP_DIR/backup_${TIMESTAMP}.tar.gz"
tar -czf "$BACKUP_FILE" data/ public/uploads/ 2>/dev/null || true
echo -e "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"

echo -e "${YELLOW}2️⃣  Pulling latest code...${NC}"
git pull origin main || true

echo -e "${YELLOW}3️⃣  Building Docker image...${NC}"
docker-compose build --no-cache

echo -e "${YELLOW}4️⃣  Stopping existing containers...${NC}"
docker-compose down

echo -e "${YELLOW}5️⃣  Starting new containers...${NC}"
docker-compose up -d

echo -e "${YELLOW}6️⃣  Waiting for Strapi to be ready...${NC}"
sleep 10

# Check health
if docker-compose exec strapi curl -f http://localhost:1337/admin > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Strapi is running and healthy${NC}"
else
    echo -e "${RED}❌ Strapi health check failed${NC}"
    echo "Checking logs..."
    docker-compose logs strapi
    exit 1
fi

echo -e "${YELLOW}7️⃣  Pruning unused Docker resources...${NC}"
docker system prune -f

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "📊 Status:"
docker-compose ps
echo ""
echo "📝 View logs with: docker-compose logs -f strapi"
echo "🔄 Restart containers with: docker-compose restart"
echo "🛑 Stop containers with: docker-compose down"
