// // const PRODUCTS = "products";
// const SUPPLIERS = "suppliers";

// const initialData = {
//   PRODUCTS: [
//     { id: 1, name: "Trail Shoes", category: "Running", price: 100 },
//     { id: 2, name: "Thermal Hat", category: "Running", price: 12 },
//     { id: 3, name: "Heated Gloves", category: "Running", price: 82.5 },
//   ],
//   [SUPPLIERS]: [
//     { id: 1, name: "Zoom Shoes", city: "London", products: [1] },
//     { id: 2, name: "Cosy Gear", city: "New York", products: [2, 3] },
//   ],
// };

// const prods = () =>{
//   let PRODUCTS = [
//     { id: 1, name: "Trail Shoes", category: "Running", price: 100 },
//     { id: 2, name: "Thermal Hat", category: "Running", price: 12 },
//     // { id: 3, name: "Heated Gloves", category: "Running", price: 82.5 },
//     { id: 3, name: "XXXHeated GlovesXXX", category: "Running$$$", price: 182.5 }
//   ]
//   return PRODUCTS;
// }

// let items = (...items) => items;

// // let index = initialData[PRODUCTS].findIndex(article => article.id === 1);
// let newdata = { ...initialData , PRODUCTS: prods() };
// console.log("Initial Data: ", initialData);
// console.log("New Data: ", newdata);
// console.log("****************************************");
// console.log("Items: ", items(1,2,3).length);
// // console.log("Index Data: ", index)


// eslint-disable-next-line no-unused-vars
const droneCateg = {
  url: "http://localhost:8000/drone-categories/1",
  pk: 1,
  name: "Gem Stone",
  drones: ["http://localhost:8000/drones/139", "http://localhost:8000/drones/6"],
};


let { url, pk, name, drones } = droneCateg ;
console.log("Drone: ", drones);

let [id1, id2 ] = drones;
console.log("IDs: ", id1);

let lastChar = Array.from(id1)[id1.length -1];
console.log("LastChar: ", lastChar);

const LastIndex = id1.lastIndexOf("/");
console.log("LastIndex: ", LastIndex);

// console.log("Split: ", id1.split(" ,"));

console.log("Slice: ", id1.slice(LastIndex + 1));