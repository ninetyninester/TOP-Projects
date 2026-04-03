// // Exercise 1

// let str = "my-short-string";
// function camelize(str){
//     return str
//     .split('-')
//     .map((currentValue,index) => index == 0 ? currentValue : currentValue[0].toUpperCase() + currentValue.slice(1))
//     .join("");
// }

// console.log (camelize(str));

// Exercise 2

// let arr = [5,3,8,1];

// function filterRange(arr, a, b){
//    for(i=0; i< arr.length; i++){
//     if(arr[i] <= a || arr[i] >= b){
//         arr.splice(i,1);
//         i--;
//     }
//    }
//    return arr
// }

// console.log (filterRange(arr, 2, 7))

// Excercise 3

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a)

// console.log(arr);

// Exercise 4

// let arr = [5, 2, 1, -10, 8];

// function toSort (arr){
//     return arr.slice().sort((a, b) => b - a);
// }
// let arrCopy = toSort(arr);
// console.log(arr);
// console.log(arrCopy);

// Exercise 5

// let arr = [1, 2, 3, 42, 13, 56];

// function shuffle(array){
//     return array.sort(()=>Math.random()-0.5);
// }

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [3, 2, 1]
// // ...

// Exercise 6

function unique(arr) {

  let result = [];
  

  for(let str of arr){
    if(!result.includes(str)){
      result.push(str);
    }
  }

  return result;
}

    let str = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));