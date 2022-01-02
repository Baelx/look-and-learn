const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

/**
 * Get all users.
 * 
 * @returns {Array}
 */
const getAll = async () => {
    return [];
}

/**
 * Get a specific user by ID.
 * 
 * @param {HttpServerRequest} req 
 * @returns {Object}
 */
const getUser = async (req) => {
    const id = Number(req.params.id);
    return id;
}

/**
 * Add a user based on request body info.
 * 
 * @param {HttpServerRequest} req 
 * @returns {Object}
 */
const addUser = async (req) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }

    return newUser;
}

/**
 * Update a user by ID. Use passed info from the request body.
 * 
 * @param {HttpServerRequest} req 
 * @returns {Object}
 */
const updateUser = async (req) => {
    const updatedUser = {
        id: Number(req.params.id),
        name: req.body.name
    }

    return updatedUser;
}

/**
 * Delete a user by user ID.
 * 
 * @param {HttpServerRequest} req 
 * @returns {Object}
 */
const deleteUser = async (req) => {
    return { message: `Deleted user with ID ${req.params.id}` };
}

module.exports = {
    getAll,
    getUser,
    addUser,
    updateUser,
    deleteUser
}
