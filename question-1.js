// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
const addTodo = (arr, text) => {
  return arr.push({ id: myTodo.length + 1, todo: text });
};

addTodo(myTodo, "Walk the dog");

const editTodo = (arr, id, text) =>
  arr.map((item) => (item.id == id ? (item.todo = text) : item.todo));

editTodo(myTodo, 4, "Go to the gym");

myTodo.pop();

console.log(
  `To-do: id: ${myTodo[myTodo.length - 1].id}, ${
    myTodo[myTodo.length - 1].todo
  }`
);
