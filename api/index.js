import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import allDataRoute from "./routes/all_data.js";
import path from "path";

const app = express();
// const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "client/dist" directory
// app.use(express.static(path.join(__dirname, "client", "dist")));

// Route for "/all_data"
app.use("/all_data", allDataRoute);

// Catch-all route, send "index.html" for any other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
