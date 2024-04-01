import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { articleRouter } from "./routes";
import { connectToDatbase } from "./database";
import { checkEnvConfig } from "./utils";

checkEnvConfig(
  process.env.ENVIRONMENT,
  process.env.FRONTEND_URL_ORIGIN_DEV,
  process.env.FRONTEND_URL_ORIGIN_PROD,
  process.env.PORT
);

const origin =
  process.env.ENVIRONMENT === "development"
    ? process.env.FRONTEND_URL_ORIGIN_DEV
    : process.env.FRONTEND_URL_ORIGIN_PROD;

const app = express();
const PORT = Number(process.env.PORT);

connectToDatbase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin }));

app.use("/articles", articleRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
