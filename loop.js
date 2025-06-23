//w.a.p to print javascript three times
// i=1
// while(i<=3){
//     console.log(`javascript`);
//     i++
// }
// w.a.p to print numbers from 1 to 5
// i=1
// while(i<=5){
//     console.log(`${i}`);
//     i++
// }
// w.a.p to print 10 to 1
// i=10
// while(i>=1){
//     console.log(`${i}`);
//     i--
// }
//w.a.p all even numbers bwtn 1 to 50
// i=2
// while(i<=50){
//     console.log(`${i}`)
//     i+=2
// }

// otherway
// i=1
// while(i<=50){
// if(i%2==0){
//     console.log(`${i}`); 
// }
// i++
// }

// w.a.p to print sum of all  numbers bwtn 1 to 10
// i=1
// sum=0
// while(i<=10){

//     sum+=i
//     i++
// }
// console.log(`${sum}`);

// w.a.p
// 2 3 4 ....
// 24 369 4936
// method 1
// i=1
// input=3
// str=''
// while(i<=input){
// str=str+i //''+1='1' //'1'+2
// i++ //1 //12
// }
// console.log(input*str);

// method 2
// i=1
// input=3
// str=''
// sum=0
// while(1<=3){
// str=str+input
// sum=sum+Number(str)
// i++
// }
// console.log(sum);
// w.a.p to find the reverse of a given number
///num%10 - will give last digit as the remainder
//num*10=add zero to the once place.

// i=1
// input=123
// str=''
// while(input>0){
// reminder=input%10
// str=str+reminder
// input=Math.floor(input/10)
// }
// console.log(str);

// // method-2
// input=123
// rev=0
// while(input>0){
//     reminder=input%10
//     rev=rev*10+reminder
//     input=Math.floor(input/10)
// }
// console.log(rev);

// // w.a.p to print a given number is palindrome or not

// original=323
// input=original
// rev=0
// while(input>0){
//     reminder=input%10
//     rev=rev*10+reminder
//     input=Math.floor(input/10)  
// }
//  if(original==rev){
//         console.log('The Given Number Is Palindrome');
//     }

// console.log(original==rev?'palindrome' :'not palindrome');

// w.ap to print factorial of  a number
// input = 5
// i = 1
// product = 1
// while (i <= 5) {

//     if (input == 0) {
//         product = 1;
//     }
//     else {
//         product = product * i
//         i++
//     }
// }
// console.log(product);

// w.a.p to find a number is amstrong or not  --153 = 1^3 + 5^3 + 3^3


// input = 153
// amstrong = 0
// original=input
// while (input>0) {
//     let x = (input % 10)
//     amstrong += x*x*x
//     input = Math.floor(input / 10)
// }
// if(original==amstrong)
// {
//     console.log(`number is amstrong`); 
// }
// else{
//     console.log(`number is not amstrong`);
// }

// /w.a.p to print all numbers whose exponential is in the range of 8 to 36, userr can input the number

i = 1
expo = 2
while (i <= 36) {
    x = i ** expo
    if (x >= 8 && x <= 36){
        console.log(i);
    }
    if(x>36){
        break
    }
     i++
}
