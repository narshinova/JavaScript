// Task 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в 3.task1.txt
const users = [
    {   firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'},
    {   firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'},
    {   firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'},
    {   firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'},
    {   firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'},
    {   firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'},
    {   firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'},
    {   firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'},
    {   firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'},
    {   firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'},
    {   firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'},
    {   firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'},
    {   firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'},]

users.forEach(user => {
    if(user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021') console.log('Пользователь ' + user.firstName + ' ' + user.firstName + ' зарегистрирован 10.10.2021 и 09.10.2021')
})
console.log(users.filter(i => Object.values(i).includes('09.10.2021') || Object.values(i).includes('10.10.2021')))

//  или

const usersFiltered = users.filter((user) => {
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        return user;
    }
})
console.log (usersFiltered)


// Task 2*. Откройте в VSCode 3.task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./3.task2.json"))

let uniquePersons = []
users.forEach((el) => {
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
        uniquePersons.push(JSON.stringify(el))
    }
}) 

// или

let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item))
console.log(chekid.length)


// Task 2***. Реализуйте считывание из JSONки из файла 3.task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании


const fs = require("fs")
let rawUsers = fs.readFileSync("3.task2.json")
let users = JSON.parse(rawUsers)

let uniqueUsers = users.reduce(
    (unique, user) => {
        if (unique.map[user.name]) return unique

        unique.map[user.name] = true
        unique.uniqueUsers.push(user)
        return unique
    },
    {
        map: {},
        uniqueUsers: [],
    }
).uniqueUsers;
console.log(uniqueUsers)



// Task 3**. В файле 3.task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)
  

const employeesCountHelper = function(number) {
    number = number.toString().split('').pop()
    if (number) {
        if (number == 1) return "сотирудник"
        else if (number > 1 && number < 5) return "сотрудника"
        else return "сотрудников"
    } else return "(нет сотрудников)"
}
const getDeptartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`)
                } else depts.push(`- ${dept.name} (нет сотрудников)`)
            })
            if (count) {
                depts[0] += `(${count} ${employeesCountHelper(count)})`
            } else depts[0] += ` (нет сотрудников)`
        }
        console.log(depts.join(`\n\ `))
    })
}
getDeptartments(enterprises)

//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseByDepartment = function(val) {
    let enterprise
    enterprises.forEach(ent => {
        let department
        if(ent.departments) {
            department = ent.departments.find(dept => { return dept.id == val || dept.name == val})
        }
        if(department) {
            enterprise = ent
        }
    })
    return enterprise ? enterprise : "Нет организации с таким отделом"
}
console.log(getEnterpriseByDepartment("Отдел разработки"))
  
//   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
//   Пример:
//   addEnterprise("Название нового предприятия")

const getNewId = function (company) {
    let maxId = company[0].id;
    company.forEach((el) => {
        if (maxId < el.id) {
            maxId = el.id
        }
        if (el.departments) {
            el.departments.forEach((elem) => {
                if (maxId < elem.id) {
                    maxId = elem.id;
                }
            })
        }
    })
    return maxId +1
}  
const addEnterprise = function(name) {
    enterprises.push({
        id: getNewId(enterprises),
        name: name,
        departments: []
    })
}
addEnterprise("Тостеры")

//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
//   Пример:
//   addDepartment(1, "Название нового отдела")
  
const getEnterprise = function (val) {
    let enterprise = enterprises.find(el => el.id == val || el.name == val);
    return enterprise ? enterprise : 'Нет такой организации'
}

const addDepartment = function(id, name, employees_count = 0) {
    const enterprise = getEnterprise(id)
    if(typeof enterprise === "object") {
        enterprise.departments.push({
            id: getNewId(enterprises),
            name: name,
            employees_count: employees_count,
        })
    } else console.log("Нет такой организации")
}
addDepartment(11,"Aqua", 20)
addDepartment(11,"Котики", 20)
console.log(getEnterprise(11))

//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
//   Пример:
//   editEnterprise(1, "Новое название предприятия")
  
const editEnterprise = function (val, name) {
    const enterprise = getEnterprise(val)
    if (typeof enterprise === "object") {
        enterprise.name = name
    } else console.log (enterprise)
}
  editEnterprise(11, "Зайчики")
  console.log(getEnterprise(11))

//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
//   Пример:
//   editDepartment(7, "Новое название отдела")

const getDeptartment = function (val) {
    let department;
    enterprises.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val;
        })
        if (dept) department = dept
    })
    return department ? department : 'Нет такого отдела'
}  

const editDepartment = function (val, name) {
    const department = getDeptartment(val)
    if (typeof department === "object") {
        department.name = name
    } else console.log (department)
}
  editDepartment(12, "АвтоТосты")
  console.log(getEnterprise(11))
  
//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
//   Пример:
//   deleteEnterprise(1)
  
const deleteEnterprise = function(id) {
    enterprises.forEach((enterprise, index) => {
        if (enterprise.id === id) {
            enterprises.splice(index, 1)
        }
    })
}
  
//   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
//   Пример:
//   deleteDepartment(3)
  
let deleteDepartment = function (id) {
    enterprises.forEach(e => {
        let index = e.departments.findIndex(d => d.id === id && d.employees_count === 0)
        if (index !== -1) {
            e.departments.splice(index, 1)
        }
    })
}
deleteDepartment(10)
console.log (enterprises)

//   9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// *-решение не правильное: сотрудников нельзя перекинуть за рамки избранного предприятия)
  
//   Пример:
//   moveEmployees(2, 3)
  
const transferEmployees = function(currentId, newId) {
    let currentDepartment = getDeptartment(currentId)
    let newDepartment = getDeptartment(newId)
    if(typeof currentDepartment === "object" && typeof newDepartment === "object") {
        newDepartment.employees_count += currentDepartment.employees_count;
        currentDepartment.employees_count = 0
    } else console.log("Нет такого отдела")
}

transferEmployees(13,12)
console.log(getEnterprise(11))



// Task 4****. В файле 3.task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено. 
// Задание: написать функцию: 
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.


// Пример:

// Компания (10)
// -- Отдел тестирования (7)
// ---- Тестирование Web (5)
// ---- Тестирование Mobile (0)
// -- Отдел маркетинга (30)
// -- Администрация (25)
// ---- Бухгалтерия (10)
// ---- Менеджмент (15)
// ------ Подраздел менеджмента 1 (5)
// ------ Подраздел менеджмента 2 (10)
// ---- HR (1)

const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]

  const chekArray = function (company, counter = "") {
      company.forEach((comp) => {
          console.log(`${counter}${counter === "" ? "" : " "}${comp.name} (${comp.users_count})`);
          if (comp.children) {
              counter += "--";
              chekArray(comp.children,counter);
              counter = counter.slice(0, -2);
          }
      })
  }
  chekArray(company)
console.log('==========================')

// или

const format = (children, i = 2, pre = ' ', pre1 = ' ') => children.map(({name, users_count, children}) => {
    if (Array.isArray(children))return `${pre}${name}${pre1}${users_count}\n${format(children, i, `${pre || '|'}${'-'.repeat(i)}`)}`
    return `${pre}${name}${pre1}${users_count}`
    }).join('\n')
    console.log(format(company))
console.log('==========================')

// или

let a=""
let res =""
const getFun = function (tr, a) {
    res += a + `${tr.name}(${tr.users_count})\n`;
    if(!tr.children)
    return `${tr.name}(${tr.users_count})\n`;
    for (let i=0; i < tr.children.length; i++) {
        getFun(tr.children[i], a + "--")
    } return res
}
console.log(getFun(company[0], a))
console.log('==========================')

// или

const printNode = (node, acc) => console.log(`${'--'.repeat(acc)} ${node.name} (${node.users_count})`)
const printTree = (tree = company, acc =0) => {
    tree.forEach(node => {
        printNode(node, acc)
        if(Object.hasOwn(node, 'children')) {
            printTree(node.children, newAcc = acc + 1);
        }
    })
}
printTree()

console.log('==========================')
function buildTree1(tree, prefix) {
    if (typeof prefix === 'undefined')
    prefix = ''
    let result = ''

    tree.forEach(function(e, i) {
        let lastNode = i == tree.length -1
        result += prefix + (lastNode ? ' ' : '') + ' ' + e.name + ' (' + e.users_count + ')' + '\n'
        if (e.children)
        result += buildTree1(e.children, prefix + (lastNode ? '-' : '-') + '-')
    })
    return result
}
console.log(buildTree1(company))
console.log('==========================')

// или

function letShowMustGoOn(data, prefix = '') {
    for (const object of data) {
        let formattedPrefix = (prefix) ? prefix + ' ' : ''
        console.log(`${formattedPrefix}${object.name} (${object.users_count})`)
        for (const objectPropertyValue of Object.values(object)) {
            if (!Array.isArray(objectPropertyValue)) continue
            letShowMustGoOn(objectPropertyValue, prefix + '--')
        }
    }
}
letShowMustGoOn(company)
console.log('==========================')

// или

function treeView(array, print) {
    for (let entry in array) {
        if(array[entry].parent == null) {
            console.log(array[entry].name + ' (' + array[entry].users_count + ')')
        }
        else {
            console.log(print + array[entry].name + ' (' + array[entry].users_count + ')')
        }
        treeView(array[entry].children, print + '--')
        }
        return null
    }
    treeView(company, '')
    console.log('==========================')