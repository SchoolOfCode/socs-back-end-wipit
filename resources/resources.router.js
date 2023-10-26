import express from "express";
const router = express.Router();

import { 
   getWeekResources,
   getWeekTwoResources, 
   getWeekThreeResources, 
   getWeekFourResources, 
   getWeekFiveResources, 
   getWeekSixResources, 
   getWeekSevenResources, 
   getWeekEightResources,
   getCSSresources
 } from "./resources.controller.js";

// rename route path to /week1 once everything else is completed
router.get("/", async function (_req, res) {
  const result = await getWeekResources();
  res.json({ success: true, payload: result });
});

router.get("/week2", async function (_req, res) {
  const result = await getWeekTwoResources();
  res.json({ success: true, payload: result });
});
router.get("/week3", async function (_req, res) {
  const result = await getWeekThreeResources();
  res.json({ success: true, payload: result });
});

router.get("/week4", async function (_req, res) {
  const result = await getWeekFourResources();
  res.json({ success: true, payload: result });
});
router.get("/week5", async function (_req, res) {
  const result = await getWeekFiveResources();
  res.json({ success: true, payload: result });
});

router.get("/week6", async function (_req, res) {
  const result = await getWeekSixResources();
  res.json({ success: true, payload: result });
});
router.get("/week7", async function (_req, res) {
  const result = await getWeekSevenResources();
  res.json({ success: true, payload: result });
});

router.get("/week8", async function (_req, res) {
  const result = await getWeekEightResources();
  res.json({ success: true, payload: result });
});




// Resources by subject 

// rename route path to /week1 once everything else is completed
router.get("/CSS", async function (_req, res) {
  const result = await getCSSresources();
  res.json({ success: true, payload: result });
});

export default router;