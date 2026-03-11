import { param, body } from "express-validator";
import {
  checkIfUserExist,
  checkIfUsernameExist
} from "../services/userServices.js";

export function validateUid() {
  return [
    param("uid")
      .isInt({ min: 0, max: Number.MAX_SAFE_INTEGER })
      .withMessage("User IDs is supposed to be integers larger than 0!")
      .bail()
      .toInt()
      .custom(checkIfUserExist)
  ];
}

export function validateLoan() {
  return [
    param("loanid")
      .isInt({ min: 1, max: Number.MAX_SAFE_INTEGER })
      .withMessage("Loan IDs are supposed to be integers starting with 1")
      .toInt()
  ];
}

export function validateUser() {
  return [
    body("username")
      .trim()
      .escape()
      .isAlphanumeric()
      .withMessage("Only Alpha numeric characters is allowed in username")
      .bail()
      .custom((username) => !checkIfUsernameExist(username))
      .withMessage("Username already exists"),
    body("pwd")
      .trim()
      .isStrongPassword({
        minLength: 3,
        minLowerCase: 3,
        minUpperCase: 1,
        minNumbers: 2,
        minSymbols: 1
      })
      .withMessage(
        "A password should be 9+ characters and contain 2 of each: lower/uppercase characters, numbers, and symbols",
      )
  ];
}

export default {
  validateUid,
  validateLoan,
  validateUser
};
