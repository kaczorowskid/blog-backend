import mongoose from "mongoose";

export const connectToDatbase = async () => {
  const databaseUrl = process.env.MONGO_URL || "";

  await mongoose.connect(databaseUrl).then(() => console.log("Connected! "));
};
