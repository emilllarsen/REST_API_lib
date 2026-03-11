import express from "express";
import userController from "../controllers/userController.js";
import validate from "../validators/validate.js";
import userValidator from "../validators/userValidate.js";
const apiUserRouter = express.Router();

apiUserRouter.get("/users", userController.getAllUsers); // Get all users

apiUserRouter.get(
  "/users/:uid",
  validate,
  userValidator.validateUid(),
  userController.getAUser
); // Get a user

apiUserRouter.get(
  "/users/:uid/loans",
  validate,
  userValidator.validateUid(),
  userController.getLoanedBook
); // Get all loaned books on a user!

apiUserRouter.post(
  "/users",
  validate,
  userValidator.validateUser(),
  userController.createUser
); // Create a new user

apiUserRouter.post(
  "/users/:uid/loans",
  validate,
  userValidator.validateUid(),
  userController.updateLoan
); // Adding a book to a already created list on loaned books

apiUserRouter.put(
  "/users/:uid",
  validate,
  userValidator.validateUid(),
  userController.updateUser
); // Update a user

apiUserRouter.delete(
  "/users/:uid/loans/:loanid",
  userValidator.validateUid(),
  userValidator.validateLoan(),
  validate,
  userController.removeLoan
); // Removing a book from a list of loaned books

export default apiUserRouter;
