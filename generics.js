"use strict";
// const names: Array<string> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve('')
//     }, 2000)
// });
// promise.then((data) => { 
//     data.split(' ');
// })
function merge(objA, ojbB) {
    return Object.assign(objA, ojbB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
