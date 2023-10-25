// import dependencies required to create server
import express from "express";
import morgan from "morgan";
import cors from "cors";
import resourcesRouter from "./resources/resources.router.js";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/resources", resourcesRouter);

export default app;
