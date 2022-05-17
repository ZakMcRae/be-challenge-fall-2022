const database = require("../util/database");

exports.viewHomepage = function (req, res, next) {
  res.render("index", { title: "Welcome to Jess's Baked Goods" });
};

// get all active items (non deleted) and display them
exports.viewAllItems = async function (req, res, next) {
  const items = await database.getActiveItems();

  res.render("all-items", { title: "View Inventory Items", items });
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

// get create new item form
exports.createItemGet = function (req, res, next) {
  res.render("create-item", { title: "Create New Item" });
};

// handle create new item form submission
exports.createItemPost = async function (req, res, next) {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
    deleted: false,
    deleteComment: "",
  };
  const item = await database.createItem(newItem);

  // redirect to item detail page
  return res.redirect(`/item/${item.id}`);
};

// get edit item form
exports.editItemGet = async function (req, res, next) {
  const item = await database.getItem(req.params.id);

  res.render("edit-item", { title: "Edit Item", item });
};

// handle edit item form submission
exports.editItemPost = async function (req, res, next) {
  // check value of delete checkbox and set value accordingly
  if (req.body.deleted === "on") {
    req.body.deleted = true;
  } else {
    req.body.deleted = false;
  }

  const item = await database.editItem(req.params.id, req.body);

  // redirect to item detail page
  return res.redirect(`/item/${item.id}`);
};

// get delete item form
exports.deleteItemGet = async function (req, res, next) {
  const item = await database.getItem(req.params.id);

  res.render("delete-item", { title: "Delete Item", item });
};

// handle delete item form submission
exports.deleteItemPost = async function (req, res, next) {
  await database.deleteItem(req.body.id, req.body.deleteComment);

  res.redirect("/items/all");
};

// handle undelete of item
exports.unDeleteItem = async function (req, res, next) {
  // edit items deleted value to false in database
  const item = await database.editItem(req.params.id, { deleted: false });

  res.redirect("/items/all");
};
