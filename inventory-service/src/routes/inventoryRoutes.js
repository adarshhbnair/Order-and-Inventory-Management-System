const router = require("express").Router();
const { reserve } = require("../controllers/inventoryController");

router.post("/reserve", reserve);

module.exports = router;
