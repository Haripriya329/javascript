expense = [15000, 25000, 50000, 30000, 65000]
// w.ap to find lowest expense
min = expense[0]
for (i = 0; i <= expense.length - 1; i++) {
    if (min < expense[i]) {
        expense[0] = min
    }
}
console.log(`min is ${min}`);
console.log(`---------------------------`)

// w.ap to find highest expense

max = expense[0]
for (i = 0; i <= expense.length - 1; i++) {
    if (max < expense[i]) {
        max = expense[i]
    }
}
console.log(`max is ${max}`);
console.log(`---------------------------`)

// w.ap to find total expense

sum = 0
for (i = 0; i <= expense.length - 1; i++) {
    sum += expense[i]
}
console.log(`sum is ${sum}`);
console.log(`---------------------------`)

// /w.a.p to find if 2 is present

a = [11, 10, 12, 2, 3, 4]

ispresent = true
for (i = 0; i <= a.length - 1; i++) {
    if (a[i] == 2) {
        ispresent = true
        break
    }
    else {
        ispresent = false
    }
}
console.log(ispresent ? 'present' : 'absent');
console.log(`---------------------------`)

// w.a.p to print the following output for the given input
o = [4, 5, 6] //o/p=[11,10,9]

sum = 0
total = 0
array = []
for (i = 0; i <= 2; i++) {  //for(let item of o)
    sum += o[i]
}
for (i = 0; i <= 2; i++) {
    array.push(sum - o[i])
}
console.log(array);
console.log(`---------------------------`)
//other method

a = []
for (let item of o) {
    a.unshift(item + 5)
}
console.log(a);
console.log(`---------------------------`)

// w.a.p to print the duplicate elements from the given array //modify
a = [10, 20, 30, 20, 30, 40, 50, 60, 10] //=10,20,30
op = []
for (i = 0; i <= a.length - 1; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] == a[j]) {
            op.push(a[i])
        }
    }
}
console.log(op.length == 0 ? `no duplication` : op);
console.log(`---------------------------`)

// w.a.p to print pairs whose pair sum is 6

a = [2, 3, 4, 5] //=(2,4)
b = []
for (i = 0; i <= a.length - 1; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] + a[j] == 6)
           // b.push([a[i],a[j]])
            console.log([a[i], a[j]]);
    }
}