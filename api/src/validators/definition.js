const getUserValidator = {
    // Request parameters.
    params: {
        wordId: { type: 'string' }
    },
    // Response validation. 
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' }
            }
        }
    }
}

module.exports = {
    getUserValidator
}