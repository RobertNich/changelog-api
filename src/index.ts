import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";
import config from "./config";

app.listen(config.port, () => {
  console.log(`Hello on http://localhost:${config.port}`);
});

process.on("uncaughtException", () => {
  console.error("uncaught exception error");
});

process.on("unhandledRejection", () => {
  console.error("unhandled rejection error");
});
