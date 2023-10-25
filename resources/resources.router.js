import express from "express";
const router = express.Router();

import { getWeekResources } from "./resources.controller.js";

router.get("/", async function (_req, res) {
  const result = await getWeekResources();
  res.json({ success: true, payload: result });
});

export default router;
