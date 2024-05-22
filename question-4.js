// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const findMinInventory = (arr) => {
  const min = arr
    .map(({ quantity }) => quantity)
    .reduce((min, quantity) => {
      if (min == 0) {
        min = quantity;
      } else if (min <= quantity) {
        min = min;
      } else {
        min = quantity;
      }
      return min;
    }, 0);

  const minProductName = arr
    .filter(({ quantity }) => quantity == min)
    .reduce((name, item) => (name = item.name), "");

  const message = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProductName} ซึ่งมี ${min} ชิ้น`;

  return console.log(message);
};

findMinInventory(inventory);
