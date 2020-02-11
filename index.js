const inquirer = require('inquirer')
const mysql = require('mysql')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Now listening to port ${port}. Enjoy your stay!`)
})
