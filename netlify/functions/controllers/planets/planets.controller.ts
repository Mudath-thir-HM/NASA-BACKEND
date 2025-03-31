import { Request, Response } from "express";
import { staticHabitablePLanets } from "../../models/planets/planets.model";

const planets = staticHabitablePLanets;

export const planetsController = {
  getAllPlanets(req: Request, res: Response) {
    res.status(200).json(planets);
  },
};
