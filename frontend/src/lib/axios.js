import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Thay đổi URL cơ sở của API nếu cần
});

export default api;