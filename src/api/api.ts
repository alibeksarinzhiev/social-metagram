import axios from "axios";

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
export const baseURL = "http://192.168.68.134:5000/api/";

export const axiosClassic = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosWithToken = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithToken.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axiosWithToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = getRefreshToken();
        const response = await axiosClassic.post("/auth/refresh", {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;
        setTokens(accessToken, newRefreshToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosWithToken.request(originalRequest);
      } catch (refreshError) {
        removeTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
