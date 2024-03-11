import { SignUp } from "../controllers/userController";
import express from "express";

const router = express.Router();

router.post("/sign-up", SignUp);

export default router;
