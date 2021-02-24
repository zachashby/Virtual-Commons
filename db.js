const dotenv = require("dotenv").config();
const { Deta } = require("deta");
const { response } = require("express");

// application setup
const deta = Deta(process.env.PROJECT_KEY);

//table references
const users = deta.Base("users");
const polls = deta.Base("polls");