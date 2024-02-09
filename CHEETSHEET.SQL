-- PERSON = PERSON ID
-- PRODUCT = PRODCT ID
-- COMMENT = COMMENT ID
-- SO IF YOU ARE LOOKING FOR NUMBER OF PERSON,PRODUCT OR COMMENT......
-- IN YOUR SELECT STATEMENT REFER TO THAT THINGS ID


--if you see find the number of something -->> SELECT COUNT






--create a databse
CREATE DATABASE database_name
--use the database
USE database_name



--create tables into the database
CREATE TABLE table_name(
--insert colums into the created table—
User_id VARCHAR(20) PRIMARY KEY, --this primary key will act as a foregin key in other tables
User_name VARCHAR(20),
email_address VARCHAR(30), 
);




--add rows
INSERT INTO table_name
--there are 2 ways to add rows
--specify the exact column 
INSERT INTO table_name(columnname, columnname, columnname...........)
VALUES ('val1forcolname1', 'val2forcolname2', 'val3forcolname3')
--OR IF INSERTING TO ALL
INSERT INTO table_name
VALUES('val1', 'val2', 'val3'...............................)




--how to check for null valeus --used to check for empty valeus
SELECT column_name, column_name, column_name................
FROM table_name
WHERE column_name IS NULL;
--you can also check if not null
WHERE column_name IS NOT NULL;



--how to update
UPDATE table_name
SET column1 = 'value1', column2 = 'value2', ...
WHERE condition; --if no where it will update all
WHERE customer_id = 1;



--how to delete
DELETE FROM table_name WHERE condition; --delete with set condition
DELETE FROM table_name; --deletes all rows
DROP TABLE table_name; --delete a table completely





--Select only the first 3 records of the Customers table:
SELECT TOP 3 * FROM table_name;
--or
SELECT * FROM table_name;
FETCH FIRST 3 ROWS ONLY; 
--or 
SELECT TOP 50 PERCENT * FROM table_name;





--how to sort
ORDER BY columnName DESC / ASC;




--how to select max and min
SELECT MIN(column_name)   --or MAX
FROM table_name
WHERE condition;



--how to use an allias to represent a COLUMN
SELECT columnName AS madeUpWord --notice AS comes after select statement
FROM table_name;



--how to calculate the number of rows present
SELECT COUNT(column_name) -- or you can just select all *
FROM table_name
WHERE condition;



--distinct treats rows with the same valeu as one
--How many different prices are there in the Products table:
SELECT COUNT(DISTINCT Price)
FROM table_name;




--how to return the sum of something
SELECT SUM(column_name)  --we can add an expression ie (column_name * 10) 
FROM table_name
WHERE condition;
--how to return the average of that column
SELECT AVG(column_name)
FROM table_name;
WHERE condition; --null valeus are ignored






--how to search for a specified pattern
--select all custommers whose name STARTS with an a
SELECT * FROM table_name  -- 
WHERE column_name LIKE 'a%'; --you can add a condition using AND OR /same syntax

--select all custommers whose name END with an a
SELECT * FROM table_name  -- 
WHERE column_name LIKE '%a'; --you can add a condition using AND OR /same syntax
-- OR YOU CAN COMBINE THE ABOVE USING 'b%s' STARTS with b and ENDS with s

--Return all customers from a city that STARTS with 'L' followed by one wildcard character, then 'nd' and then two wildcard characters:
SELECT * FROM table_name
WHERE city LIKE 'L_nd__'; --you can add a condition using AND OR /same syntax
--Return all customers with a City starting with any character, followed by "ondon":
SELECT * FROM table_name
WHERE column_name LIKE '_ondon';

--Return all customers from a city that CONTAINS the letter 'L':
SELECT * FROM Customers
WHERE city LIKE '%L%'; --you can add a condition using AND OR /same syntax

--how to use LIKE to get all customers from SPAIN (a specific phrase)
SELECT * FROM Customers
WHERE Country LIKE 'Spain';

--Return all customers starting with EITHER "b", "s", or "p":
SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';

