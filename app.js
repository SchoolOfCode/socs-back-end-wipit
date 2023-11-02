// import dependencies required to create server
import express from "express";
import morgan from "morgan";
// frontend client makes request to external backend server using cors
import cors from "cors";
import resourcesRouter from "./resources/resources.router.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
// takes requests and changes them to JSON format
app.use(express.json());
// define route for api
app.use("/api/resources", resourcesRouter);

export default app;
