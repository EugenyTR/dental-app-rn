import axios from '../../core/axios.js';

export default {
    get: () => axios.get('/patients'),
    add: values => axios.post('/patients', values),
};