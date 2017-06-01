"use strict"

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 3001;

