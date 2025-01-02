import axiosInstance from "./axiosInstance";

const customerApi = {
  async getCustomerList({status, page}) {
    try {
      const response = await axiosInstance.get("/customers", {
        params: {
          status: status,
          per_page: 15,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCustomerById(id) {
    try {
      const response = await axiosInstance.get(`/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async createCustomer(customer) {
    try {
      const response = await axiosInstance.post("/customers", customer);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateCustomer(id, customer) {
    try {
      const response = await axiosInstance.put(`/customers/${id}`, customer);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async deleteCustomer(id) {
    try {
      const response = await axiosInstance.delete(`/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

const getCustomerList = customerApi.getCustomerList;
const getCustomerById = customerApi.getCustomerById;
const createCustomer = customerApi.createCustomer;
const updateCustomer = customerApi.updateCustomer;
const deleteCustomer = customerApi.deleteCustomer;

export {
  customerApi as default,
  getCustomerList,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
