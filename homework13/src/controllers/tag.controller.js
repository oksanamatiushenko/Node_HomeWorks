import * as tagsService from "../services/tag.service.js";
import validateBody from "../utils/validateBody.js";
import { tagAddValidation } from "../validation/tag.validation.js";
import HttpException from "../utils/HttpException.js";

export const getAllTagsController = async (req, res) => {
  const result = await tagsService.getTags();
  res.json(result);
};

export const getSingleTagByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await tagsService.getTagById(id);
  if (!result) throw HttpException(404, `Tag with id ${id} not found`);
  res.json(result);
};

export const addTagController = async (req, res) => {
  const validatedData = validateBody(tagAddValidation, req.body);
  const result = await tagsService.addTag(validatedData);
  res.status(201).json(result);
};

export const deleteTagController = async (req, res) => {
  const { id } = req.params;
  const result = await tagsService.deleteTag(id);
  if (!result) throw HttpException(404, `Tag with id ${id} not found`);
  res.json({ message: "Tag deleted successfully" });
};
