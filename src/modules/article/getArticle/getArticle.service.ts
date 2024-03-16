import { Article, ArticleType } from "../../../models";

export const getArticleService = async (
  id: string
): Promise<ArticleType[] | null> => await Article.findById(id);
