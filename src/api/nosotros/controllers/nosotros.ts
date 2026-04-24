export default {
    find: async (ctx) => {
        const entry = await strapi.db.query('api::nosotros.nosotros').findOne();
        ctx.body = entry;
    },
    update: async (ctx) => {
        const entry = await strapi.db
            .query('api::nosotros.nosotros')
            .update({ where: {}, data: ctx.request.body });
        ctx.body = entry;
    },
};
