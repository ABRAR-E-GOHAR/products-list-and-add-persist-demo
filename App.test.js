import moment from "moment";
import columns from "./src/Products/columns";
import {
  ADD_PRODUCT,
  POPULATE_PRODUCTS_FROM_LOCAL_STORAGE,
} from "./src/Products/constants";
const products = [
  {
    name: "Abrar",
    description: "Abrar description",
    price: 100,
    inventory_date: moment(new Date()).toLocaleString(),
  },
];

test("One object should contain these properties be like this", () => {
  expect(products).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: "Abrar",
        description: "Abrar description",
        price: 100,
        inventory_date: moment(new Date()).toLocaleString(),
      }),
    ])
  );
});

test("Table columns should be", () => {
  expect(columns).toEqual(
    expect.arrayContaining([
      expect.objectContaining(
        {
          title: "Name",
        },
        {
          title: "Description",
        },
        {
          title: "Price",
        },

        {
          title: "Inventory Date",
        }
      ),
    ])
  );
});

test("Add product constant", () => {
  expect(ADD_PRODUCT).toBe("ADD_PRODUCT");
});

test("Populate product constant", () => {
  expect(POPULATE_PRODUCTS_FROM_LOCAL_STORAGE).toBe(
    "POPULATE_PRODUCTS_FROM_LOCAL_STORAGE"
  );
});
