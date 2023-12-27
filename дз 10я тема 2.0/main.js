document.addEventListener('DOMContentLoaded', () => {
  page_app();
})

function page_app() {
  const body = document.body;
  let students = [
  {
      "full_name": "Петров Петр Петрович",
      "faculty": "Юрист",
      "birth": "2007-10-21",
      "learning_start": "2019-12-15"
  },
  {
      "full_name": "Иванов Иван Иванович",
      "faculty": "Стоматолог",
      "birth": "2001-09-30",
      "learning_start": "2015-12-08"
  },
  {
      "full_name": "Иванова Мария Петровна",
      "faculty": "Химик",
      "birth": "2008-01-15",
      "learning_start": "2020-08-07"
  },
  {
      "full_name": "Антонова Юлия Антонова",
      "faculty": "Прокурор",
      "birth": "2007-04-016",
      "learning_start": "2023-11-10"
  },
  {
      "full_name": "Луганов Юрий Павлович",
      "faculty": "Механик",
      "birth": "2001-09-09",
      "learning_start": "2023-09-09"
  }];
  let age_count = 0;
  let count_name = 0;
  let count_faculty = 0;
  let count_learning = 0;

  const input_display = document.createElement('div');
  const output_display = document.createElement('div')

  const name_descr = document.createElement('p');
  const surname_descr = document.createElement('p');
  const patronymic_descr = document.createElement('p');
  const birth_date_descr = document.createElement('p');
  const learning_start_descr = document.createElement('p');
  const faculty_name_descr = document.createElement('p');

  const name_input = document.createElement('input');
  const surname_input = document.createElement('input');
  const patronymic_input = document.createElement('input');
  const birth_date_input = document.createElement('input');
  const learning_start_input = document.createElement('input');
  const faculty_name_input = document.createElement('input');

  const submit_button = document.createElement('button');
  input_display.classList.add('input-display');
  output_display.classList.add('output-display');

  name_descr.classList.add('descr');
  surname_descr.classList.add('descr');
  patronymic_descr.classList.add('descr');
  birth_date_descr.classList.add('descr');
  learning_start_descr.classList.add('descr');
  faculty_name_descr.classList.add('descr');

  name_input.classList.add('input-field');
  surname_input.classList.add('input-field');
  patronymic_input.classList.add('input-field');
  birth_date_input.classList.add('input-field');
  learning_start_input.classList.add('input-field');
  faculty_name_input.classList.add('input-field');

  submit_button.classList.add('submit-button');
  
  name_input.type = 'name';
  surname_input.type = 'name';
  patronymic_input.type = 'name';
  birth_date_input.type = 'date';
  learning_start_input.type = 'startYear';
  faculty_name_input.type = 'name';

  name_input.placeholder = 'Введите имя';
  surname_input.placeholder = 'Введите фамилию';
  patronymic_input.placeholder = 'Введите отчество';
  learning_start_input.placeholder = 'Введите год начала обучения'
  faculty_name_input.placeholder = 'Введите название факультета';

  submit_button.textContent = 'Добавить в список';
  
  input_display.append(name_descr);
  input_display.append(name_input);

  input_display.append(surname_descr);
  input_display.append(surname_input);
  
  input_display.append(patronymic_descr);
  input_display.append(patronymic_input);

  input_display.append(birth_date_descr);
  input_display.append(birth_date_input);
  
  input_display.append(learning_start_descr);
  input_display.append(learning_start_input);
  
  input_display.append(faculty_name_descr);
  input_display.append(faculty_name_input);
  
  input_display.append(submit_button);
  

  const output_title = document.createElement('h1');
  const output_filter = document.createElement('div');
  const table = document.createElement('div');
  const filter_title = document.createElement('h2');

  const filter_full_name = document.createElement('button');
  const filter_faculty_name = document.createElement('button');
  const filter_age = document.createElement('button');
  const filter_learning = document.createElement('button');
  const learning_start_find = document.createElement('input');

  output_title.classList.add('output-title');
  output_filter.classList.add('output-filter');

  filter_title.classList.add('filter-title');

  filter_full_name.classList.add('filter');
  filter_faculty_name.classList.add('filter');
  filter_age.classList.add('filter');
  filter_learning.classList.add('filter');
  learning_start_find.classList.add('filter');

  birth_date_input.min="1952-01-01"
  birth_date_input.max="2023-12-31"
  learning_start_input.min="2000-01-01" 
  learning_start_input.max="2023-12-31"
  output_title.textContent ='Студенты';

  filter_title.textContent = 'Фильтры'
  filter_full_name.textContent = 'Имя'
  filter_faculty_name.textContent = 'факультет'
  filter_age.textContent = 'возраст и дата рождения'
  filter_learning.textContent = 'год начала и конца обучения'
  learning_start_find.type = 'date';
  output_display.append(output_title);
  output_display.append(filter_title);

  output_filter.append(filter_full_name);
  output_filter.append(filter_faculty_name);
  output_filter.append(filter_age);
  output_filter.append(filter_learning);
  output_filter.append(learning_start_find);

  output_display.append(output_filter);
  output_display.append(table)

  body.append(input_display);
  body.append(output_display);
  if (students.length) {
      for(const student of students) {
          table.append(reDraw(student));
      }
  }
  
  filter_learning.addEventListener('click', () => {
      count_learning++;
      if (count_learning % 2 === 0){
          const yearToFilter = (new Date(learning_start_find.value)).getFullYear();
          const studentsFilteredByStartYear = students.filter(student => {
          const startYear = new Date(student.learning_start).getFullYear();
          return startYear === yearToFilter;
          });


          table.innerHTML = '';
          for(const student of studentsFilteredByStartYear) {
              table.append(reDraw(student));
          }
      } else {
          table.innerHTML = '';
          for(const student of students) {
              table.append(reDraw(student));
          }
      }
  })

  filter_age.addEventListener('click', () => {
      age_count++;

      if (age_count % 2 === 0){
          students.sort((a, b) => new Date(a.birth) - new Date(b.birth));
      } else {
          students.sort((a, b) => new Date(b.birth) - new Date(a.birth));
      }

      table.innerHTML = '';
      for(const student of students) {
          table.append(reDraw(student));
      }
  })

  filter_faculty_name.addEventListener('click', () => {
      count_faculty++;
      if (count_faculty % 2 === 0){
          students.sort((a, b) => a.faculty.localeCompare(b.faculty));
      } else {
          students.sort((a, b) => b.faculty.localeCompare(a.faculty));
      }

      table.innerHTML = '';
      for(const student of students) {
          table.append(reDraw(student));
      }
  })

  filter_full_name.addEventListener('click', () => {
      count_name++;
      if (count_name % 2 === 0){
          students.sort((a, b) => a.full_name.localeCompare(b.full_name));
      } else {
          students.sort((a, b) => b.full_name.localeCompare(a.full_name));
      }

      table.innerHTML = '';
      for(const student of students) {
          table.append(reDraw(student));
      }
  })


  submit_button.addEventListener('click', () => {

      const name = name_input.value.trim()
      const surname = surname_input.value.trim()
      const patronymic = patronymic_input.value.trim()
      const birth_date = birth_date_input.value.trim()
      const learning_start = learning_start_input.value.trim()
      const faculty_name = faculty_name_input.value.trim()

      if (!(isAlphabetic(name))) {
          alert("Имя неправильное! Попробуйте ещё раз!")
          return;
      }

      if (!(isAlphabetic(surname))) {
          alert("Фамилия неправильная! Попробуйте ещё раз")
          return;
      }

      if (!(isAlphabetic(patronymic))) {
          alert("Отчество неправильное! Попробуйте ещё раз!")
          return;
      }

      students.push({
          full_name: [name, surname, patronymic].join(" "),
          faculty: faculty_name,
          birth: birth_date,
          learning_start: learning_start
      });

      alert("Все правильно, добавляю студента");
      
      table.innerHTML = '';
      for(const student of students) {
          table.append(reDraw(student));
      

      name_input.value = '';
      surname_input.value = '';
      patronymic_input.value = '';
      birth_date_input.value = '';
      learning_start_input.value = '';
      faculty_name_input.value = '';
      }
  })
}

function reDraw(student) {
  const ul = document.createElement('ul');

  const field_full_name = document.createElement('li');
  const field_faculty = document.createElement('li');
  const field_age = document.createElement('li');
  const field_learning = document.createElement('li');
  
  ul.classList.add('element')


  const dob = new Date(student.birth);
  let now = new Date();
  let age = now.getFullYear() - dob.getFullYear();

  const start = new Date(student.learning_start);
  now = new Date();
  let end = now.getFullYear() - start.getFullYear();

  field_full_name.classList.add('field');
  field_faculty.classList.add('field');
  field_age.classList.add('field');
  field_learning.classList.add('field');

  field_full_name.textContent = student.full_name;
  field_age.textContent = `${student.birth} | ${age} лет`
  field_faculty.textContent = student.faculty;
  field_learning.textContent = `${start.getFullYear()} - ${ end < 4 ? start.getFullYear() + 4 : "Закончил"}`

  ul.append(field_full_name);
  ul.append(field_faculty);
  ul.append(field_age);
  ul.append(field_learning);
  return ul;
}

function isAlphabetic(input) {
  return /^[a-zA-Zа-яА-Я]+$/.test(input);
}