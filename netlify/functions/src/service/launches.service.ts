import { launches } from "../models/launches/launches.model";
import { Launches } from "../types/Launches-Types";

let latestFlightNumber = 100;

export const launchesService = {
  parseLaunches() {
    return Array.from(launches.values());
  },
  addNewLaunch(launch: Launches) {
    latestFlightNumber++;

    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.launchDate ||
      !launch.target
    ) {
      throw new Error("Missing required launch property");
    } else if (isNaN(new Date(launch.launchDate).getTime())) {
      throw new Error("Invalid Date");
    }

    launches.set(
      latestFlightNumber,
      Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ["New Marlo", "NASSA"],
        upcoming: true,
        success: true,
        launchDate: new Date(launch.launchDate),
      })
    );
  },

  deleteLaunch(launchId: number) {
    if (!launches.has(launchId)) {
      throw new Error("Launch not Found");
    }

    const aborted = launches.get(launchId);
    aborted!.upcoming = false;
    aborted!.success = false;
    return aborted;
  },
};
