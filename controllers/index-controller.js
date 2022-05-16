exports.viewHomepage = function (req, res, next) {
  res.render("index", { title: "Welcome to Jess's Baked Goods" });
};

exports.viewAllItems = function (req, res, next) {
  res.render("all-items", { title: "View All Items" });
};

exports.viewDeletedItems = function (req, res, next) {
  res.render("deleted-items", { title: "View Deleted Items" });
};

exports.viewItem = function (req, res, next) {
  res.render("item", { title: item.name });
};

exports.viewCreateItem = function (req, res, next) {
  res.render("create-item", { title: "Create New Item" });
};

exports.viewEditItem = function (req, res, next) {
  res.render("edit-item", { title: "Create New Item" });
};
