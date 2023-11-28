function createStudentsList(listArr) {
    const ul = document.createElement('ul');

    listArr.forEach(student => {
        const li = document.createElement('li');
        const studentName = document.createElement('h2');
        const studentAge = document.createElement('span');

        studentName.textContent = student.name;
        studentAge.textContent = `Возраст: ${student.age} лет`;

        li.appendChild(studentName);
        li.appendChild(studentAge);
        
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

createStudentsList(allStudents);