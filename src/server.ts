import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { articleRouter } from "./routes";
import { connectToDatbase } from "./database";
import { isEmptyString } from "./utils";

if (
  isEmptyString(process.env.ENVIRONMENT) ||
  isEmptyString(process.env.FRONTEND_URL_ORIGIN_DEV) ||
  isEmptyString(process.env.FRONTEND_URL_ORIGIN_PROD) ||
  isEmptyString(process.env.PORT)
) {
  throw new Error("Invalid .env config");
}

const origin =
  process.env.ENVIRONMENT === "development"
    ? process.env.FRONTEND_URL_ORIGIN_DEV
    : process.env.FRONTEND_URL_ORIGIN_PROD;

const app = express();
const PORT = process.env.PORT || 4200;

connectToDatbase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin }));
app.options("*", cors());

app.use("/articles", articleRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
