export default {
    find: async (ctx) => {
        const entry = await strapi.db.query('api::servicio.servicio').findOne();
        ctx.body = entry;
    },
    update: async (ctx) => {
        const entry = await strapi.db
            .query('api::servicio.servicio')
            .update({ where: {}, data: ctx.request.body });
        ctx.body = entry;
    },
};
