const students = [
    {
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        birthDate: new Date(1998, 5, 15),
        startYear: 2020,
        faculty: "Факультет информационных технологий"
    },
    {
        firstName: "Петр",
        lastName: "Петров",
        middleName: "Петрович",
        birthDate: new Date(1999, 7, 25),
        startYear: 2019,
        faculty: "Факультет экономики"
    },
];
function renderStudentsTable(students) {
    const studentsBody = document.getElementById("studentsBody");
    studentsBody.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        const fullName = `${student.lastName} ${student.firstName} ${student.middleName}`;
        const today = new Date();
        const age = today.getFullYear() - student.birthDate.getFullYear();
        const educationYears = `${student.startYear}-${student.startYear + 4}`;
        const course = (today.getFullYear() - student.startYear) + 1;
        const courseText = (today.getMonth() < 8 && today.getFullYear() === (student.startYear + 4)) ? "закончил" : `${course} курс`;
        row.innerHTML = `
        <td>${fullName}</td>
        <td>${student.faculty}</td>
        <td>${student.birthDate.toLocaleDateString()} (${age} лет)</td>
        <td>${educationYears} (${courseText})</td>
      `;
        studentsBody.appendChild(row);
    });
}

renderStudentsTable(students);

function createStudentElement(student) {
    const row = document.createElement("tr");
    const fullName = `${student.lastName} ${student.firstName} ${student.middleName}`;
    const today = new Date();
    const age = today.getFullYear() - student.birthDate.getFullYear();
    const educationYears = `${student.startYear}-${student.startYear + 4}`;
    const course = (today.getFullYear() - student.startYear) + 1;
    const courseText = (today.getMonth() < 8 && today.getFullYear() === (student.startYear + 4)) ? "закончил" : `${course} курс`;
    row.innerHTML = `
      <td>${fullName}</td>
      <td>${student.faculty}</td>
      <td>${student.birthDate.toLocaleDateString()} (${age} лет)</td>
      <td>${educationYears} (${courseText})</td>
    `;
    return row;
}

function renderStudentsTable(students) {
    const studentsBody = document.getElementById("studentsBody");
    studentsBody.innerHTML = "";
    students.forEach(student => {
        const studentRow = createStudentElement(student);
        studentsBody.appendChild(studentRow);
    });
}

document.getElementById("add-student-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = event.target.querySelector("#firstName").value.trim();
    const lastName = event.target.querySelector("#lastName").value.trim();
    const middleName = event.target.querySelector("#middleName").value.trim();
    const birthDate = new Date(event.target.querySelector("#birthDate").value);
    const startYear = Number(event.target.querySelector("#startYear").value);
    const faculty = event.target.querySelector("#faculty").value.trim();

    if (!firstName || !lastName || !middleName || !birthDate || !startYear || !faculty) {
        alert("Все поля формы должны быть заполнены");
        return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();

    if (birthDate > today || birthDate < new Date(1900, 0, 1)) {
        alert("Некорректная дата рождения");
        return;
    }

    if (startYear < 2000 || startYear > currentYear) {
        alert("Некорректный год начала обучения");
        return;
    }

    const newStudent = {
        firstName,
        lastName,
        middleName,
        birthDate,
        startYear,
        faculty
    };

    students.push(newStudent);
    renderStudentsTable(students);
    event.target.reset();
});

function sortStudents(property) {
    students.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
    renderStudentsTable(students);
}

document.getElementById("studentsTable").addEventListener("click", function (event) {
    if (event.target.tagName === "TH") {
        const property = event.target.getAttribute("data-property");
        if (property) {
            sortStudents(property);
        }
    }
});

function filterStudents() {
    const nameFilter = document.getElementById("nameFilter").value.trim().toLowerCase();
    const facultyFilter = document.getElementById("facultyFilter").value.trim().toLowerCase();
    const startYearFilter = parseInt(document.getElementById("startYearFilter").value, 10);
    const endYearFilter = parseInt(document.getElementById("endYearFilter").value, 10);

    const filteredStudents = students.filter(student => {
        return (student.firstName.toLowerCase().includes(nameFilter) ||
            student.lastName.toLowerCase().includes(nameFilter) ||
            student.middleName.toLowerCase().includes(nameFilter)) &&
            student.faculty.toLowerCase().includes(facultyFilter) &&
            (isNaN(startYearFilter) || student.startYear === startYearFilter) &&
            (isNaN(endYearFilter) || student.startYear + 4 === endYearFilter);
    });

    renderStudentsTable(filteredStudents);
}

document.getElementById("filters").addEventListener("input", filterStudents);

