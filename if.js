// /x=100
// // if(x==10){
// //     console.log(`the given value is 10`)
// // }
// // else{
// //     console.log(`the value is not 10`)
// // }

// //w.a.p to check a no. is positive or negetive
// // x=0
// // if (x>0){
// //     console.log(`given number is positive`)
// // }
// // else if(x==0){
// //     console.log(`given number is zero`)
// // }
// // else{
// //     console.log(`given number is negetive`)
// // }

// //w.a.p to check a no. is odd or even
// // x=21
// // if(x%2==0){
// // console.log(`even number`)
// // }
// // else{
// // console.log(`odd number`)
// // }

//other way
//--------
// x = 21
// console.log(x%2==0?'even':'odd')
// //w.a.p to check the largest among 2 given numbers
// x = 21
// y = 32
// if (x > y) {
//     console.log(`x (${x}) is the largest number`)
// }
// else if(y>x){
//     console.log(`y (${y}) is the largest number`)
// }
// else {
//     console.log(`two number are the same`)
// }
// //w.a.p to check the 2nd largest among 3 different numbers and arrange them in descending order
// x = 20
// y = 32
// z = 28

// if ((x > y && x < z) || (x > z && x < y)) {
//     console.log(`x (${x}) is the 2nd largest number`)
// }
// else if ((y > x && y < z) || (y > z && y < x)) {
//     console.log(`y (${y}) is the 2nd largest number`)
// }
// else {
//     console.log(`z (${z}) is the 2nd largest number`)
// }

// let nums = [x,y,z]
// nums.sort((x,y)=>y-x)


// console.log(`Descending order`,nums)

// if (x > y && x > z) {
//     if (y > z) {
//         console.log(`y (${y}) is the 2nd largest number`)
//     console.log(`descending order: ${x}>${y}>${z}`)
//     }
//     else{
//         console.log(`z (${z}) is the 2nd largest number`)
//             console.log(`descending order: ${x}>${z}>${y}`)
//     }
// }
// else if(y>x && y>z){
//     if(x>z){
//         console.log(`x (${x}) is the 2nd largest number`)
//             console.log(`descending order: ${y}>${x}>${z}`)

//     }
//     else{
//         console.log(`z (${z}) is the 2nd largest number`)
//             console.log(`descending order: ${y}>${z}>${x}`)

//     }
// }
// else if(z>x && z>y){
//     if(x>y){
//         console.log(`x (${x}) is the 2nd largest number`)
//             console.log(`descending order: ${z}>${x}>${y}`)

//     }
// else{
//         console.log(`y (${y}) is the 2nd largest number`)
//             console.log(`descending order: ${z}>${y}>${x}`)
// }
// }
// else{
//         console.log(`invalid`)
// }

//w.a.p to print fizz if a no. is divisble by 3 and buzz if a no. is divible by 15 and if the no. is divible by 5 and 3 print fizzbuzz

// x=3
// if(x%15==0){
//     console.log(`fizzbuzz`)
// }
// else if(x%5==0){
//     console.log(`buzz`)
// }
// else if(x%3==0){
//     console.log(`fizz`)
// }
// else{
//     console.log(`invalid`)
// }