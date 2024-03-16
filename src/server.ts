import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { articleRouter } from "./routes";
import { connectToDatbase } from "./database";
import { isEmptyString } from "./utils";

if (
  isEmptyString(process.env.ENVIRONMENT) ||
  isEmptyString(process.env.FRONTEND_URL_ORIGIN_DEV) ||
  isEmptyString(process.env.FRONTEND_URL_ORIGIN_PROD)
) {
  throw new Error("Invalid .env config");
}

const origin =
  process.env.ENVIRONMENT === "development"
    ? process.env.FRONTEND_URL_ORIGIN_DEV
    : process.env.FRONTEND_URL_ORIGIN_PROD;

const app = express();
const PORT = 4200;

connectToDatbase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin, credentials: true }));
app.use(cookieParser());

app.use("/articles", articleRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
