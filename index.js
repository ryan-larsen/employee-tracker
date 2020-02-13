const inquirer = require('inquirer')
const mysql = require('mysql')
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employeeDB'
})

connection.connect(function (err) {
  if (err) throw err
  else buildApp()
})

function buildApp () {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Please select an action from our employee database.',
    choices: [
      'View Departments',
      'View Roles',
      'View Employees',
      'Add a new Department',
      'Add a new Employee',
      'Add a new Role',
      'Exit'
    ]
  }).then(function (ans) {
    switch (ans.action) {
      case 'View Departments':
        viewDepartments()
        break
      case 'View Roles':
        viewRole()
        break
      case 'View Employees':
        viewEmployee()
        break
      case 'Add a new Department':
        addDepartment()
        break
      case 'Add a new Employee':
        addEmployee()
        break
      case 'Add a new Role':
        addRole()
        break
      case 'Exit':
        closeApp()
        break
      default:
        break
    }
  })
}

function viewDepartments () {
  const query = 'SELECT * FROM department'
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table('Departments', res)
    buildApp()
  })
}

function viewRole () {
  const query = 'SELECT * FROM role'
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table('Roles: ', res)
    buildApp()
  })
}

function viewEmployee () {
  const query = 'SELECT * FROM employee'
  connection.query(query, function (err, res) {
    if (err) throw err
    console.log('There are ' + res.length + ' Employees found.')
    console.table('Employees', res)
    buildApp()
  })
}

function addDepartment () {
  inquirer
    .prompt([{
      name: 'newDept',
      type: 'input',
      message: 'What is the name of the new Department you would like to add?'
    }]).then(function (ans) {
      connection.query(
        'INSERT INTO department SET ?', {
          name: ans.newDept
        }
      )
      const query = 'SELECT * FROM department'
      connection.query(query, function (err, res) {
        if (err) throw err
        console.table('All Departments:', res)
        buildApp()
      })
    })
}

function addEmployee () {
  connection.query('SELECT * FROM role', function (err, res) {
    if (err) throw err

    inquirer
      .prompt([{
        name: 'firstName',
        type: 'input',
        message: "Employee's fist name: "
      },
      {
        name: 'lastName',
        type: 'input',
        message: "Employee's last name: "
      },
      {
        name: 'role',
        type: 'list',
        choices: function () {
          const roleArr = []
          for (let i = 0; i < res.length; i++) {
            roleArr.push(res[i].title)
          }
          return roleArr
        },
        message: 'What is this employee\'s role?'
      }
      ]).then(function (ans) {
        let roleID
        for (let j = 0; j < res.length; j++) {
          if (res[j].title === ans.role) {
            roleID = res[j].id
            console.log(roleID)
          }
        }
        connection.query(
          'INSERT INTO employee SET ?', {
            firstName: ans.first_name,
            lastName: ans.last_name,
            roleId: roleID
          },
          function (err) {
            if (err) throw err
            console.log('Your employee has been added!')
            buildApp()
          }
        )
      })
  })
}

function addRole () {
  connection.query('SELECT * FROM department', function (err, res) {
    if (err) throw err

    inquirer
      .prompt([
        {
          name: 'newRole',
          type: 'input',
          message: 'What is the title of the new role?'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary of this position?'
        },
        {
          name: 'deptChoice',
          type: 'rawlist',
          choices: function (res) {
            const deptArr = []
            for (let i = 0; i < res.length; i++) {
              deptArr.push(res[i].name)
            }
            return deptArr
          }
        }
      ]).then(function (ans) {
        let deptId
        for (let j = 0; j < res.length; j++) {
          if (res[j].name === ans.deptChoice) {
            deptId = res[j].id
          }
        }

        connection.query(
          'INSERT INTO role SET ?',
          {
            title: ans.new_role,
            salary: ans.salary,
            department_id: deptId
          },
          function (err, res) {
            if (err) throw err
            console.log('Successfully created a new role.')
            buildApp()
          }
        )
      })
  })
}

function closeApp () {
  connection.end()
}

app.listen(port, function () {
  console.log(`Now listening to port ${port}. Enjoy your stay!`)
})
