import axios from 'axios';

// api base url
const baseURL = 'https://163.47.115.230:30000/api';

// auth token
const authToken = localStorage.getItem('token');

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    authorization: authToken,
  },
});
