import express from "express";
import routes from "../routes";
import { getEditVideos } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.editVideos, getEditVideos);

export default videoRouter;
