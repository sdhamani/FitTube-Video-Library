const express = require("express");
const router = express.Router();
const privateRoute = require("../middlewears/verifyToken");
const { User } = require("../models/user.model");
const { extend } = require("lodash");
