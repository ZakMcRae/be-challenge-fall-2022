const database = require("../util/database");

exports.viewHomepage = function (req, res, next) {
  res.render("index", { title: "Welcome to Jess's Baked Goods" });
};

exports.viewAllItems = async function (req, res, next) {
  const items = await database.getActiveItems();

  res.render("all-items", { title: "View All Items", items });
};

exports.viewDeletedItems = async function (req, res, next) {
  const items = await database.getDeletedItems();

  res.render("deleted-items", { title: "View Deleted Items", items });
};

exports.viewItem = function (req, res, next) {
  res.render("item", { title: item.name });
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
