import { Request, Response } from "express";
import { getArticleByPathService } from "./getArticleByPath.service";

export const getArticleByPath = async (req: Request, res: Response) => {
  try {
    const data = await getArticleByPathService(req.params.path);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
