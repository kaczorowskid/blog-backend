import { Article, ArticleType } from "../../../models";

export const getArticlesService = async (): Promise<ArticleType[] | null> =>
  await Article.find({}).select("-data").sort({ date: -1 });
