import express from "express";
import userController from '../controllers/userController.js';
import validate from '../validators/validate.js';
const apiUserRouter = express.Router();


apiUserRouter.get("/users", userController.getAllUsers, validate); // Get all users


apiUserRouter.get("/users/:uid"); // Get a user 

apiUserRouter.get("/users/:uid/loans", validate); // Get all loaned books on a user!

apiUserRouter.post("/users", validate); // Create a new user

apiUserRouter.post("/users/:uid/loans", validate); // Adding a book to a already created list on loaned books 

apiUserRouter.put("/users/:uid", validate); // Update a user

apiUserRouter.delete("/users/:uid/loans/:loanid", validate); // Removing a book from a list of loaned books


export default apiUserRouter;

