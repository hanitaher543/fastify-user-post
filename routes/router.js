
const createPost          = require('../controllers/posts.controllers');
const { register, login } = require ('../controllers/users.controllers');


module.exports = async function (fastify, options) {

    fastify.post ('/create-user', register);
    fastify.post ('/login', login); 
    fastify.post ('/create-post', createPost);


};