export default {
    find: async (ctx) => {
        const entry = await strapi.db.query('api::ayuda.ayuda').findOne();
        ctx.body = entry;
    },
    update: async (ctx) => {
        const entry = await strapi.db
            .query('api::ayuda.ayuda')
            .update({ where: {}, data: ctx.request.body });
        ctx.body = entry;
    },
};
