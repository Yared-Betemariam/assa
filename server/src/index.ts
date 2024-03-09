import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "welcome to the assaAPI, what can we help you with?" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running in Port ${process.env.PORT}`);
  console.log("working");
});
