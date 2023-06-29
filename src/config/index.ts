import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "development";

let envConfig;

if (stage === "production") {
  envConfig = require("./prod").default;
} else if (stage === "staging") {
  envConfig = require("./stg").default;
} else {
  envConfig = require("./dev").default;
}

export default merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    logging: false,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DATABASE_URL,
    },
  },
  envConfig
);
