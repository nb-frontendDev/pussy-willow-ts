"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date,
};
function add(a, b) {
    if (typeof a === 'string' || b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return Number(a) + Number(b);
    }
}
const result = add('Hello', 1);
result.split(' ');
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInfomation(emp: UnknownEmployee) { 
//     console.log(emp.name);
//     if ("privileges" in emp) { 
//         console.log("Privileges: " + emp.privileges)
//     }
//     if ("startDate" in emp) { 
//         console.log("startDate: " + emp.startDate)
//     }
// }
// 判別可能なUnion型
// interface Bird { 
//     type: 'bird',
//     flySpeed: number;
// }
// interface Horse { 
//     type: 'horse',
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveANimal(animal: Animal) {
//     let speed;
//     switch (animal.type) { 
//         case 'bird':
//             speed = animal.flySpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('移動速度' + speed);
// }
// moveANimal({type:'bird', flySpeed:10})
// 型キャスト
// const useInputElement = document.getElementById('user-input')! as HTMLInputElement;
// useInputElement.value = 'こんにちは';
//　オプショナルチェイン
const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'Typescript',
    }
};
console.log(fetchedUserData.job.title);
