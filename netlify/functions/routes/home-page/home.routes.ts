import { Router } from "express";
import { homecontroller } from "../../controllers/home/home.controller";

const homeRouter = Router();

homeRouter.get("/", homecontroller.getHomePage);

export default homeRouter;
