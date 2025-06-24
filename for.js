// w.a.p to print 5 Numbers

for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("---------------------------------");

// w.a.p to print the factorial of a given number using for loop

x = 5
product = 1
for (i = 1; i <= x; i++) {
    product = product * i
}
console.log(product);

console.log("---------------------------------");

// w.a.p to find out the given number is prime or not

x = 0 //2,3,5,7,11,13,17,19,
    isPrime = true
    if (x > 0) {
    for (i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false
            break
        }
    }
}
console.log(isPrime ? `prime` : `non-prime`);

// w.a.p to print all prime numbers bwtn 2 to 50

// w.a.p to print all amstrong numbera bwtn 8 to 500