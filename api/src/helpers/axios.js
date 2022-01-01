const axios = require('axios');
require('dotenv').config({ path: '../../.env' });
const oxfordAppId = process.env.OXFORD_APP_ID;
const oxfordAppKey = process.env.OXFORD_APP_KEY;

const getAxiosInstance = (baseUrl) => {
    const axiosConfig = {
        baseURL: baseUrl,
        validateStatus: false,
        headers: {}
    };

    if (baseUrl?.includes('oxford')) {
        axiosConfig.headers['app_id'] = oxfordAppId;
        axiosConfig.headers['app_key'] = oxfordAppKey;
    }

    return axios.create(axiosConfig);
}

module.exports = getAxiosInstance;