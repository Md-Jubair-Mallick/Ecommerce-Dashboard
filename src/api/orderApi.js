import axiosInstance from "./axiosInstance";

const apiEndpoints = {
  orders: "/orders",
  order: (id) => `/orders/${id}`,
};

const handleApiError = (error) => {
  console.error(error);
  return null;
};

export const getOrder = async (filters) => {
    const params = {
        status: filters.status,
        startDate: filters.startDate,
        endDate: filters.endDate,
        sort_order: filters.sort_order,
        per_page: filters.per_page,
      };
  try {
    const response = await axiosInstance.get(apiEndpoints.orders, { params });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getById = async (id) => {
  try {
    const response = await axiosInstance.get(apiEndpoints.order(id));
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const post = async (data = {}) => {
  try {
    const response = await axiosInstance.post(apiEndpoints.orders, data);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const put = async (id, status) => {
  try {
    const response = await axiosInstance.put(apiEndpoints.order(id), status);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};