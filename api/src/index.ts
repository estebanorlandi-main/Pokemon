import cors from "cors";
import express from "express";
import routes from "./routes";
import run from "./db";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(routes);

run();

app.listen(PORT, () =>
  console.log(`[server]: Server is running at port ${PORT}`)
);
