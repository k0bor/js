firstNumber = prompt('введите число')
secondNumber = prompt('введите число')
thirdNumber = prompt('введите число')

function calculate(firstNumber, secondNumber, thirdNumber) {
   let result = +firstNumber + +secondNumber + +thirdNumber
    console.log(`сумма ваших чисел равна ${result}`)
}

calculate(firstNumber, secondNumber, thirdNumber);

let param1 = 1;
let param2 = 2;
let param3 = 3;

calculate(param1, param2, param3)

function func(num = 5) {
console.log(num * num);
}
func(2);//4
func(3);//9
func();//25

function userInfo( ) {
const userAge =prompt(`Введите возраст`);
 const userName = prompt(`Введите имя`);
  const userSecondName = prompt(`Введите фамилию`);
alert(`Привет ${userName} ${userSecondName} c возрастом ${userAge}`);
}



function math() {
 const sqrtNumber = prompt('введите число')
const sqrtNumber1 = prompt('введите число') 
alert(`квадратный корень из ${sqrtNumber} равен ${Math.sqrt(sqrtNumber)}`);//из 4 = 2, из 3 =  1.7320508075688772 
alert(`квадратный корень из ${sqrtNumber1} равен ${Math.sqrt(sqrtNumber1)}`);
alert(`сумма квадратных корней равна ${Math.sqrt(sqrtNumber1) + Math.sqrt(sqrtNumber)}`)
};

function moreOrLess() {
     const number = prompt('введите число')
     const number1 = prompt('введите число')
     if (number<number1) {
        prompt(`${number} меньше ${number1}`)
     } else {
        prompt(`${number1} меньше ${number2}`)
     }
}


function dayOfWeek() {
     const number = prompt('введите число')
     if (number=1) {
        prompt(`Сегодня понедельник`)
     } else if (number=2) {
        prompt(`Сегодня вторник`)
     }else if (number=3) {
        prompt(`Сегодня среда`)
     } else if (number=4) {
        prompt(`Сегодня четверг`)
     } else if (number=5) {
        prompt(`Сегодня пятница`)
     } else if (number=6) {
        prompt(`Сегодня суббота`)
     } else if (number=7) {
        prompt(`Сегодня воскресенье`)
     }  else if (number<0 && number>7) {
        prompt(`вы ошиблись, введите число от 1 до 7`)
     }  
}


function square() {
    const number = prompt(`Введите число`);
    let result = number * number;
    alert(`${number} в квадрате равно ${result}`)
}

function positiveOrNegativeNumber() {
    const number = prompt(`Введите число`);
    if (number>=0) {
       alert('+++'); 
    }  else {
        alert("---");
    }
}

function helloByTime() {
    const name =  prompt(`Введите ваше имя`);
    const time = new Date().getHours();

    if (time>=6 && time<12){
        alert(`Доброе утро ${name}`)
    } else if (time>=12 && time<18){
        alert(`Доброе день ${name}`)
    } else if (time>=18 && time<22){
        alert(`Доброе вечер ${name}`)
    } else {
        alert(`Доброе ночи ${name}`)
    }
}