const computer = [ {brand : "Hp Computer", generation: "fifth Generation", price:"288889"},
                {brand : "Dell Computer", generation: "fifth Generation", price:"288889"},
                {brand : "Lenovo Computer", generation: "fifth Generation", price:"288889"},
                {brand : "Sumsange Computer", generation: "fifth Generation", price:"288889"},
]
// // for adding one more array by pushing and find by individual array
// //computer.push({brand : "dell Computer", generation: "fifth Generation", price:"288889"})
// computer.slice()
// console.log(computer);

// For Each 
computer.forEach(computer => console.log(computer))

//MAp
 
const computerBrand = computer.map(computer => computer.brand)
console,log(computerBrand
)
// Filter
const Fruit = ["Apple"]
// Example arrays (tables)
const table1 = [1, 2, 3, 4, 5];
const table2 = ['a', 'b', 'c', 'd', 'e'];

// Function to loop through two tables and print their elements
function loopThroughTables(table1, table2) {
    console.log('Table 1 elements:');
    table1.forEach(element => console.log(element));

    console.log('Table 2 elements:');
    table2.forEach(element => console.log(element));
}

// Call the function
loopThroughTables(table1, table2);

