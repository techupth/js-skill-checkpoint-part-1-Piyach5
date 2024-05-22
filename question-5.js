// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

const calculateTotalPrice = (products, promotionCode) => {
  const total = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let discount = 0;
  function discountFunc(promotionCode) {
    if (promotionCode == "SALE50") {
      return (discount = 50);
    } else if (promotionCode == "SALE20") {
      return (discount = 20);
    } else {
      return (discount = 0);
    }
  }

  discountFunc(promotionCode);
  console.log(discount);

  const totalPrice = total - (total * discount) / 100;
  return console.log(totalPrice);
};

calculateTotalPrice(products, promotionCode);
