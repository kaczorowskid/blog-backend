import { Request, Response } from "express";
import { getArticleService } from "./getArticle.service";

export const getArticle = async (req: Request, res: Response) => {
  try {
    const data = await getArticleService(req.params.id);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
