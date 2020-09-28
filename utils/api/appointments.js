import axios from '../../core/axios.js';

export default {
    get: () => axios.get('/appointments'),
    add: values => axios.post('/appointments', values)
};