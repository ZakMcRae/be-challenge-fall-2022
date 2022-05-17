const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

// reset database to default - for testing purposes in basic app
exports.resetDatabase = async () => {
  const defaultDB = [
    {
      name: "Fresh Baked Bread - Large Loaf",
      price: 5.99,
      deleted: false,
      deleteComment: "",
      id: "c840f7c3-e985-4ff5-a98c-d8fce60d7987",
    },
    {
      name: "Blueberry Muffin - 6 pack",
      price: 9.99,
      deleted: false,
      deleteComment: "",
      id: "475ddfe8-4ab3-4ab5-8639-83d2f89f85a0",
    },
    {
      name: "Chocolate Cupcakes - 6 pack",
      price: 12.99,
      deleted: true,
      deleteComment: "Ran out of cocoa powder",
      id: "e10a4b21-e86c-449e-a9e9-a3b444e8b4e4",
    },
  ];

  await fs.writeFile("db.json", JSON.stringify(defaultDB));
};

// return all database items
exports.getAll = async () => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  return items;
};

// return all active database items - ie not deleted
exports.getActiveItems = async () => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  // filter out any deleted items
  const returnItems = items.filter((item) => item.deleted === false);

  return returnItems;
};

// return all deleted database items
exports.getDeletedItems = async () => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  // filter out any not deleted items
  const returnItems = items.filter((item) => item.deleted === true);

  return returnItems;
};

// get single item out of database
exports.getItem = async (id) => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  // return item with matching id
  return items.find((item) => item.id === id);
};

// delete specific item from database, optionally with comment
exports.deleteItem = async (id, deleteComment = "") => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  // find item in database and set deleted to true and add delete comment
  const newItems = items.map((item) => {
    if (item.id === id) {
      item.deleted = true;
      item.deleteComment = deleteComment;
    }
    return item;
  });

  await fs.writeFile("db.json", JSON.stringify(newItems));

  return;
};

// create new database item
exports.createItem = async (item) => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  item.id = uuidv4();
  items.push(item);

  await fs.writeFile("db.json", JSON.stringify(items));

  return item;
};

// edit specific item in database
exports.editItem = async (id, item) => {
  const dbData = await fs.readFile("db.json", "utf8");
  const items = JSON.parse(dbData);

  // get item from database with matching id
  const dbItem = items.find((item) => item.id === id);

  // update item with new values
  const updatedItem = {
    ...dbItem,
    ...item,
  };

  // replace old item with new item
  const newItems = items.map((item) => {
    if (item.id === id) {
      return updatedItem;
    }
    return item;
  });

  await fs.writeFile("db.json", JSON.stringify(newItems));

  return updatedItem;
};
