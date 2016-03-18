

//alert ('start cycle')
function powNum() {
    var num = prompt("Введите число: "),
        pow = prompt("Введите степень: "),
        num1 = num;

    if(pow <= 0) {
        alert('введите степень целое число больше или равное 1');
        powNum()

    } else {
        for(i = 0; i < pow-1; i++){
            num *= num1;}
        console.log('result = ', num);
        alert('ваш результат ' + num)}}

function userName() {
    'use strict';
    var nameBox = [];
    var userName;
    for(var i = 0; i < 5; i++){
        nameBox[i] = prompt("Введите имя: ");
    }

    userName = prompt("Введите имя пользователя: ");

    for(i = 0; i < 5; i++) {
        if(nameBox[i] == userName) {
            alert(userName + ', вы успешно вошли!');
            return 0;
        }
    }
    alert("Вы незарегистрированый пользователь, досвидания!");}

powNum();
userName();
