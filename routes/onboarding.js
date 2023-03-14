const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('../models/user');
const tempOwener = require('../models/rider');
const path = require('path');
const authController = require('../controllers/authController')
const helper = require('../helper/helper');


const verifyToken = require('../middleware/verifyTocken');

mongoose.connect('mongodb://127.0.0.1:27017/carpool', { useNewUrlParser: true }, { useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection succeeded.");
});


//////////multer config//////////
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

var upload = multer({
  storage: storage
});

//Register

router.post('/register', authController.userSignUp);


//login 

router.post('/login', authController.userLogIn);