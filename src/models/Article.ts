import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
  date: { type: String },
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  tag: { type: String },
  data: { type: String },
});

export const Article = model("Article", schema);
export type ArticleType = InferSchemaType<typeof schema>;
