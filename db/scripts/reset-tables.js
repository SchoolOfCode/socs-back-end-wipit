// Script that populates the SQL database once the resetAllTables functions is called
import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
  const insertedRows = await resetAllTables([
    { week: "Week 1", subject: "Mindset", title: "Computational Thinking", resource: "https://www.youtube.com/watch?v=qbnTZCj0ugI" },
    { week: "Week 1", subject: "Mindset", title: "Agile Methodology", resource: "https://www.youtube.com/watch?v=ZZ_vnqvW4DQ" },
    { week: "Week 1", subject: "Mindset", title: "AI Tools", resource: "https://www.youtube.com/watch?v=xrGysUfLlcE" },
    { week: "Week 1", subject: "Mindset", title: "VSCode Shotcuts", resource: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf" },
    { week: "Week 1", subject: "Mindset", title: "Terminal Commands", resource: "https://gist.github.com/bradtraversy/cc180de0edee05075a6139e42d5f28ce" },
    { week: "Week 1", subject: "Mindset", title: "Git", resource: "https://www.youtube.com/watch?v=hwP7WQkmECE" },
    { week: "Week 1", subject: "Mindset", title: "GitHub", resource: "https://education.github.com/git-cheat-sheet-education.pdf" },
    { week: "Week 1", subject: "HTML", title: "HTML", resource: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1" },
    { week: "Week 1", subject: "CSS", title: "CSS", resource: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1" },
    { week: "Week 2", subject: "JavaScript", title: "JavaScript Fundamentals", resource: "https://www.jshero.net/en/home.html" },
    { week: "Week 2", subject: "JavaScript", title: "Loops", resource: "https://javascript.info/while-for" },
    { week: "Week 2", subject: "JavaScript", title: "Functions", resource: "https://javascript.info/closure" },
    { week: "Week 2", subject: "JavaScript", title: "Scope", resource: "https://www.freecodecamp.org/news/an-introduction-to-scope-in-javascript-cbd957022652/" },
    { week: "Week 2", subject: "JavaScript", title: "Arrays", resource: "https://javascript.info/array" },
    { week: "Week 2", subject: "JavaScript", title: "Objects", resource: "https://javascript.info/object" },
    { week: "Week 2", subject: "JavaScript", title: "Array Methods", resource: "https://javascript.info/array-methods" },
    { week: "Week 2", subject: "JavaScript", title: "Callbacks", resource: "https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript-js-callbacks-example-tutorial/" },
    { week: "Week 2", subject: "Mindset", title: "Debugging", resource: "https://code.visualstudio.com/docs/editor/debugging" },
    { week: "Week 3", subject: "JavaScript", title: "DOM Manipulation", resource: "https://www.w3schools.com/js/js_htmldom.asp" },
    { week: "Week 3", subject: "JavaScript", title: "Event Handling", resource: "https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers" },
    { week: "Week 3", subject: "API", title: "HTTP", resource: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
    { week: "Week 3", subject: "API", title: "APIs", resource: "https://www.freecodecamp.org/news/apis-for-beginners/" },
    { week: "Week 3", subject: "JavaScript", title: "JSON", resource: "https://www.w3schools.com/js/js_json_intro.asp" },
    { week: "Week 3", subject: "JavaScript", title: "Promises", resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
    { week: "Week 3", subject: "JavaScript", title: "Async/Await", resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" },
    { week: "Week 3", subject: "API", title: "Fetch API", resource: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
    { week: "Week 3", subject: "JavaScript", title: "Error Handling", resource: "https://www.youtube.com/watch?v=blBoIyNhGvY" },
    { week: "Week 3", subject: "API", title: "Timer APIs", resource: "https://www.freecodecamp.org/news/the-differences-between-javascripts-asynchronous-api-timers-d916e0596716/" },
    { week: "Week 4", subject: "Node", title: "Node.js", resource: "https://www.w3schools.com/nodejs/nodejs_intro.asp" },
    { week: "Week 4", subject: "Node", title: "NPM", resource: "https://www.w3schools.com/whatis/whatis_npm.asp" },
    { week: "Week 4", subject: "Node", title: "Modules", resource: "https://www.w3schools.com/nodejs/nodejs_modules.asp" },
    { week: "Week 4", subject: "Node", title: "ESM", resource: "https://www.freecodecamp.org/news/modules-in-javascript/" },
    { week: "Week 4", subject: "API", title: "CRUD Operations", resource: "https://www.freecodecamp.org/news/crud-operations-explained/" },
    { week: "Week 4", subject: "API", title: "REST APIs", resource: "https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/" },
    { week: "Week 4", subject: "Node", title: "Express", resource: "https://expressjs.com/" },
    { week: "Week 4", subject: "API", title: "MVC Architecture", resource: "https://www.geeksforgeeks.org/mvc-framework-introduction/" },
    { week: "Week 4", subject: "API", title: "Middleware", resource: "https://www.freecodecamp.org/news/what-is-middleware-with-example-use-cases/" },
    { week: "Week 5", subject: "SQL", title: "Databases Introduction", resource: "https://www.freecodecamp.org/news/learn-sql-free-relational-database-courses-for-beginners/" },
    { week: "Week 5", subject: "SQL", title: "SQL Queries", resource: "https://www.w3schools.com/sql/sql_intro.asp" },
    { week: "Week 5", subject: "SQL", title: "Joins", resource: "https://www.w3schools.com/sql/sql_join.asp" },
    { week: "Week 5", subject: "SQL", title: "Subqueries", resource: "https://www.w3resource.com/sql/subqueries/understanding-sql-subqueries.php" },
    { week: "Week 5", subject: "SQL", title: "Hosted Postgres", resource: "https://medium.com/@noogetz/how-to-setup-a-database-with-elephantsql-7d87ea9953d0" },
    { week: "Week 5", subject: "API", title: "node-postgres", resource: "https://node-postgres.com/" },
    { week: "Week 5", subject: "API", title: "Environment Variables", resource: "https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html" },
    { week: "Week 6", subject: "Testing", title: "Testing Basics", resource: "https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/" },
    { week: "Week 6", subject: "Testing", title: "TDD", resource: "https://www.geeksforgeeks.org/test-driven-development-tdd/" },
    { week: "Week 6", subject: "Testing", title: "E2E Testing", resource: "https://katalon.com/resources-center/blog/end-to-end-e2e-testing" },
    { week: "Week 6", subject: "Testing", title: "API Testing", resource: "https://www.w3schools.in/software-testing/api-testing?utm_content=cmp-true" },
    { week: "Week 6", subject: "Testing", title: "Vitest", resource: "https://vitest.dev/" },
    { week: "Week 6", subject: "Testing", title: "Supertest", resource: "https://www.npmjs.com/package/supertest" },
    { week: "Week 6", subject: "Testing", title: "Playwright", resource: "https://playwright.dev/docs/intro" },
    { week: "Week 7", subject: "Mindset", title: "Product and Product Teams", resource: "https://www.crema.us/blog/what-is-a-product-team" },
    { week: "Week 7", subject: "Mindset", title: "UX/Design Thinking Process", resource: "https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process" },
    { week: "Week 7", subject: "Mindset", title: "User Research", resource: "https://www.userinterviews.com/ux-research-field-guide-chapter/create-user-research-plan" },
    { week: "Week 7", subject: "Mindset", title: "Wireframes", resource: "https://www.youtube.com/watch?v=D4NyQ5iOMF0" },
    { week: "Week 7", subject: "Mindset", title: "Basics of UI Design", resource: "https://zight.com/blog/ui-design/" },
    { week: "Week 7", subject: "CSS", title: "CSS Layouts", resource: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" },
    { week: "Week 8", subject: "", title: "", resource: "" },
    { week: "Week 8", subject: "", title: "", resource: "" }
  ]);
  console.log("Reset all tables and inserted data");
  console.log(insertedRows);
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}