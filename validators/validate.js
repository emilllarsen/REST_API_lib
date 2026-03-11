import { validationResult, matchedData } from "express-validator";

export default function validate(req, res, next){
    const errors = validationResult(req); // Returns a result object https://express-validator.github.io/docs/6.0.0/validation-result-api/

    if(!errors.isEmpty()){ // If the error object is not empty, it means the user sent invalid data. 
        return res.status(400).json({Error: errors.array()}); // Stops processing and sends back a http 400 bad request response in json format with a list of the errors. 
    }
    res.validate = matchedData(req); // If the data is valid, matchedData takes the clean data saves it to a custom valuable (res.validate) 
    next(); // Tells express to proceed to the next piece of middleware
}

/*
    Explanation
        This is a express middleware function to check if incoming requests is valid.
        Is the users data is bad or invalid, it rejects the request and shows an error in json format. 
 */