import { Router } from "express";
import { launchesController } from "../../controllers/launches/launches.controller";

const launchRouter = Router();

launchRouter.get("/", launchesController.getAllLaunches);
launchRouter.post("/", launchesController.addNewLaunch);
launchRouter.delete("/:id", launchesController.abortLaunch);

export default launchRouter;
