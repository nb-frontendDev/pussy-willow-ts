// 高度な型　交差型
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date,
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


// 高度な型　型ガード
function add(a: Combinable, b: Combinable) { 
    if (typeof a === 'string' || b === 'string') {
        return a.toString() + b.toString();
    } else { 
        return Number(a) + Number(b);
    }
    
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfomation(emp: UnknownEmployee) { 
    console.log(emp.name);
    if ("privileges" in emp) { 
        console.log("Privileges: " + emp.privileges)
    }
    if ("startDate" in emp) { 
        console.log("startDate: " + emp.startDate)
    }
}

// 判別可能なUnion型
interface Bird { 
    type: 'bird',
    flySpeed: number;
}

interface Horse { 
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveANimal(animal: Animal) {
    let speed;
    switch (animal.type) { 
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度' + speed);
    
}
moveANimal({type:'bird', flySpeed:10})




