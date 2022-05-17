var express = require("express");
const indexController = require("../controllers/index-controller");
var router = express.Router();

// homepage
router.get("/", indexController.viewHomepage);

// view all active items page (non deleted items)
router.get("/items/all", indexController.viewAllItems);

// view deleted items page
router.get("/items/deleted", indexController.viewDeletedItems);

// view create new item form
router.get("/item/create", indexController.createItemGet);

// handle create new item form submission
router.post("/item/create", indexController.createItemPost);

// view edit item form
router.get("/item/:id/edit", indexController.editItemGet);

// handle edit item form submission
router.post("/item/:id/edit", indexController.editItemPost);

// view delete item form
router.get("/item/:id/delete", indexController.deleteItemGet);

// handle delete item form submission
router.post("/item/:id/delete", indexController.deleteItemPost);

// handle undelete of item
router.get("/item/:id/undelete", indexController.unDeleteItem);

// view item detail
router.get("/item/:id", indexController.viewItem);

module.exports = router;
