import axiosInstance from './axiosInstance';

const authApi = {
    async login(data) {
        try {
            const response = await axiosInstance.post('/auth/login', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async register(data) {
        try {
            const response = await axiosInstance.post('/auth/register', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async logout() {
        try {
            const response = await axiosInstance.post('/auth/logout');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async me() {
        try {
            const response = await axiosInstance.get('/auth/me');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

const login = authApi.login;
const register = authApi.register;
const logout = authApi.logout;
const me = authApi.me;

export { authApi as default, login, register, logout, me };