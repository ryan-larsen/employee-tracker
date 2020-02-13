 DROP DATABASE IF EXISTS employeeTrackerDB;
 CREATE DATABASE employeeTrackerDB;

 USE employeeDB;

 CREATE TABLE department(
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL
 );

 CREATE TABLE role(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR (100),
 salary DECIMAL NOT NULL,
 departmentId INT NOT NULL,
 CONSTRAINT fkDepartment FOREIGN KEY (departmentId) REFERENCES department(id)
 );

 CREATE TABLE employee(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 firstName VARCHAR(30) NOT NULL,
 lastName VARCHAR(30) NOT NULL,
 roleId INT NOT NULL,
 CONSTRAINT fkRole FOREIGN KEY (roleId) REFERENCES role(id),
 managerId INT, 
 CONSTRAINT fkManager FOREIGN KEY (managerId) REFERENCES employee(id)
