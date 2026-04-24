export default {
    find: async (ctx) => {
        const entry = await strapi.db.query('api::paquete.paquete').findOne();
        ctx.body = entry;
    },
    update: async (ctx) => {
        const entry = await strapi.db
            .query('api::paquete.paquete')
            .update({ where: {}, data: ctx.request.body });
        ctx.body = entry;
    },
};
