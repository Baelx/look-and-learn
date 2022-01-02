const axios = require('axios');
require('dotenv').config({ path: '../../.env' });
const oxfordAppId = process.env.OXFORD_APP_ID;
const oxfordAppKey = process.env.OXFORD_APP_KEY;
const merriamApiKey = process.env.MERRIAM_API_KEY;

const getAxiosInstance = (baseUrl) => {
    const axiosConfig = {
        baseURL: baseUrl,
        validateStatus: false,
        headers: {}
    };

    // if (baseUrl?.includes('oxford')) {
    //     axiosConfig.headers['app_id'] = oxfordAppId;
    //     axiosConfig.headers['app_key'] = oxfordAppKey;
    // }

    const axiosInstance = axios.create(axiosConfig);

      // All requests need to append an API key as a param.
    axiosInstance.interceptors.request.use((req) => {
        req.params = {
            key: merriamApiKey
        }
        return req;
    });

    return axiosInstance;
}

module.exports = getAxiosInstance;