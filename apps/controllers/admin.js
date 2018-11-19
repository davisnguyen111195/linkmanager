const express = require('express');
const router = express.Router();
let user_md = require('../models/user')
router.get("/", (req, res) => {
    res.json({
        "message": "Admin Page"
    });
});

router.get("/signup", (req, res) => {
    res.render("signup", {data: {}});
})

router.post("/signup", (req, res) => {
    let user = req.body;
    
    if(user.email.trim().length === 0) {
        
        res.render("signup", { 
            data: {
                error: "Email is required"
            }
        });
    }
    if(user.passwd !== user.repasswd || user.passwd.trim().length === 0) {
        res.render("signup", { 
            data: {
                error: "Password is not Match"
            }
        });
    }

    //insert DB
    user = {
        email: user.email,
        password: user.passwd,
        first_Name: user.firstname,
        last_Name: user.lastname
    };
    let result = user_md.addUser(user)

    if(!result) {
        res.render('signup', {
            data: {
                error: "Could not insert user data to DB"
            }
        })
    } else {
        res.json({
            message: "Insert success!"
        })
    }


});

module.exports = router;