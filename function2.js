// call back function

function greet(name , callme){
console.log(`hai ${name}`);
callme()
}

function callback(){
    console.log(`inside the call back function`)
}

greet('peter',callback)
console.log('-------------------------------');

// nested function

function parent (){
    console.log(`inside the parent function`);
    
    function child(){
        console.log(`inside child function`);
        
    }
    child()
}
parent()