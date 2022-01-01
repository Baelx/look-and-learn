const fastify = require('fastify');
const definitionController = require('../controllers/definition');
// const definitionValidator = require('../validators/definition');

const routes = [
    {
        method: 'GET',
        url: '/api/definition/:wordId',
        // schema: definitionValidator.get,
        handler: definitionController.getDefinition
    },
];

const definitionRoutes = (fastify, options, done) => {
    routes.forEach(route => fastify.route(route));
    done();
}

module.exports = definitionRoutes;