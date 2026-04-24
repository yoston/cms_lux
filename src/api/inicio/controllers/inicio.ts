export default {
    find: async (ctx) => {
        const entry = await strapi.db.query('api::inicio.inicio').findOne();
        ctx.body = entry;
    },
    update: async (ctx) => {
        const entry = await strapi.db
            .query('api::inicio.inicio')
            .update({ where: {}, data: ctx.request.body });
        ctx.body = entry;
    },
};
