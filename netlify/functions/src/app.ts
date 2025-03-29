import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import serverless from "serverless-http";
import { loadPlanetsData } from "./models/planets/planets.model";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", routes);

loadPlanetsData();

// app.listen(PORT, () => {
//   console.log(`listnening on port ${PORT}`);
// });

export const handler = serverless(app);
