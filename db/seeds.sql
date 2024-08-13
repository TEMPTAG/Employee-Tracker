INSERT INTO department (name)
VALUES  ('Executive Management'),
        ('Sales'), 
        ('Service'), 
        ('Finance'), 
        ('Parts'), 
        ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES  ('General Manager', 400000, 1),
        ('Sales Manager', 150000, 2), 
        ('Sales Consultant', 80000, 2), 
        ('Service Manager', 120000, 3), 
        ('Automotive Technician', 75000, 3),
        ('Finance Manager', 130000, 4), 
        ('Accountant', 75000, 4), 
        ('Parts Manager', 90000, 5), 
        ('Parts Specialist', 60000, 5), 
        ('Customer Service Manager', 110000, 6), 
        ('Customer Service Representative', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Jonathan', 'Pierce', 1, NULL)
        ('David', 'Thompson', 2, 1), 
        ('Emily', 'Rodriguez', 3, 2), 
        ('Michael', 'Carter', 4, 1), 
        ('Samantha', 'Lee', 5, 4),
        ('Jessica', 'Miller', 6, 1), 
        ('Brian', 'Anderson', 7, 4), 
        ('Robert', 'Martinez', 8, 1), 
        ('Laura', 'Sanchez', 9, 8), 
        ('Sarah', 'Johnson', 10, 1), 
        ('James', 'Brown', 11, 10);