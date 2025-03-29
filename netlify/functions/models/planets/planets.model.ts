import { parse } from "csv-parse";
import fs from "fs";
import path from "path";
import { PlanetDataType } from "../../types/planetTypes";
// import Promise from 'stream/promises'

export const habitablePlanets: PlanetDataType[] = [];

function isHabitable(planet: PlanetDataType) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

export async function loadPlanetsData() {
  return await new Promise<void>(
    (resolve: () => void, reject: (error: unknown) => void) => {
      fs.createReadStream(
        path.join(__dirname, "..", "..", "..", "..", "data", "KeplerData.csv")
      )
        .pipe(
          parse({
            comment: "#",
            columns: true,
          })
        )
        .on("data", (data: PlanetDataType) => {
          if (isHabitable(data)) {
            habitablePlanets.push(data);
          }
        })
        .on("error", (error: unknown) => {
          console.log(error);
          reject(error);
        })
        .on("end", () => {
          console.log(
            `${habitablePlanets.length} number of habitable planets found`
          );
          resolve();
        });
    }
  );
}
