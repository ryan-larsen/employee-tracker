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
    switch (answer.action) {
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
    }
  })
}

function viewDepartments () {

}

function viewRole () {
  
}

function viewEmployee () {
  const query = 'SELECT * FROM employee'
  connection.query(query, function(err, res) {
    if (err) throw err
    console.log('There are ' + res.length + ' Employees found.')
    console.table('Employees', res)
    buildApp()
  })
}

function addDepartment () {
  
}

function addEmployee () {
  
}

function addRole () {
  
}

app.listen(port, function () {
  console.log(`Now listening to port ${port}. Enjoy your stay!`)
})
