export default {
    find: async (ctx) => {
        const entries = await strapi
            .service('plugin::content-manager.content-types.collection-types')
            .find(ctx);
        ctx.body = entries;
    },
    findOne: async (ctx) => {
        const { id } = ctx.params;
        const entry = await strapi
            .service('plugin::content-manager.content-types.collection-types')
            .findOne(ctx, id);
        ctx.body = entry;
    },
    create: async (ctx) => {
        const newEntry = await strapi
            .service('plugin::content-manager.content-types.collection-types')
            .create(ctx);
        ctx.body = newEntry;
    },
    update: async (ctx) => {
        const { id } = ctx.params;
        const updatedEntry = await strapi
            .service('plugin::content-manager.content-types.collection-types')
            .update(ctx, id);
        ctx.body = updatedEntry;
    },
    delete: async (ctx) => {
        const { id } = ctx.params;
        await strapi
            .service('plugin::content-manager.content-types.collection-types')
            .delete(ctx, id);
        ctx.status = 204;
    },
};
