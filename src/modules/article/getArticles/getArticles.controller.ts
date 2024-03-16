import { Request, Response } from "express";
import { getArticlesService } from "./getArticles.service";

export const getArticles = async (req: Request, res: Response) => {
  try {
    const data = await getArticlesService();

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
