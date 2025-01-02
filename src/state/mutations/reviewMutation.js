import { useMutation } from "@tanstack/react-query";
import { deleteReview, updateReview } from "../../api/reviewApi";

export function useDeleteReview(id) {
  return useMutation({
    mutationFn: () => deleteReview(id),
    onSuccess: () => {
      console.log("Review deleted");
    },
    onError: (error) => {
      console.error("Error deleting review:", error);
    },
  });
}

export function useUpdateReview(id) {
  return useMutation({
    mutationFn: (status) => updateReview(id, status),
    onSuccess: () => {
      console.log("Review updated");
    },
    onError: (error) => {
      console.error("Error updating review:", error);
    },
  });
}
