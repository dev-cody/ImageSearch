import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P7GxzTFODnO7VpFjm8Rav9M07vk2hoORqniRg5RdTX8'
    },

});

