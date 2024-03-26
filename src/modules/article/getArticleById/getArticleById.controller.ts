import { getArticleByIdService } from "./getArticleById.service";
import { ExpressMiddleware } from "../../../utils/expressMiddleware.utils";

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
