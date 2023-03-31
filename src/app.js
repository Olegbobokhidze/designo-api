import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import {
  getAllProject,
  getAppProjects,
  getGraphicProjects,
  getWebProjects,
} from "./controllers/project-controller.js";

dotenv.config();
connect();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/images", express.static("./public/images"));
app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works well" });
});

app.get("/api/projects", getAllProject);
app.get("/api/projects/web", getWebProjects);
app.get("/api/projects/app", getAppProjects);
app.get("/api/projects/graphic", getGraphicProjects);
app.listen(3000);
