import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import { syncUserKelas } from "./models/index.js";
import kelasRoute from "./routes/kelasRoute.js";
 
const app = express();
syncUserKelas();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(kelasRoute);
 
app.listen(5000, ()=> 
    console.log('Server up and running...'));