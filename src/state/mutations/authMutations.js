import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "../../api/authApi.js";
import { useNavigate } from "react-router-dom";

export const useLogin = (credentials) => {
  return useMutation({
    mutationFn: (credentials) => login(credentials),
    onSuccess: (data) => {
        console.log("User logged in:", );
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        localStorage.setItem("authToken", data?.data?.token_type + " " + data?.data?.token);
    },
    onError: (error) => {
        console.log("Login failed", error.message);
    },
    enabled: !!credentials,
    });
};

export const useRegister = (credentials) => {
  return useMutation({
    mutationFn: (credentials) => register(credentials),
    onSuccess: (data) => {
        console.log("User registered");
        useNavigate("/login");
    },
    onError: (error) => {
        console.log("Registration failed", error.message);
        useNavigate("/register");
    },
    enabled: !!credentials,
  });
};

export const useLogout = (user) => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
        console.log("User logged out");
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        useNavigate("/login");
        },
    onError: (error) => {
        console.log("Logout failed", error.message);
    },
    enabled: !!user
  });
};
