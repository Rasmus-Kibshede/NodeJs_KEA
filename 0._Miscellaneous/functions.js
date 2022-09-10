
console.log(add(5,28));

// hoisting
function add(a, b){
    return a + b;
};

// Anonymous Function after the sign.. does not have a name
const addAnonymousFunction = function (a, b){
    return a + b;
}

console.log(addAnonymousFunction(3, 6));

//Arrow function
const addArrowFunction = (a, b) => {
    return a + b;
};

// Arrow function compact
const arrowfunctionCompact = (a, b) => a + b;




function genericActionExecuter(annyCallbackFunction, name) {
    // execute some code
   return annyCallbackFunction(name);    
}

// Callback function er når functionen 
// bliver sendt med som et agument i en anden function


const spitting = (name) => `${name} is spitting.`;

console.log(genericActionExecuter(spitting, "Amanda"));


const shooting = (name) => `${name} is shooting`;

console.log(genericActionExecuter(shooting, "Malte"));


console.log(genericActionExecuter((name) => `${name} is running`, "Murat"));


