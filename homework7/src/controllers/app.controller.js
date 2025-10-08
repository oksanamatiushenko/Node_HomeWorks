import {
  getApp,
  addApp,
  getAppById,
} from "../services/apps.service.js";

export const getAppController = async (req, res) => {
  const apps = await getApp();
  res.json(apps);
};

export const getAppByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getAppById(id);
  res.json(result);
};

export const addAppController = async (req, res) => {
  const newApp = await addApp(req.body);
  res.status(201).json(newApp);
};
