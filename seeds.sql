 USE employeeTrackerDB;

 INSERT INTO department (name)
 VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal"),('Human Resources');

 INSERT INTO role (title, salary, departmentId)
 VALUES ("VP Sales", 30000, 1), /* 1 */
 		 ("Salesperson", 90000, 1), /* 2 */
 		 ("Lead Engineer", 80000, 2), /* 3 */
 		 ("Software Engineer", 50000, 2), /* 4 */
 		 ("Accountant", 125000, 3), /* 5 */
 		 ("Lead Lawyer", 2000000, 4), /* 6 */
          ("Lawyer", 150000, 4), /* 7 */
          ('VP Human Resources', 300000, 5), /* 8 */
          ('Human Resource Generalist', 10000, 5); /* 9 */

 INSERT INTO employee (firstName, lastName, roleId, managerId)
 VALUES ("Derek", "Jeter", 5, null), 
 		("Lebron", "James", 2, null),
         ("Patrick Mahomes", "Dancer", 8, null),
         ("Gary", "Snail", 3, null),
         ("Mr.", "Krabs", 1, null),
         ("Patrick", "Star", 7, null), 
         ("Doodlebob", "Squarepants", 4, null), 
         ("Spongebob", "Squarepants", 6, null), 
         ("Timmy", "Turner", 9, null); 
         
 SELECT * FROM department;
 SELECT * FROM role;
 SELECT * FROM employee;