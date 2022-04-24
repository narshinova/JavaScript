//3**:Преобразовать test1.js таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const check_age = function (age_1) {
    age_1 = Number(age_1)
    if (typeof (age_1) == 'number') {
        if (age_1 < 18) {
            console.log(`You don’t have access cause your age is ${age_1}. It’s less then.`)
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
    else {
        console.log('Not a number')
    }

}
check_age(17)
check_age(18)
check_age(61)
check_age('2')