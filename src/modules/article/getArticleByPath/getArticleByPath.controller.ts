import { Request, Response } from "express";
import { getArticleByPathService } from "./getArticleByPath.service";
import { ExpressMiddleware } from "../../../utils/expressMiddleware.utils";

export const getArticleByPath: ExpressMiddleware<{ path: string }> = async (
  req,
  res
) => {
  try {
    const data = await getArticleByPathService(req.params.path);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
