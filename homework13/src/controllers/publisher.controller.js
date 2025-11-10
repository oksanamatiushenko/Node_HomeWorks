import * as publisherService from "../services/publisher.service.js";
import validateBody from "../utils/validateBody.js";
import HttpException from "../utils/HttpException.js";
import {
  addPublisherValidation,
  updatePublisherValidation,
} from "../validation/publisher.validation.js";

export const getAllPublishersController = async (req, res) => {
  const result = await publisherService.getPublishers();
  res.json(result);
};

export const addPublisherController = async (req, res) => {
  const validatedData = validateBody(addPublisherValidation, req.body);
  const result = await publisherService.addPublisher(validatedData);
  res.status(201).json(result);
};

export const updatePublisherController = async (req, res) => {
  const validatedData = validateBody(updatePublisherValidation, req.body);
  const { id } = req.params;
  const result = await publisherService.updatePublisher(id, validatedData);
  if (!result) throw HttpException(404, `Publisher with id ${id} not found`);
  res.json(result);
};

export const deletePublisherController = async (req, res) => {
  const { id } = req.params;
  const result = await publisherService.deletePublisher(id);
  if (!result) throw HttpException(404, `Publisher with id ${id} not found`);
  res.json({ message: "Publisher deleted successfully" });
};
