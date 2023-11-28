function filter(objects, propertyName, propertyValue) {
    return objects.filter(obj => obj[propertyName] === propertyValue);
  }
  
  let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
  ];
  
  let result = filter(objects, 'name', 'Иван');
  console.log(result);