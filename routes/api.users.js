import express from "express";

const apiUserRouter = express.Router()


apiUserRouter.get("/users"); // Get all users

apiUserRouter.get("/users/:uid"); // Get a user 

apiUserRouter.get("/users/:uid/loans"); // Get all loaned books on a user!

apiUserRouter.post("/users"); // Create a new user

apiUserRouter.post("/users/:uid/loans"); // Adding a book to a already created list on loaned books 

apiUserRouter.put("/users/:uid"); // Update a user

apiUserRouter.delete("/users/:uid/loans/:loanid"); // Removing a book from a list of loaned books


export default apiUserRouter;

