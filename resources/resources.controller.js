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

export async function getHTMLresources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'HTML';"
  );
  return data.rows;
}

export async function getJavascriptResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'JavaScript';"
  );
  return data.rows;
}

export async function getMindsetResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'Mindset';"
  );
  return data.rows;
}

export async function getNodeResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'Node';"
  );
  return data.rows;
}

export async function getTestingResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'Testing';"
  );
  return data.rows;
}

export async function getSQLResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'SQL';"
  );
  return data.rows;
}

export async function getAPIResources() {
  const data = await pool.query(
    "SELECT * FROM resource_library WHERE subject = 'API';"
  );
  return data.rows;
}

// POST data

export async function postResources(resource) {
  const data = `INSERT INTO resource_library (week, subject, title, resource) VALUES ($1, $2, $3, $4) RETURNING *;`;
  const result = await pool.query(data, [
    resource.week,
    resource.subject,
    resource.title,
    resource.resource,
  ]);
  return result.rows[0];
}
