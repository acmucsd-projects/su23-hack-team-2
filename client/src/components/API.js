import axios from 'axios';

const serverURL = 'http://localhost:8000'

const API = {
    getPurchase: function() {
        return axios.get(`${serverURL}/routes/post`);
    },

    createPurchase: function (newPost) {
        return axios.post(`${serverURL}/routes/post`, newPost);
    }
}

export default API;
