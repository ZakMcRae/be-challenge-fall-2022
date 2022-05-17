const database = require("../util/database");

exports.viewHomepage = function (req, res, next) {
  res.render("index", { title: "Welcome to Jess's Baked Goods" });
};

// get all active items (non deleted) and display them
exports.viewAllItems = async function (req, res, next) {
  const items = await database.getActiveItems();

  res.render("all-items", { title: "View All Items", items });
};

// get all deleted items and display them
exports.viewDeletedItems = async function (req, res, next) {
  const items = await database.getDeletedItems();

  res.render("deleted-items", { title: "View Deleted Items", items });
};

// get specific item and display it
exports.viewItem = async function (req, res, next) {
  const item = await database.getItem(req.params.id);

  res.render("item", { title: "Item Detail", item });
};

exports.createItemGet = function (req, res, next) {
  res.render("create-item", { title: "Create New Item" });
};

exports.createItemPost = function (req, res, next) {};

exports.editItemGet = function (req, res, next) {
  res.render("edit-item", { title: "Create New Item" });
};

exports.editItemPost = function (req, res, next) {};

exports.deleteItemGet = function (req, res, next) {
  res.render("delete-item", { title: "Delete Item" });
};

exports.deleteItemPost = function (req, res, next) {};
