function getAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    return age;
  }

  var yearOfBirth = 2004; 
  var age = getAge(yearOfBirth);
  console.log("Возраст:", age);