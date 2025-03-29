import { Request, Response } from "express";
import { habitablePlanets } from "../../models/planets/planets.model";

const planets = habitablePlanets;

export const planetsController = {
  getAllPlanets(req: Request, res: Response) {
    res.status(200).json(planets);
  },
};
