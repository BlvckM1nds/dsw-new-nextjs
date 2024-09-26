export const setToken = (token: string) => window.localStorage.setItem("dsw_token", token);

export const getToken = () => window.localStorage.getItem("dsw_token");

export const removeToken = () => window.localStorage.removeItem("dsw_token");