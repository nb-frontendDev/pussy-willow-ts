// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve('')
//     }, 2000)
// });

// promise.then((data) => { 
//     data.split(' ');
// })

function merge<T, U>(objA: T, ojbB: U) { 
    return Object.assign(objA, ojbB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);