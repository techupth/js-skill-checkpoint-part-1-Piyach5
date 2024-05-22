// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

const checkPasswordStrength = (password) => {
  if (password.length < 6) {
    return console.log("Weak");
  } else if (password.length >= 6 && password.length <= 10) {
    return console.log("Medium");
  } else {
    return console.log("Strong");
  }
};

checkPasswordStrength("swnalWadqQ");
checkPasswordStrength("TechUp");
checkPasswordStrength("abcde");
