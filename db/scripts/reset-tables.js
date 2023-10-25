// Script that populates the SQL database once the resetAllTables functions is called
import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
  const insertedRows = await resetAllTables([
    { week: "Week 1", subject: "Mindset", title: "Computational Thinking", resource: "https://www.youtube.com/watch?v=qbnTZCj0ugI" },
    { week: "Week 1", subject: "Mindset", title: "Agile Methodology", resource: "https://www.youtube.com/watch?v=ZZ_vnqvW4DQ" },
    { week: "Week 2", subject: "HTML", title: "Tags", resource: "https://www.youtube.com/watch?v=tv6bxtCjqDI" },
    { week: "Week 2", subject: "HTML", title: "Semantics", resource: "https://www.youtube.com/watch?v=abc123" },
    { week: "Week 3", subject: "CSS", title: "Selectors", resource: "https://www.youtube.com/watch?v=xyz456" },
    { week: "Week 3", subject: "CSS", title: "Box Model", resource: "https://www.youtube.com/watch?v=def789" },
    { week: "Week 4", subject: "JavaScript", title: "Variables", resource: "https://www.youtube.com/watch?v=ghi101" },
    { week: "Week 4", subject: "JavaScript", title: "Functions", resource: "https://www.youtube.com/watch?v=jklmno" },
    { week: "Week 5", subject: "Mindset", title: "Growth Mindset", resource: "https://www.youtube.com/watch?v=mnopqr" },
    { week: "Week 5", subject: "Mindset", title: "Resilience", resource: "https://www.youtube.com/watch?v=stuvwx" },
    { week: "Week 6", subject: "Node", title: "Introduction to Node.js", resource: "https://www.youtube.com/watch?v=uvwxzy" },
    { week: "Week 6", subject: "Node", title: "Express.js", resource: "https://www.youtube.com/watch?v=ijklmn" },
    { week: "Week 7", subject: "HTML", title: "Forms", resource: "https://www.youtube.com/watch?v=pqrstu" },
    { week: "Week 7", subject: "HTML", title: "Accessibility", resource: "https://www.youtube.com/watch?v=vwxyz1" },
    { week: "Week 8", subject: "CSS", title: "Flexbox", resource: "https://www.youtube.com/watch?v=def789" },
    { week: "Week 8", subject: "CSS", title: "Grid", resource: "https://www.youtube.com/watch?v=jklmno" }
  ]);
  console.log("Reset all tables and inserted data");
  console.log(insertedRows);
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}