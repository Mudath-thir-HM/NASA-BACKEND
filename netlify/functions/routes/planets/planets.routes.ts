import { Router } from "express";
import { planetsController } from "../../controllers/planets/planets.controller";

const planetsRouter = Router();

planetsRouter.get("/", planetsController.getAllPlanets);

export default planetsRouter;
