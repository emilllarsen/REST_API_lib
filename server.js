import express from "express";
import nonApiRoute from "./routes/nonApiRoute.js";
import apiUserRouter from './routes/api.users.js';
const app = express();

// Middleware to use json!
app.use(express.json());
app.use(nonApiRoute);
app.use("/api", apiUserRouter);



const httpServer = app.listen(process.env.BACKEND_PORT || 8080);
httpServer.on("listening", () =>
  console.log(
    `Copy this URL to go to our REST API library ${process.env.HOSTNAME}${process.env.BACKEND_PORT}`
  )
);
