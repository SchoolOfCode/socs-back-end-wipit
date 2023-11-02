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
  getCSSresources,
  getHTMLresources,
  getJavascriptResources,
  getMindsetResources,
  getNodeResources,
  getTestingResources,
  getSQLResources,
  getAPIResources,
  postResources,
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

router.get("/HTML", async function (_req, res) {
  const result = await getHTMLresources();
  res.json({ success: true, payload: result });
});

router.get("/Javascript", async function (_req, res) {
  const result = await getJavascriptResources();
  res.json({ success: true, payload: result });
});

router.get("/Mindset", async function (_req, res) {
  const result = await getMindsetResources();
  res.json({ success: true, payload: result });
});

router.get("/Node", async function (_req, res) {
  const result = await getNodeResources();
  res.json({ success: true, payload: result });
});

router.get("/Testing", async function (_req, res) {
  const result = await getTestingResources();
  res.json({ success: true, payload: result });
});

router.get("/SQL", async function (_req, res) {
  const result = await getSQLResources();
  res.json({ success: true, payload: result });
});

router.get("/API", async function (_req, res) {
  const result = await getAPIResources();
  res.json({ success: true, payload: result });
});

//POST new resources

router.post("/", async function (req, res) {
  const data = req.body;
  const result = await postResources(data);
  res.status(201).json({ status: "success", data: result });
});

export default router;
