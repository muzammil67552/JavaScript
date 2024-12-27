const ArrayObject = [2, 5, 10, 15, 20, 25, 30];
const arrMap = ArrayObject.map((num) => num * 10);
console.log(arrMap);
// again practice

const anotherArray = [1, 2, 3, 4, 5];
const newarr = anotherArray.map((num) => num / 2);
console.log(newarr);

//new Method

function AnotherArray() {
  const modifiedArray = anotherArray.map((val) => val * 2);
  console.log(modifiedArray);
}
AnotherArray();

// once more

const mynew = [2, 2, 2, 2, 2, 2, 2];
const new1 = mynew.map((e) => e * 3);
console.log(new1);

// filter
const FilerteArray = [10,20,30,40,50,60]
const filterfunc = FilerteArray.filter((val) => val >30)
console.log(filterfunc)


// filter in array of an object

const Obj = [
  {name: "Muzammil", age: 20},
  {name: "Ahmed", age: 22},
  {name: "Bilal", age: 19},
  {name: "Ahmed", age: 24},
  {name: "Akram", age: 30}
];
const FilterObj = Obj.filter((val) => val.age > 20);
console.log(FilterObj);
