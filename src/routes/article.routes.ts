import { Router } from "express";
import { getArticleById, getArticleByPath, getArticles } from "../modules";

export const articleRouter = Router();

articleRouter.get("/", getArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.get("/:path", getArticleByPath);
