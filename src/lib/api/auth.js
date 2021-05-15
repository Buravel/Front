import client from "./client";

export const login = ({ id, password }) =>
  client.get("/api/auth/login", { id, password });

export const register = ({ username, id, email, password }) =>
  client.post("/api/auth/register", { username, id, email, password });

export const check = () => client.get("/api/auth/check");

export const findid = ({ email }) => client.post("/api/auth/findid", { email });
export const findpw = ({ email }) => client.post("/api/auth/findpw", { email });
