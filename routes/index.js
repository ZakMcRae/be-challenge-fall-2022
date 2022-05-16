var express = require("express");
const indexController = require("../controllers/index-controller");
var router = express.Router();

// homepage
router.get("/", indexController.viewHomepage);

// view all items page
router.get("/all-items", indexController.viewAllItems);

// view deleted items page
router.get("/deleted-items", indexController.viewDeletedItems);

// view item detail
router.get("/item/:id", indexController.viewItem);

// view create new item form
router.get("/create-item", indexController.viewCreateItem);

//view edit item form
router.get("/edit-item/:id", indexController.viewEditItem);

module.exports = router;
