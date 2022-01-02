const getAxiosInstance = require('../helpers/axios');
require('dotenv').config({ path: '../../.env' });
const merriamBaseUrl = process.env.MERRIAM_BASE_URL;
const axiosInstance = getAxiosInstance(merriamBaseUrl);

/**
 * Get a specific definition by word ID.
 * 
 * @param {HttpServerRequest} req 
 * @returns {Object}
 */
 const getDefinition = async (request, reply) => {
    // Look up word from Oxford API.
    const wordId = request.params.wordId;
    await axiosInstance.get(wordId)
            .then((res) => {
                reply.send(res.data);
                if (200 === res.status || 404 === res.status) {
                    // If successful, log an API call to Oxford.

                    // Log word to 10 most recently looked-up words.
                    // Save word to cookie and optionally to DB if user is logged in.
                } else {
                    // reply.send('Word not found.');
                }
            })
            .catch(err => {
                reply.send(err);
            });


    // Return data.
}

module.exports = {
    getDefinition
}