import express from 'express';
import Hello from "./hello.js";
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import cors from "cors"; 
import "dotenv/config";
const app = express();
app.use(cors());
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);