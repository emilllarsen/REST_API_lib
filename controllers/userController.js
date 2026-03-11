import { matchedData } from "express-validator";
import userServices from "../services/userServices.js";


export function getAllUsers(req, res) {
  res.json({ Message: "This is all users!" });
}

export default {
  getAllUsers
};
