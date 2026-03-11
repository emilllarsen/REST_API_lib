import express from "express";

const nonApiRoute = express();

nonApiRoute.get("/",  (req, res) => {
    res.send("Move over to api/users to se something!");
});

export default nonApiRoute;