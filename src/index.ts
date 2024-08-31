import { Item } from "./types/indexTypes";

const items: Item[] = [
  {
    id: 1,
    firstName: "excel",
    lastName: "olatunbosun",
  },

  {
    id: 2,
    firstName: "daniel",
    lastName: "olatunbosun",
  },

  {
    id: 3,
    firstName: "wonder",
    lastName: "olatunbosun",
  },
];

function letsTestThisOut<
  T extends { id: number; firstName: string; lastName: string }
>(param: T[]) {
  return param.map((item) => ({
    id: item.id,
    fullName: `${item.firstName} ${item.lastName}`,
  }));
}

// console.log(letsTestThisOut(items));

function identity<T>(param: T): T {
  return param;
}

console.log(identity(2));
