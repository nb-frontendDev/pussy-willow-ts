// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve('')
//     }, 2000)
// });

// promise.then((data) => { 
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, ojbB: U) { 
    return Object.assign(objA, ojbB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, {age: 30});
console.log(mergedObj);

interface Lengthy { 
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { 
    let descriptionText = '値がありません。';

    if (element.length > 0) { 
        descriptionText = '値は' + element.length + '個です。'
    }

    return [element, descriptionText];
}

