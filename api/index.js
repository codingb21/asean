import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import allDataRoute from "./routes/all_data.js";
import path from "path";

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use("/all_data", allDataRoute);
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
