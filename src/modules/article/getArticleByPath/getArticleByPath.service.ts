import { Article, ArticleType } from "../../../models";

export const getArticleByPathService = async (
  path: string
): Promise<ArticleType[] | null> => await Article.findOne({ path });
