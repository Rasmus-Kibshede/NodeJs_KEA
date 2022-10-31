
/* 
Why: JavaScript is single-threaded
If we didn't write asynchronous code we would have blocking code.

Use cases of asynchronous code:
- Data traveling over a network (fetch)
- Reading and writing to files.
- import when asynchronous calling URLs.
- Interacting with a database.
- Heavy calculations.
- Encryption/Decryption.
- Event listeners (DOM)


Basically anything that take time (since we don't want to block and prevent
 other code from running).

 What to use before promises:

 Solution 1:
 Callback functions.
 Problem: Callback hell, Pyramid og doom.

 Solution 2:
 Introducing promises!
 Can have two different states:
 - Pending
 - Fulfilled
    - Resolved, Rejected

Solution 3:
Introducing async/await.


*/

new Promise((resolve, reject) => {
    try {
        throw new Error;
        resolve("yay");
    } catch (stackTrace) {
        reject("Nay");
    }

}).then(succesMessage => console.log(succesMessage))
    .catch(errorMessage => console.log(errorMessage));



function howAwesomeAmI(name) {
    return new Promise((resolve, reject) => {
        if (name === "Rasmus") {
            resolve("Looking good");
        }
    });
}


howAwesomeAmI("Rasmus")
    .then(anwser => console.log(anwser));



function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                /* throw new Error; */
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 3000);
    });
}

/* somethingGoodSomethingBad()
    .then(message => console.log(message))
    .catch(error => console.log(error)); */

// const shouldBeGood = await somethingGoodSomethingBad();

// IIFE
(async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        console.log(shouldBeGood);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})();

//asyncAwaitExample();




