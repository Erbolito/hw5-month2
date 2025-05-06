let value;

value = 42;
console.log(typeof value === "number" ? "Это число" : "Неизвестный тип");

value = "Hello";
console.log(typeof value === "string" ? "Это строка" : "Неизвестный тип");

value = true;
console.log(typeof value === "boolean" ? "Это булевый тип" : "Неизвестный тип");

value = null;
console.log(value === null ? "Это null" : "Неизвестный тип");

value = undefined;
console.log(typeof value === "undefined" ? "Это undefined" : "Неизвестный тип");

value = [1, 2, 3];
console.log(Array.isArray(value) ? "Это массив" : "Неизвестный тип");

value = { name: "Erbol" };
console.log(typeof value === "object" && !Array.isArray(value) && value !== null ? "Это объект" : "Неизвестный тип");

// Задание 2
let age = prompt("Введите ваш возраст:");
age = Number(age);

if (isNaN(age)) {
    console.log("Некорректный ввод");
} else if (age < 12) {
    console.log("Ты ребенок");
} else if (age >= 12 && age <= 17) {
    console.log("Ты подросток");
} else if (age >= 18 && age <= 59) {
    console.log("Ты взрослый");
} else {
    console.log("Ты пожилой человек");
}

let dayNumber = prompt("Введите число от 1 до 7:");
dayNumber = Number(dayNumber);

switch (dayNumber) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Нет такого дня недели");
}