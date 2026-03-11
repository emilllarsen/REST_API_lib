import { matchedData } from "express-validator";
import userServices from "../services/userServices.js";


export function getAllUsers(req, res) {
  res.json({ Message: "This is all users!" });
}

export function getAUser(req, res){
    const uid = req.params.uid;
    const userObj = userServices.getOneUser(uid);
    res.json({msg: `You got this user with id: ${uid}`, ...userObj});
}   

export function getLoanedBook(req, res) {
    res.json({msg: `This is all books loaned on user with id: ${req.params.uid}`});
}

export function createUser(req, res){
    const data = matchedData(req);
    const newId = userServices.createNewId(data);
    res.status(201).json({msg:`User created with id: ${newId}`});
}

export function updateLoan(req, res){
    res.status(201).json({msg: `Book created to a already existing list of user with id: ${req.params.uid}`});
}

export function updateUser(req, res){
    res.json({msg: `User with id: ${req.params.uid} has been updated!`});
}

export function removeLoan(req, res){
    res.json({msg: `User with id: ${req.params.uid} has un-borrowed a book with id: ${req.params.loanid}`});
}

export default {
  getAllUsers,
  getAUser,
  getLoanedBook,
  createUser,
  updateLoan,
  updateUser,
  removeLoan
};
