//          *
//       *     *
//    *           *
//  *  *   *  *  *  *             

for (row = 1; row <= 4; row++) {
    str = ''
    for (col = 1; col <= 7; col++) {
        if (row + col == 5 || col - row == 3 || row == 4) {
            str += '*'
        }
        else {
            str += ' '
        }
    }
    console.log(str);
}
console.log("---------------------------------");


// * * * * *
// *       *  
// *       *  
// *       *  
// * * * * *  

for (row = 1; row <= 5; row++) {
    str = ''
    for (col = 1; col <= 5; col++)
        if (row == 1 || row == 5 || col == 1 || col == 5) {
            str += ' * '
        }
        else {
            str += '   '
        }
    console.log(str);
}
console.log("---------------------------------");

// * * * * * 1,5
//  *     *   2,4
//   *   *    3,3
//     *        4,2
//   *   *
//  *     *
// * * * * *

for (row = 1; row <= 7; row++) {
    str = ''
    for (col = 1; col <= 5; col++) {
        if (row == col || col + row == 6 || row == 1 || row == 7) {
            str += ' * '
        }
        else {
            str += '  '
        }
    }
    console.log(str);
}
console.log("---------------------------------");

//1
//0 1
//1 0 1
//0 1 0 1

for (row = 1; row <= 4; row++) {
    str = ''
    for (col = 1; col <= row; col++) {
        if (row == col || row - col == 2) {  //(row+col)%2==0
            str += " 1"
        }
        else {
            str += " 0"
        }
    }
    console.log(str)
}
console.log("---------------------------------");

//            11
//         12 13 14
//      15 16 17 18 19
//   20 21 22 23 24 25 26
//27 28 29 30 31 32 33 34 35

x = 11
for (row = 1; row <= 5; row++) {
    str = ''
    for (spa = 1; spa <= 5 - row; spa++) {
        str += "   "
    }
    for (col = 1; col <= 2 * row - 1; col++) {
        str += x + " "
        x++
    }
    console.log(str);
}
console.log("---------------------------------");
