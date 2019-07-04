import express from "express";
import routes from "../routes";
import {
  getJoin,
  getLogin,
  getLogout,
  getSearch,
  home
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.logout, getLogout);
globalRouter.get(routes.search, getSearch);

export default globalRouter;



