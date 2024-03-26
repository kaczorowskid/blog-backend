import { Article, ArticleType } from "../../../models";

export const getArticleByIdService = async (
  id: string
): Promise<ArticleType[] | null> => await Article.findById(id);
