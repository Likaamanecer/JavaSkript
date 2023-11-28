function getOlderUserArray(users) {
    let olderUser = users.reduce((prev, current) => {
      return (prev.age > current.age) ? prev : current;
    });
    return olderUser.name;
  }
  
  let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
  ];
  
  console.log(getOlderUserArray(allUsers));