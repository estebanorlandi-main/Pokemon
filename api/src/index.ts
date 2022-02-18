import cors from "cors";
import express from "express";
import routes from "./routes";
import run from "./db";
import morgan from "morgan";

import { PORT } from "./config";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(routes);

run();

app.listen(PORT, () =>
  console.log(`[server]: Server is running at port ${PORT}`)
);
