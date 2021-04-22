const shoppingList = [
  {
    id: 1,
    item: "Milk",
    price: 3.99,
  },
  {
    id: 2,
    item: "Eggs",
    price: 9.0,
  },
  {
    id: 3,
    item: "Newmans Pizza",
    price: 5.6,
  },
];

const lowPriority = [
  {
    item: "New shirt",
    price: 15.99,
  },
  {
    item: "New socks",
    price: 8.0,
  },
  {
    item: "bed sheets",
    price: 16.0,
  },
  {
    item: "toilet paper",
    price: 6.99,
  },
  {
    item: "something really important",
    price: 4.0,
  },
];
// shoppingList.push(lowPriority);

const dateCreated = Date();

const addToShoppingList = (newListItem) => {
  const lastIndex = shoppingList.length - 1;
  const currentLastItem = shoppingList[lastIndex];
  const nextId = currentLastItem.id;

  newListItem.id = nextId + 1;

  shoppingList.push(newListItem);
};

for (const listItem of lowPriority) {
  if (listItem.price > 8.0) {
    console.log(`${listItem.item} is greater than $8.00`);
  }
  addToShoppingList(listItem);
}

//
// console.log(shoppingList);
