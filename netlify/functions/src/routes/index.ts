import { Router } from "express";
import planetsRouter from "./planets/planets.routes";
import homeRouter from "./home-page/home.routes";
import launchRouter from "./launches/launches.routes";

const routes = Router();

routes.use("/", homeRouter);
routes.use("/planets", planetsRouter);
routes.use("/launches", launchRouter);

export default routes;
