import { Router } from "express";
import { getArticle, getArticles } from "../modules";

export const articleRouter = Router();

articleRouter.get("/", getArticles);
articleRouter.get("/:id", getArticle);
