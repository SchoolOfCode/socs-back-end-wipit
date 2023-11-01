// Import express variable from app.js file
import app from "./app.js";
// Create PORT variable
const PORT = process.env.PORT ?? 3000;
const HOST = process.env.HOST ?? '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
// Write server listener
