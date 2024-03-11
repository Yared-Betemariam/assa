import express from "express";
import cors from "cors";
import "dotenv/config";

import userRouter from "./routes/userRoute";
import { notFound } from "./middlewares/notFound";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "welcome to the assaAPI, what can we help you with?" });
});

app.use("/api/auth", userRouter);

app.use("*", notFound);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING as string)
    .then(() => {
      console.log(`Server Running in Port ${process.env.PORT}`);
    })
    .catch((error) => console.log(error));
});
