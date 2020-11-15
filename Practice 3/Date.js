let dateArray = [];

dateArray.push(new Date());
let newDate = new Date();
newDate.setDate(8);
newDate.setMonth(11);
newDate.setFullYear(2018);
newDate.setHours(21);
dateArray.push(newDate);
function monthDays(element) {
  let leapYear = element.getFullYear() % 4 == 0 && !(element.getFullYear() % 100 == 0 && element.getFullYear() % 400 != 0);
  switch (element.getMonth()) {
    case 1:
      return 28 + leapYear;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
      break;
    default:
      return 31;
      break;
  }
}
function calculateDays(arr) {
  arr.forEach(function (element) {
    console.log(monthDays(element));
  });
}
calculateDays(dateArray);
const arrDays = dateArray.map((date) => date.getDay());
console.log(arrDays);

function Days(element) {
  switch (element) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "Invalid day";
      break;
  }
}

function newArr(arr1, arr2) {
  let arrNew = [];
  for (const i in arr1) {
    arrNew.push(`Date: ${arr1[i].getDate()}.${arr1[i].getMonth() + 1}.${arr1[i].getFullYear()}, time: ${arr1[i].getHours()}:${arr1[i].getMinutes()}:${arr1[i].getSeconds()}, ${Days(arr2[i])}. ${monthDays(arr1[i])} days`);
  }
  return arrNew;
}
const newArray = newArr(dateArray, arrDays);
console.log(newArray);
