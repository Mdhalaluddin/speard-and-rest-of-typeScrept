"use strict";
{
    const student1 = {
        name: 'Mr Helal',
        roll: 1,
        class: 10
    };
    const student2 = {
        name: 'Mr Belal',
        roll: 2,
        class: 10
    };
    const student3 = {
        name: 'Mr Belal',
        roll: 3,
        class: 10
    };
    const allStudent = { student1: Object.assign(Object.assign(Object.assign({}, student1), student2), student3) };
    console.log(allStudent);
    ///
}
