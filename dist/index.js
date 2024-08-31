"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [
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
function letsTestThisOut(param) {
    return param.map((item) => ({
        id: item.id,
        fullName: `${item.firstName} ${item.lastName}`,
    }));
}
// console.log(letsTestThisOut(items));
function identity(param) {
    return param;
}
console.log(identity(2));
