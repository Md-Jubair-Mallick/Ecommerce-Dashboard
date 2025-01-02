import axiosInstance from "./axiosInstance";

const productApi = {
  async getProducts({ page, sortBy, sortOrder }) {
    try {
      const response = await axiosInstance.get("/products", {
        params: { per_page:12, page, sortBy, sortOrder },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getProductById(id) {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async createProduct(product) {
    try {
      const response = await axiosInstance.post("/products", product);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateProduct(id, product) {
    try {
      const response = await axiosInstance.put(`/products/${id}`, product);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async deleteProduct(id) {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

const getProducts = productApi.getProducts;
const getProductById = productApi.getProductById;
const createProduct = productApi.createProduct;
const updateProduct = productApi.updateProduct;
const deleteProduct = productApi.deleteProduct;

export {
  productApi as default,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
