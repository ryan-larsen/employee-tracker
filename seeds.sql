-- INSERT INTO department (name)
-- VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal"),('Human Resources');

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("VP Sales", 100000, 1), /* 1 */
--          ("Salesperson", 80000, 1), /* 2 */
--          ("Lead Engineer", 150000, 2), /* 3 */
--          ("Software Engineer", 120000, 2), /* 4 */
--          ("Accountant", 125000, 3), /* 5 */
--          ("Lead Lawyer", 190000, 4), /* 6 */
--          ("Lawyer", 130000, 4), /* 7 */
--         ('VP Human Resources', 190000, 5), /* 8 */
--         ('Human Resource Generalist', 65000, 5); /* 9 */

-- INSERT INTO employees (first_name, last_name, role_id, manager_id)
-- VALUES ("Andrew", "Reedy", 3, null), 
--         ("Sam", "Knight", 1, null),
--         ("Brain", "Aguire", 6, null),
--         ("Ryan", "Larsen", 4, null),
--         ("Tevin", "Johnson", 2, null),
--         ("Joe", "Smith", 7, null), 
--         ("Ray", "Weiss", 5, null), 
--         ("Charley", "Gates", 8, null), 
--         ("Sam", "Wilson", 9, null); 
        

--  SELECT * FROM department;
-- 	SELECT * FROM role
--  SELECT * FROM employees;