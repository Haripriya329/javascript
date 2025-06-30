// # # # #
// # # # #
// # # # #
// # # # #


for (row = 1; row <= 4; row++) {
    str = "";
    for (col = 1; col <= 4; col++) {
        str += "#";
    }

    console.log(str);
}
console.log("---------------------------------");

// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for (row = 1; row <= 4; row++) {
    str = "";
    for (col = 1; col <= 4; col++) {
        str += row;
    }

    console.log(str);
}
console.log("---------------------------------");

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for (row = 1; row <= 4; row++) {
    str = "";
    ; for (col = 1; col <= 4; col++) {
        str += col + " "
    }
    console.log(str);

}
console.log("---------------------------------");

// *
// * *
// * * *
// * * * *

for (row = 1; row <= 4; row++) {
    str = "";
    for (col = 1; col <= row; col++) {
        str += '*' + ' '
    }
    console.log(str);
}
console.log("---------------------------------");

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (row = 1; row <= 4; row++) {
    str = "";
    for (col = 1; col <= row; col++) {
        str += col + ' '
    }
    console.log(str);
}
console.log("---------------------------------");

// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (row = 1; row <= 4; row++) {
    str = "";
    for (col = 1; col <= row; col++) {
        str += row + ' '
    }
    console.log(str);
}
console.log("---------------------------------");

// * * * *
// * * *
// * *
// *

for (row = 4; row >= 1; row--) {
    str = "";
    for (col = 1; col <= row; col++) {
        str += "*" + ' '
    }
    console.log(str);
}
console.log("---------------------------------");

// hw
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * * 
// * *
// *

for (row = 1; row <= 5; row++) {
    str = ""
    for (col = 1; col <= row; col++) {
        str += '*' + " "
    }
    console.log(str);
}
for (row =4; row >=1;row--){
    str = ''
    for(col=1;col <= row ; col++){
        str += '*' + ' '
    }
    console.log(str);
}
console.log("---------------------------------");


//        *
//      *    *
//    *    *   *
//  *   *    *   *
//    *    *   *
//      *    *
//         *

for(row=1;row<=4;row++){            //1<=4
    str=''                          
    for(spa=4;spa>row;spa--){       // 4>1
        str +="  "                  //##
    }
    for(col=1;col<=row;col++){      //1<=1
        str += ' *  '               //#*##
    }
    console.log(str); 
}
for(row=3;row>=1;row--){
    str=''
    for(spa = 4; spa>row ; spa--){
        str +='  '
    }
    for(col=1;col<=row;col++){
        str +=" *  "
    }
    console.log(str)
}
console.log("---------------------------------");

//        *
//      *    *
//    *    *   *
//  *   *    *   *

for (row = 1; row <= 4; row++) {     
    str = ""
    for (spa = 4; spa > row; spa--) {
        str += "  "
    }
    for (col = 1; col <= row; col++) {
        str += ' *  '
    }
    console.log(str);

}