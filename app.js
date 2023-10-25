// import dependencies required to create server
import express from "express";
import morgan from "morgan";
import resourcesRouter from "./resources/resources.router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/resources", resourcesRouter);

export default app;
