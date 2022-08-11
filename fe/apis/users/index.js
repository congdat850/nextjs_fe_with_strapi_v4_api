import HTTPS from "../https";

export default () => {
  const https = HTTPS();

  return {
    getUsers: (query) => {
      const SUB_DOAMIN = "/users";
      return https.get(SUB_DOAMIN, { ...query });
    },
    login: (email, password) => {
      const SUB_DOAMIN = "/admin/login";
      return https.post(SUB_DOAMIN, { email, password });
    },
    getUser: () => {
      return;
    },
  };
};
