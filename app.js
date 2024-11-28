//console.log("Hello Node !");
const numbers = [1, 5, 7, 9];
numbers.forEach((num) => {
  //console.log(num);
});

//Globals
// process:: info relative all'ambiente di esecuzione
// process.argv

//console.log(process);

//console.log(process.argv);

//process.argv[2]

// const miastringa = process.argv[2].toUpperCase();
// console.log(miastringa);

//console.log(process.argv[2] ?? "default"); // null coalescing

//const ingredienti = process.argv.slice(2);
//console.log(ingredienti);
ingredienti.forEach((i) => {
  //   console.log(`
  //     Ingrediente ${i}
  //     `);
});

console.log(__dirname);
console.log(__filename);
