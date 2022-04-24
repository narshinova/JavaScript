//4**Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке


const check_age = function (age_1) {
    age_1 = Number(age_1)
    if (typeof (age_1) == 'number') {
        if (age_1 < 18) {
            alert(`You don’t have access cause your age is ${age_1}. It’s less then.`)
        }

        else if (age_1 >= 18 && age_1 < 60) {
            alert('Welcome!')
        }

        else if (age_1 > 60) {
            alert('Keep calm and look Culture channel')
        }

        else {
            alert('Technical work')
        }
    }
    else {
        alert('Not a number')
    }

}
check_age(prompt('How old are you?',))