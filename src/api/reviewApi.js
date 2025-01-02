import axiosInstance from "./axiosInstance";

export const getReviews = async (filters) => {
  try {
    const response = await axiosInstance.get("/reviews", { params: filters });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await axiosInstance.delete(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateReview = (id, data) => {
  try {
    const response = axiosInstance.put(`/reviews/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
