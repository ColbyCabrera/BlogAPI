var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/users");

/* GET users listing. */
router.get('/', user_controller.users);

module.exports = router;
