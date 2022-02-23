import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (
      !(
        window.location.pathname === "/" ||
        window.location.pathname === "registration"
      )
    ) {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      console.log("Auth error");

      const res = await axios.post(
        `http://176.9.137.77:8024/api/token/refresh/`,
        { refresh: localStorage.getItem("refreshtoken") }
      );

      if (res?.data.access) {
        console.log("refresh response setted");
        localStorage.setItem("token", res?.data.access);
        originalRequest._retry = true;
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
