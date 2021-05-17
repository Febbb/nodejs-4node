const express = require("express");
const router = express.Router();
const nodeController = require('../controller/nodeController');


router.get("/index",nodeController.index)
router.post("/convert",nodeController.convert)




module.exports = router; 