"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date,
};
// 高度な型　型ガード
function add(a, b) {
    if (typeof a === 'string' || b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return Number(a) + Number(b);
    }
}
function printEmployeeInfomation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInfomation(e1);
