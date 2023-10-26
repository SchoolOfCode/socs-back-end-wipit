import { pool } from "../db/index.js";

export async function getWeekResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 1';"
  );
  return data.rows;
}

export async function getWeekTwoResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 2';"
  );
  return data.rows;
}
export async function getWeekThreeResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 3';"
  );
  return data.rows;
}

export async function getWeekFourResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 4';"
  );
  return data.rows;
}
export async function getWeekFiveResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 5';"
  );
  return data.rows;
}

export async function getWeekSixResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 6';"
  );
  return data.rows;
}
export async function getWeekSevenResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 7';"
  );
  return data.rows;
}

export async function getWeekEightResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 8';"
  );
  return data.rows;
}

// Search data by Subject

export async function getCSSresources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'CSS';"
  );
  return data.rows;
}