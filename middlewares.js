import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "GGJ";
  res.locals.routes = routes;
  next();
};
