// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
const addInventory = (arr, name, price, quantity) =>
  arr.push({ name: name, price: price, quantity: quantity });

addInventory(inventory, "Orange", 20, 300);

const editQuantity = (arr, nameToEdit, quantityToEdit) =>
  arr.map((item) =>
    item.name == nameToEdit ? (item.quantity = quantityToEdit) : item.quantity
  );

editQuantity(inventory, "Apple", 200);

const totalInventoryValues = inventory.reduce(
  (acc, { price, quantity }) => acc + quantity * price,
  0
);

console.log(
  `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalInventoryValues} บาท`
);
