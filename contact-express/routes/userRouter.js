import { Router } from "express";
import { createUser, loginUser } from "../controllers/usersController.js";

export const userRouter = Router();

userRouter.post("/register", createUser);

userRouter.post("/login", loginUser);
