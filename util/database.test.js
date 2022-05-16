const database = require("../util/database");

// reset database to default before each test
beforeEach(async () => {
  return await database.resetDatabase();
});

// reset database to default after all tests
afterAll(async () => {
  return await database.resetDatabase();
});

test("getAll - get all database items", async () => {
  const items = await database.getAll();

  // check shape of returned items
  expect(items).toEqual(
    expect.arrayContaining([
      {
        id: expect.any(String),
        name: expect.any(String),
        price: expect.any(Number),
        deleted: expect.any(Boolean),
        deleteComment: expect.any(String),
      },
    ])
  );

  // should be only 3 items in default database
  expect(items.length).toBe(3);
});

test("getActiveItems - get all active database items", async () => {
  const items = await database.getActiveItems();

  // check shape of returned items
  expect(items).toEqual(
    expect.arrayContaining([
      {
        id: expect.any(String),
        name: expect.any(String),
        price: expect.any(Number),
        deleted: expect.any(Boolean),
        deleteComment: expect.any(String),
      },
    ])
  );

  // there should be only 2 active items in default database
  expect(items.length).toBe(2);
});

test("getDeletedItems - get all deleted database items", async () => {
  const items = await database.getDeletedItems();

  // check shape of returned items
  expect(items).toEqual(
    expect.arrayContaining([
      {
        id: expect.any(String),
        name: expect.any(String),
        price: expect.any(Number),
        deleted: expect.any(Boolean),
        deleteComment: expect.any(String),
      },
    ])
  );

  // there should be only 1 deleted item in default database
  expect(items.length).toBe(1);
});

test("getItem - get a single database item", async () => {
  const item = await database.getItem("c840f7c3-e985-4ff5-a98c-d8fce60d7987");

  // check that name matches as expected
  expect(item.name).toEqual("Fresh Baked Bread - Large Loaf");
});

test("deleteItem - delete a single database item", async () => {
  await database.deleteItem(
    "c840f7c3-e985-4ff5-a98c-d8fce60d7987",
    "ran out of yeast"
  );

  // check that item has been deleted
  const item = await database.getItem("c840f7c3-e985-4ff5-a98c-d8fce60d7987");
  expect(item.deleted).toBe(true);
  expect(item.deleteComment).toBe("ran out of yeast");
});

test("createItem - create a new database item", async () => {
  const newItem = {
    name: "Chocolate Chip Cookies - 6 pack",
    price: 7.99,
    deleted: false,
    deleteComment: "",
  };

  await database.createItem(newItem);

  // check that item has been created
  const items = await database.getAll();
  expect(items.length).toBe(4);
});