--Return all customers starting with "a", "b", "c", "d", "e" or "f":
SELECT * FROM Customers
WHERE CustomerName LIKE '[a-f]%';

--MORE INFORMATION ON LINE 715
--NB _ REPRESENTS 1 ANY CHARACTER








--how to select multiple valeus using the IN operator
SELECT column_name(s) -- column1, column2, .............
FROM table_name
WHERE column_name IN (value1, value2, ...); --where the c









--one way we can use joins is imagine we want to know the amount of goods sold
SELECT columns
FROM primary_table
JOIN second_table ON primary_table.column_name = second_table.column_name
-- Additional JOIN clauses if needed
WHERE conditions;


--JOINING MULTIPLE TABLES
SELECT columns --columns of choice you want returned
FROM primary_table --the table you want to act as primary
JOIN second_table ON primary_table.column_name = second_table.column_name 
JOIN third_table ON primary_table.column_name = third_table.column_name  -- JOIN third_table ON primary_table.column_name = second_table.column_name
JOIN fourth_table ON second_table.column_name = fourth_table.column_name
-- Additional JOIN clauses if needed
WHERE conditions;
--IF THE COLUMN NAMES ARE THE SAME USE ALLIANCES





CREATE INDEX Statement:
--An index is a database object that provides a quick and efficient method for looking up rows in a database table based on the values in specified columns.
Syntax: CREATE INDEX index_name ON table_name (column1, column2, ...);
DROP INDEX Statement:
Syntax: DROP INDEX index_name ON table_name;
ALTER TABLE Statement:
--Used to add or remove indexes on existing tables.




Triggers in SQL are special types of stored procedures that are automatically executed or fired in response to specific events
on a particular table or view. They can be useful for enforcing business rules, maintaining data integrity, or 
automating certain actions when specific events occur.

    Types of Triggers:
        BEFORE Triggers (or PRE Triggers): Executed before the triggering event (e.g., before an INSERT, UPDATE, or DELETE operation).
        AFTER Triggers (or POST Triggers): Executed after the triggering event.

    Trigger Syntax:
        CREATE TRIGGER: --Used to define a new trigger.
        AFTER/BEFORE INSERT/UPDATE/DELETE: --Specifies the triggering event and timing.
        ON table_name: -Specifies the table to which the trigger is attached.
        FOR EACH ROW: --Indicates that the trigger is row-level (executed once for each affected row).
        BEGIN/END: --Encloses the trigger's SQL statements.

--SYNTAX
CREATE [OR REPLACE] TRIGGER trigger_name
[BEFORE/AFTER] [INSERT/UPDATE/DELETE] ON table_name
FOR EACH ROW
BEGIN
   -- Trigger SQL statements
END;

Access to Old and New Values:
    OLD: Refers to the old values before the triggering event (applicable in UPDATE and DELETE triggers).
    NEW: Refers to the new values after the triggering event (applicable in INSERT and UPDATE triggers).












A stored procedure in SQL is a precompiled collection of one or more SQL statements that can be executed as 
a single unit. Stored procedures can accept parameters, perform operations, and return values. 

-- Create a stored procedure
CREATE PROCEDURE GetUserDetails
    @UserID INT, -- Input parameter
    @UserName NVARCHAR(50) OUTPUT, -- Output parameter
    @Email NVARCHAR(100) OUTPUT,
    @Status INT OUTPUT
AS
BEGIN
    -- Check if the user exists
    IF EXISTS (SELECT 1 FROM Users WHERE UserID = @UserID)
    BEGIN
        -- Retrieve user details
        SELECT @UserName = UserName, @Email = Email
        FROM Users
        WHERE UserID = @UserID;

        -- Set status to success
        SET @Status = 1;
    END
    ELSE
    BEGIN
        -- Set output parameters to NULL and status to failure
        SET @UserName = NULL;
        SET @Email = NULL;
        SET @Status = 0;
    END
END;

--You can execute this stored procedure like this:
DECLARE @UserName NVARCHAR(50), @Email NVARCHAR(100), @Status INT;

-- Execute the stored procedure
EXEC GetUserDetails
    @UserID = 1,
    @UserName = @UserName OUTPUT,
    @Email = @Email OUTPUT,
    @Status = @Status OUTPUT;

