function createStudentCard(name, age) {
    const studentCard = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('span');

    studentName.textContent = name;
    studentAge.textContent =`Возраст: ${age}`;

    studentCard.style.border = '1px solid #000';
    studentCard.style.padding = '10px';
    studentCard.style.marginBottom = '10px';

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentAge);

    document.body.appendChild(studentCard);
}
createStudentCard('Игорь', 17);