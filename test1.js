// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61,


const check_age = function (age_1) {
    if (age_1 < 18) {
        console.log(`You don’t have access cause your age is ${age_1}. It’s less then 18.`)
    }

    else if (age_1 >= 18 && age_1 < 60) {
        console.log('Welcome !')
    }

    else if (age_1 > 60) {
        console.log('Keep calm and look Culture channel')
    }

    else {
        console.log('Technical work')
    }
}
check_age(17)
check_age(18)
check_age(61)