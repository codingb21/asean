import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import allDataRoute from "./routes/all_data.js";
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = path.resolve();
//middleware
app.use("/all_data", allDataRoute);
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
// Assuming your frontend is built in the "dist" directory
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  // Update the path to match your built frontend
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

