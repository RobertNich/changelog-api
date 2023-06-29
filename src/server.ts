import express from "express";
import morgan from "morgan";
import router from "./router";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  throw new Error("hello");
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

// Error handling for main routes
app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorised" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json("internal error");
  }
});

export default app;
