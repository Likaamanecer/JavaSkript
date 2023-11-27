let userName = 'lIKA'; 
let userSurname = 'mIRONOVA'; 
 
let newUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase(); 
let newUserSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase(); 
console.log(newUserName); 
console.log(newUserSurname);   
console.log(userName === newUserName ? 'Имя было преобразовано' : 'Имя осталось без изменений');  
console.log(userSurname === newUserSurname ? 'Фамилия была преобразована' : 'Фамилия осталась без изменений'); 