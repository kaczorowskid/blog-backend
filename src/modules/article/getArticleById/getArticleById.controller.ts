import { Request, Response } from "express";
import { getArticleByIdService } from "./getArticleById.service";

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const data = await getArticleByIdService(req.params.id);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
