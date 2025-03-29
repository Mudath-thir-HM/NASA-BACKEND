import { Launches } from "../../types/Launches-Types";

export const launches: Map<number, Launches> = new Map();

const launch: Launches = {
  flightNumber: 100,
  mission: "Kepler Exploration 1",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
