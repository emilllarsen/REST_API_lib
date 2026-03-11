import { validationResult, matchedData } from "express-validator";

export default function validate(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({Error: errors.array});
    }
    res.validate = matchedData(req);
    next();
}