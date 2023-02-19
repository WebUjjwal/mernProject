const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/userSchema')
router.get(('/'), (req, res) => {
    res.send('This is form Home page by router')
});

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(work);
    // console.log(password);
    // res.json({ message: req.body });
    // res.send('form rouer page checker');


    // validation condition

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the blank" })
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                returnres.status(422).json({ error: "This email is already used" });
            }

            const user = new User({ name, email, phone, work, password, cpassword });

            user.save().then(() => {
                res.status(201).json({ message: 'user register sucessfully' });
            }).catch((err) => res.status(500).json({ error: "Faild to registered" }))

        }).catch(err => {
            console.log(err);
        });


});


module.exports = router;