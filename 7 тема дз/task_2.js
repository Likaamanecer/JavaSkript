function createStudentCard(student) {
    const studentCard = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('span');

    studentName.textContent = student.name;
    studentAge.textContent = `Возраст: ${student.age} лет`;

    studentCard.style.border = '1px solid #000';
    studentCard.style.padding = '10px';
    studentCard.style.marginBottom = '10px';

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentAge);

    document.body.appendChild(studentCard);
}

createStudentCard(studentObj);