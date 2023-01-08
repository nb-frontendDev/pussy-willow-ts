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
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = '値がありません。';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}
