const fs = require("fs");

const validateNumber = (number) => {
  return number && !isNaN(number) && number > 0;
};

//**Crear productos de tecnologia */
const productsToSave = [
  {
    title: "Monitor",
    description: "Monitor de 24 pulgadas",
    price: 10000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "9740",
    stock: 10,
    id: 1,
  },

  {
    title: "Teclado",
    description: "Teclado mecanico",
    price: 20000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "5678",
    stock: 20,
    id: 2,
  },
  {
    title: "Mouse",
    description: "Mouse inalambrico",
    price: 30000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "9945",
    stock: 30,
    id: 3,
  },
  {
    title: "Auriculares",
    description: "Auriculares con microfono",
    price: 40000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "5672",
    stock: 30,
    id: 4,
  },
  {
    title: "Parlantes",
    description: "Parlantes 2.1",
    price: 50000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "9140",
    stock: 30,
    id: 5,
  },
  {
    title: "Impresora",
    description: "Impresora laser",
    price: 60000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "1381",
    stock: 30,
    id: 6,
  },
  {
    title: "Webcam",
    description: "Webcam HD",
    price: 70000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "1387",
    stock: 30,
    id: 7,
  },
  {
    title: "Microfono",
    description: "Microfono de mesa",
    price: 80000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "1389",
    stock: 39,
    id: 8,
  },
  {
    title: "Joystick",
    description: "Joystick inalambrico",
    price: 90000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "8520",
    stock: 30,
    id: 9,
  },
  {
    title: "Memoria RAM",
    description: "Memoria RAM 8GB",
    price: 100000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "8533",
    stock: 30,
    id: 10,
  },
];

module.exports = { productsToSave, validateNumber };
