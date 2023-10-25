import express from "express";
const router = express.Router();

import { getWeekResources, getWeekTwoResources } from "./resources.controller.js";

// rename route path to /week1 once everything else is completed
router.get("/", async function (_req, res) {
  const result = await getWeekResources();
  res.json({ success: true, payload: result });
});

router.get("/week2", async function (_req, res) {
  const result = await getWeekTwoResources();
  res.json({ success: true, payload: result });
});

export default router;
