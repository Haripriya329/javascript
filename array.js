weekday = ['monday','tuesday','wednesday']
console.log(weekday);

console.log(typeof(weekday))
console.log(`---------------------------`)
// {key:value}
// {index:item}

console.log(weekday[0]);    //to print monday only
console.log(`---------------------------`)

for(i=0;i<=weekday.length-1;i++){
    console.log(weekday[i]);   
}
console.log(`---------------------------`)
 
for(let i in weekday){
    console.log(weekday[i]);
}

weekday.push('thursday')
weekday.push('friday')
weekday.push('3')
console.log(weekday);

weekday.unshift('sun')
console.log(weekday);

weekday.unshift('7')
console.log(weekday);
console.log(`---------------------------`)

weekday.pop()
console.log(weekday);
console.log(`---------------------------`)

weekday.shift()
console.log(weekday);
