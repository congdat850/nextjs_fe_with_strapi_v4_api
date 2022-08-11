import axios from "axios";

//import constants

const API_TIMEOUT = 3000;

const getAccessToken = () => {
  return window.localStorage
    ? window.localStorage.getItem("access_token")
    : null;
};
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: API_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (request) => {
    //console.log('axios.interceptors____request____', request)
    request.headers = {
      Authorization:'Bearer '+ getAccessToken(),
    };
    return request;
  },
  (error) => {
    console.log("axios.interceptors____request____error__", error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let res = error.response;
    if (res) {
      switch (res.status) {
        case 401:
          console.error("UNAUTHORIZED", res);
          window.location.href = "/";
          break;
        case 403:
          console.error("ACCESSDENIED", res);
          window.location.href = "/";
          break;
        default:
          break;
      }
    }
    console.error("Looks like there was a problem. Status Code: " + res);
    return Promise.reject(error.response);
  }
);

const instance = () => {
  return {
    baseURL: axiosClient.defaults.baseURL,
    setBaseUrl: (baseURL) => {
      axiosClient.defaults.baseURL = baseURL;
      return axiosClient;
    },
    get: (url, params = {}) => {
      return axiosClient.get(url, { params });
    },
    post: (url, data = {}) => {
      return axiosClient.post(url, data);
    },
    put: (url, data = {}) => {
      return axiosClient.put(url, data);
    },
    patch: (url, data = {}) => {
      return axiosClient.patch(url, data);
    },
    delete: (url, data = {}) => {
      return axiosClient.delete(url, data);
    },
  };
};

export default instance;
