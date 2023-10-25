import { pool } from "../db/index.js";

export async function getWeekResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE week = 'Week 1';"
  );
  return data.rows;
}
