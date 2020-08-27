var express = require('express')
var router = express.Router()
const { body, validationResult } = require('express-validator');
const {signout, signup, signin, isSignedIn} = require("../controllers/auth")


router.post(
    "/signup",
    [
        body("name", "name should be 3 characters ").isLength({min: 3}),
        body("email", "email is required ").isEmail(),
        body("password", "password should be at least 3 characters").isLength({min: 3})
    ],
    signup
);


router.post(
    "/signin",
    [
        body("email", "email is required ").isEmail(),
        body("password", "password is required").isLength({min: 1})
    ],
    signin
);



router.get("/signout", signout)


module.exports = router