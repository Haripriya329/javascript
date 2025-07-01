expense = [15000 , 25000 , 50000 , 30000 , 65000]
// w.ap to find lowest expense
min=expense[0]
for(i=0;i<=expense.length-1;i++){
if(min < expense[i]){
    expense[0]=min
}
}
console.log(`min is ${min}`);
console.log(`---------------------------`)

// w.ap to find highest expense

max=expense[0]
for(i=0;i<=expense.length-1;i++){
    if(max < expense[i]){
        max=expense[i]
    }
}
console.log(`max is ${max}`);
console.log(`---------------------------`)

// w.ap to find total expense

sum=0
for(i=0;i<=expense.length-1;i++){
    sum +=expense[i]
    }
console.log(`sum is ${sum}`);
console.log(`---------------------------`)

// /w.a.p to find if 2 is present

a=[11,10,12,2,3,4]

ispresent=true
for(i=0;i<=a.length-1;i++){
    if (a[i]==2){
ispresent=true
 break  
    }
    else{
        ispresent=false 
         
    }
}
    console.log(ispresent?'present':'absent');
console.log(`---------------------------`)