-- Check the results
IF @Status = 1
BEGIN
    PRINT 'User details retrieved successfully:';
    PRINT 'UserName: ' + @UserName;
    PRINT 'Email: ' + @Email;
END
ELSE
BEGIN
    PRINT 'User does not exist.';
END



In SQL (Structured Query Language), a user-defined object refers to database objects or entities created by the 
users rather than being predefined by the database management system (DBMS). These user-defined objects allow 
users to customize and structure their database according to specific requirements. 

    User-Defined Tables:
        Users can create their own tables to store data in a structured format.
        Define columns, data types, and constraints using the CREATE TABLE statement.
        Example:
    CREATE TABLE Employee (
        EmployeeID INT PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50),
        DepartmentID INT,
        FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
    );

    User-Defined Views:

    Views are virtual tables derived from one or more base tables.
    Users can create views to simplify complex queries or to provide a specific perspective on the data.
    Example:
    CREATE VIEW ActiveEmployees AS
    SELECT * FROM Employee WHERE EmploymentStatus = 'Active';

User-Defined Functions:

    Users can create custom functions to encapsulate specific logic or calculations.
    Functions can be scalar (returning a single value), table-valued (returning a table), or aggregate (operating on a set of values).
    Example:

    sql

    CREATE FUNCTION CalculateBonus(@Salary DECIMAL(10, 2)) RETURNS DECIMAL(10, 2)
    AS
    BEGIN
        RETURN @Salary * 0.1;
    END;

User-Defined Stored Procedures:

    Stored procedures are precompiled sets of one or more SQL statements.
    Users can create stored procedures to encapsulate business logic, improve code reusability, and enhance security.
    Example:

    sql

    CREATE PROCEDURE GetEmployeeDetails(@EmployeeID INT)
    AS
    BEGIN
        SELECT * FROM Employee WHERE EmployeeID = @EmployeeID;
    END;

User-Defined Triggers:

    Triggers are special stored procedures that automatically execute in response to specific events, such as INSERT, UPDATE, or DELETE.
    Users can define triggers to enforce data integrity, perform auditing, or initiate specific actions.
    Example:

    sql

    CREATE TRIGGER BeforeEmployeeInsert
    ON Employee
    BEFORE INSERT
    AS
    BEGIN
        -- Trigger logic here
    END;

User-Defined Types:

    Users can define custom data types to represent specific entities or concepts in the database.
    Examples include user-defined scalar types, table types, and alias data types.
    Example:

    sql

    CREATE TYPE Phone AS VARCHAR(15);

User-Defined Indexes:

    Users can create custom indexes on columns to improve query performance.
    Indexes help speed up the retrieval of data by providing a quick lookup mechanism.
    Example:

    sql

    CREATE INDEX IX_Employee_LastName ON Employee(LastName);

User-Defined Constraints:

    Users can define constraints to enforce rules on the data in their tables.
    Constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, etc.
    Example:

    sql

    ALTER TABLE Employee
    ADD CONSTRAINT CK_Salary CHECK (Salary >= 0);

User-Defined Aggregates:

    Users can create custom aggregate functions to perform calculations on sets of values.
    Useful when standard SQL aggregates do not meet specific requirements.
    Example:

    sql

    CREATE AGGREGATE dbo.ConcatenateStrings
    (@input NVARCHAR(MAX))
    RETURNS NVARCHAR(MAX)
    EXTERNAL NAME YourAssemblyName.ConcatenateStrings;

User-Defined Assemblies:

    Users can create assemblies containing .NET code and deploy them in the database.
    Useful for extending the functionality of the database using external code.
    Example:

    sql

    CREATE ASSEMBLY YourAssembly FROM 'C:\YourPath\YourAssembly.dll' WITH PERMISSION_SET = SAFE;

User-Defined Synonyms:

    Synonyms are aliases for database objects, making it easier to reference them.
    Users can create synonyms to simplify queries and provide abstraction over the underlying objects.
    Example:

    sql

CREATE SYNONYM Emp FOR HumanResources.Employee;
