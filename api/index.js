import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import allDataRoute from "./routes/all_data.js";
import mysql from "mysql2";
import path from "path";
const db = mysql.createConnection({
  host: "172.21.1444.1",
  user: "root",
  password: "",
  database: "mydb",
  port: 3306,
});
const __dirname = path.resolve();
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use("/all_data", allDataRoute);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
