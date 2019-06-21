import express from "express";
import routes from "../routes";
import { getUsers, getEditProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, getEditProfile);

export default userRouter;
