import App from "../db/models/App.js";

export const addApp = (payload) => App.create(payload);
export const getApp = () => App.findAll();
export const getAppById = (id) => App.findByPk(id);
