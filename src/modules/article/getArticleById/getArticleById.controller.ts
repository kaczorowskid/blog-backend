import { ExpressMiddleware } from "../../../utils";
import { getArticleByIdService } from "./getArticleById.service";

export const getArticleById: ExpressMiddleware<{ id: string }> = async (
  req,
  res
) => {
  try {
    const data = await getArticleByIdService(req.params.id);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
