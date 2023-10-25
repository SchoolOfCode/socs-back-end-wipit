// Import express variable from app.js file
import app from "./app.js";
// Create PORT variable
const PORT = process.env.PORT ?? 3000;
// Write server listener
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});