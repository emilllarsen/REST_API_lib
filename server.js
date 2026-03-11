import express from "express";
import nonApiRoute from "./routes/nonApiRoute.js";
import apiUserRouter from "./routes/api.users.js";
const app = express();

// Middleware to use json!

app.use(nonApiRoute);
app.use("/api", apiUserRouter);

const httpServer = app.listen(process.env.BACKEND_PORT || 8080);
httpServer.on("listening", () =>
  console.log(
    `Copy this URL to go to our REST API library ${process.env.HOSTNAME}${process.env.BACKEND_PORT}`
  )
);

function gracefulShutdown() {
  console.log("\nThe library is shutting down!");
  httpServer.close(() => {
    process.exit(0);
  });
}


/*
Why is this smart?
  - Instead of abrupt killing the process, this code lets the server finish what its doing before securely shutting down. 
*/
// SIGINT is is triggered when we interrupt the process from the terminal with control + C
process.on("SIGINT", gracefulShutdown);

// SIGTERM is a termination signal from the operating system or a process manager like DOCKER asking the process to shut down! 
process.on("SIGTERM", gracefulShutdown);
