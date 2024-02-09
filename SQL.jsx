// The following SQL statement returns all records from a table named "Customers":
Select all records from the Customers table:
SELECT * FROM Customers;

// There are Records and Columns in SQL?
SQL keywords are NOT case sensitive: select is the same as SELECT


Some of The Most Important SQL Commands

    SELECT - extracts data from a database
    UPDATE - updates data in a database
    DELETE - deletes data from a database
    INSERT INTO - inserts new data into a database
    CREATE DATABASE - creates a new database
    ALTER DATABASE - modifies a database
    CREATE TABLE - creates a new table
    ALTER TABLE - modifies a table
    DROP TABLE - deletes a table
    CREATE INDEX - creates an index (search key)
    DROP INDEX - deletes an index


The SQL SELECT Statement

The SELECT statement is used to select data from a database.
Example
Return data from the Customers table:
SELECT CustomerName, City FROM Customers;
// Syntax
// SELECT column1, column2, ...
// FROM table_name;

If you want to return all columns, without specifying every column name, you can use the SELECT * syntax:
Example
Return all the columns from the Customers table:
SELECT * FROM Customers;



The SELECT DISTINCT statement is used to return only distinct values.
Example
Select all the different countries from the "Customers" table:
SELECT DISTINCT Country FROM Customers;
Inside a table, a column often contains many duplicate values; and sometimes you only want to list the distinct values.
// Syntax
// SELECT DISTINCT column1, column2, ...
// FROM table_name;
If you omit the DISTINCT keyword, the SQL statement returns the "Country" value from all the records of the "Customers" table:
Example
SELECT Country FROM Customers;


By using the DISTINCT keyword in a function called COUNT, we can return the number of different countries.
Example
SELECT COUNT(DISTINCT Country) FROM Customers;
// Note: The COUNT(DISTINCT column_name) is not supported in Microsoft Access databases.
// Here is a workaround for MS Access:
// Example
// SELECT Count(*) AS DistinctCountries
// FROM (SELECT DISTINCT Country FROM Customers);


The SQL WHERE Clause
The WHERE clause is used to filter records.
It is used to extract only those records that fulfill a specified condition.
Example
Select all customers from Mexico:
SELECT * FROM Customers
WHERE Country='Mexico'; //NOTICE THE SINGLE QUOTES FOR THE STRING
// Syntax
// SELECT column1, column2, ...
// FROM table_name
// WHERE condition;
Note: The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!


Text Fields vs. Numeric Fields
SQL requires single quotes around text values (most database systems will also allow double quotes).
// However, numeric fields should not be enclosed in quotes:
// Example
// SELECT * FROM Customers
// WHERE CustomerID=1; 


Operators in The WHERE Clause
// = 	Equal 	
// > 	Greater than 	
// < 	Less than 	
// >= 	Greater than or equal 	
// <= 	Less than or equal 	
// <> 	Not equal. Note: In some versions of SQL this operator may be written as != 	
// BETWEEN ---	Between a certain range 	
// LIKE --- Search for a pattern 	
// IN --- To specify multiple possible values for a column 	


The SQL ORDER BY

The ORDER BY keyword is used to sort the result-set in ascending or descending order.
Example
// Sort the products by price:
// SELECT * FROM Products
// ORDER BY Price;
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
// DESC
// The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.
// Example
// Sort the products from highest to lowest price:
// SELECT * FROM Products
// ORDER BY Price DESC; 

Order Alphabetically
For string values the ORDER BY keyword will order alphabetically:
Example
Sort the products alphatbetically by ProductName:
SELECT * FROM Products
ORDER BY ProductName; //to sort in reverse add DESC


ORDER BY Several Columns
The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" and the "CustomerName" column.
This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:
Example
SELECT * FROM Customers
ORDER BY Country, CustomerName; 

Using Both ASC and DESC
The following SQL statement selects all customers from the "Customers" table, sorted ascending by the "Country" and descending by the "CustomerName" column:
Example
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC; 



The SQL AND Operator
The WHERE clause can contain one or many AND operators.
The AND operator is used to filter records based on more than one condition, like if you want to return all customers from Spain that starts with the letter 'G':
Example
// Select all customers from Spain that starts with the letter 'G':
// SELECT *
// FROM Customers
// WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
// Syntax
// SELECT column1, column2, ...
// FROM table_name
// WHERE condition1 AND condition2 AND condition3 ...; 

AND vs OR
The AND operator displays a record if all the conditions are TRUE.
The OR operator displays a record if any of the conditions are TRUE.


The following SQL statement selects all fields from Customers where Country is "Germany" AND City is "Berlin" AND PostalCode is higher than 12000:
Example
SELECT * FROM Customers
WHERE Country = 'Germany'
AND City = 'Berlin'
AND PostalCode > 1200;



Combining AND and OR
You can combine the AND and OR operators.
The following SQL statement selects all customers from Spain that starts with a "G" or an "R".
Make sure you use parenthesis to get the correct result.
// Example
// Select all Spanish customers that starts with either "G" or "R":
// SELECT * FROM Customers
// WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');
Without parenthesis, the select statement will return all customers from Spain that starts with a "G", plus all customers that starts with an "R", regardless of the country value:


Select all customers that either:
are from Spain and starts with either "G", or
starts with the letter "R":
SELECT * FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%'; 





The SQL OR Operator
The WHERE clause can contain one or more OR operators.
The OR operator is used to filter records based on more than one condition, like if you want to return all customers from Germany but also those from Spain:
// Example
// Select all customers from Germany or Spain:
// SELECT *
// FROM Customers
// WHERE Country = 'Germany' OR Country = 'Spain';
Syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;




At Least One Condition Must Be True
The following SQL statement selects all fields from Customers where either City is "Berlin", CustomerName starts with the letter "G" or Country is "Norway":
// Example
// SELECT * FROM Customers
// WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway'; 




The NOT Operator
The NOT operator is used in combination with other operators to give the opposite result, also called the negative result.
In the select statement below we want to return all customers that are NOT from Spain:
// Example
// Select only the customers that are NOT from Spain:
// SELECT * FROM Customers
// WHERE NOT Country = 'Spain';
In the example above, the NOT operator is used in combination with the = operator, but it can be used in combination with other comparison and/or logical operators. See examples below.
Syntax
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;



NOT LIKE
Example
Select customers that does not start with the letter 'A':
SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'A%';



NOT BETWEEN
Example
Select customers with a customerID not between 10 and 60:
SELECT * FROM Customers
WHERE CustomerID NOT BETWEEN 10 AND 60;


NOT IN
Example
Select customers that are not from Paris or London:
SELECT * FROM Customers
WHERE City NOT IN ('Paris', 'London');


NOT Greater Than
Example
Select customers with a CustomerId not greater than 50:
SELECT * FROM Customers
WHERE NOT CustomerID > 50;


NOT Less Than
Example
Select customers with a CustomerID not less than 50:
SELECT * FROM Customers
WHERE NOT CustomerId < 50;



The SQL INSERT INTO Statement
The INSERT INTO statement is used to insert new records in a table.
INSERT INTO Syntax
It is possible to write the INSERT INTO statement in two ways:
1. Specify both the column names and the values to be inserted:
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:
// INSERT INTO table_name
// VALUES (value1, value2, value3, ...);



The following SQL statement inserts a new record in the "Customers" table:
Example
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');



Insert Data Only in Specified Columns
It is also possible to only insert data in specific columns.
The following SQL statement will insert a new record, but only insert data in the "CustomerName", "City", and "Country" columns (CustomerID will be updated automatically):
// Example
// INSERT INTO Customers (CustomerName, City, Country)
// VALUES ('Cardinal', 'Stavanger', 'Norway');
The selection from the "Customers" table will now look like this:
CustomerID 	CustomerName 	ContactName 	Address 	City 	    PostalCode 	Country
92 	        Cardinal 	    null 	        null  	    Stavanger 	null 	    Norway


Insert Multiple Rows
It is also possible to insert multiple rows in one statement.
To insert multiple rows of data, we use the same INSERT INTO statement, but with multiple values:
Example
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');
Make sure you separate each set of values with a comma ,.




What is a NULL Value?
A field with a NULL value is a field with no value.
If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.



How to Test for NULL Values?
It is not possible to test for NULL values with comparison operators, such as =, <, or <>.
We will have to use the IS NULL and IS NOT NULL operators instead.
IS NULL Syntax
// SELECT column_names
// FROM table_name
// WHERE column_name IS NULL;
--IS NOT NULL Syntax


The IS NULL Operator
The IS NULL operator is used to test for empty values (NULL values).
The following SQL lists all customers with a NULL value in the "Address" field:
// Example
// SELECT CustomerName, ContactName, Address
// FROM Customers
// WHERE Address IS NULL;
Tip: Always use IS NULL to look for NULL values.



IS NOT NULL Syntax
// SELECT column_names
// FROM table_name
// WHERE column_name IS NOT NULL;
The IS NOT NULL Operator
The IS NOT NULL operator is used to test for non-empty values (NOT NULL values).
The following SQL lists all customers with a value in the "Address" field:
// Example
// SELECT CustomerName, ContactName, Address
// FROM Customers
// WHERE Address IS NOT NULL;


The SQL UPDATE Statement
The UPDATE statement is used to modify the existing records in a table.
// UPDATE Syntax
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
Note: Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!


UPDATE Table
The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.
// Example
// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;

CustomerID 	CustomerName 	        ContactName 	Address 	    City 	PostalCode 	Country
1           Alfreds Futterkiste 	Maria Anders 	Obere Str. 57 	Berlin 	12209 	    Germany

The selection from the "Customers" table will now look like this:
CustomerID 	CustomerName 	        ContactName 	Address 	    City 	    PostalCode 	Country
1           Alfreds Futterkiste 	Alfred Schmidt 	Obere Str. 57 	Frankfurt 	12209 	    Germany



UPDATE Multiple Records
It is the WHERE clause that determines how many records will be updated.
The following SQL statement will update the ContactName to "Juan" for all records where country is "Mexico":
// Example
// UPDATE Customers
// SET ContactName='Juan'
// WHERE Country='Mexico';
CustomerID 	CustomerName 	           ContactName 	        Address 	            City 	      PostalCode 	Country
1           Alfreds Futterkiste 	   Alfred Schmidt 	    Obere Str. 57 	        Frankfurt 	  12209 	    Germany
2 	        Ana Trujillo Emparedados   Juan 	            Avda. de la 2222 	    México D.F.   05021 	    Mexico
3 	        Antonio Moreno Taquería    Juan 	            Mataderos 2312 	        México D.F.   05023 	    Mexico
4           Around the Horn 	       Thomas Hardy 	    120 Hanover Sq. 	    London 	      WA1 1DP 	    UK
5 	        Berglunds snabbköp 	       Christina Berglund 	Berguvsvägen 8 	        Luleå 	      S-958 22 	    Sweden


Update Warning!
Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!




The SQL DELETE Statement
The DELETE statement is used to delete existing records in a table.
// DELETE Syntax
// DELETE FROM table_name WHERE condition;
Note: Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!


SQL DELETE Example
The following SQL statement deletes the customer "Alfreds Futterkiste" from the "Customers" table:
Example
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';


Delete All Records
It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:
DELETE FROM table_name;
The following SQL statement deletes all rows in the "Customers" table, without deleting the table:
Example
// DELETE FROM Customers;



Delete a Table
To delete the table completely, use the DROP TABLE statement:
Example
Remove the Customers table:
// DROP TABLE Customers;


SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause

The SQL SELECT TOP Clause
The SELECT TOP clause is used to specify the number of records to return.
The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.
// Example
// Select only the first 3 records of the Customers table:
// SELECT TOP 3 * FROM Customers;
Note: Not all database systems support the SELECT TOP clause. MySQL supports the LIMIT clause to select a limited number of records, while Oracle uses FETCH FIRST n ROWS ONLY and ROWNUM.


LIMIT
Example
Select the first 3 records of the Customers table:
SELECT * FROM Customers
LIMIT 3; 


Select the first 3 records of the Customers table:
SELECT * FROM Customers
FETCH FIRST 3 ROWS ONLY; 



SQL TOP PERCENT Example
The following SQL statement selects the first 50% of the records from the "Customers" table (for SQL Server/MS Access):
Example
SELECT TOP 50 PERCENT * FROM Customers;


ADD a WHERE CLAUSE
The following SQL statement selects the first three records from the "Customers" table, where the country is "Germany" (for SQL Server/MS Access):
// Example
// SELECT TOP 3 * FROM Customers
// WHERE Country='Germany';


ADD the ORDER BY Keyword
Add the ORDER BY keyword when you want to sort the result, and return the first 3 records of the sorted result.
For SQL Server and MS Access:
// Example
// Sort the result reverse alphabetically by CustomerName, and return the first 3 records:
// SELECT TOP 3 * FROM Customers
// ORDER BY CustomerName DESC;



The SQL MIN() and MAX() Functions
The MIN() function returns the smallest value of the selected column.
The MAX() function returns the largest value of the selected column.

Find the lowest price:
SELECT MIN(Price)
FROM Products;

Find the highest price:
SELECT MAX(Price)
FROM Products; 

// Syntax

// SELECT MIN(column_name)
// FROM table_name
// WHERE condition;

// SELECT MAX(column_name)
// FROM table_name
// WHERE condition;



Set Column Name (Alias)
When you use MIN() or MAX(), the returned column will be named MIN(field) or MAX(field) by default. To give the column a new name, use the AS keyword:
// Example
// SELECT MIN(Price) AS SmallestPrice
// FROM Products;


The SQL COUNT() Function
The COUNT() function returns the number of rows that matches a specified criterion.
Example
Find the total number of products in the Products table:
SELECT COUNT(*)
FROM Products;


// Syntax
// SELECT COUNT(column_name)
// FROM table_name
// WHERE condition;


Add a Where Clause
You can add a WHERE clause to specify conditions:
// Example
// Find the number of products where Price is higher than 20:
// SELECT COUNT(ProductID)
// FROM Products
// WHERE Price > 20;


Specify Column
You can specify a column name instead of the asterix symbol (*).
If you specify a column instead of (*), NULL values will not be counted.
// Example
// Find the number of products where the ProductName is not null:
// SELECT COUNT(ProductName)
// FROM Products;



Ignore Duplicates
You can ignore duplicates by using the DISTINCT keyword in the COUNT function.
If DISTINCT is specified, rows with the same value for the specified column will be counted as one.
// Example
// How many different prices are there in the Products table:
// SELECT COUNT(DISTINCT Price)
// FROM Products;



Use an Alias
Give the counted column a name by using the AS keyword.
// Example
// Name the column "number of records":
// SELECT COUNT(*) AS [number of records]
// FROM Products;



SQL SUM() Function
The SQL SUM() Function
The SUM() function returns the total sum of a numeric column.
// Example
// Return the sum of all Quantity fields in the OrderDetails table:
// SELECT SUM(Quantity)
// FROM OrderDetails; 
Syntax
SELECT SUM(column_name)
FROM table_name
WHERE condition;



Add a Where Clause
You can add a WHERE clause to specify conditions:
// Example
// Return the number of orders made for the product with ProductID 11:
// SELECT SUM(Quantity)
// FROM OrderDetails
// WHERE ProductId = 11;



Use an Alias
Give the summarized column a name by using the AS keyword.
// Example
// Name the column "total":
// SELECT SUM(Quantity) AS total
// FROM OrderDetails;



SUM() With an Expression
The parameter inside the SUM() function can also be an expression.
If we assume that each product in the OrderDetails column costs 10 dollars, we can find the total earnings in dollars by multiply each quantity with 10:
// Example
// Use an expression inside the SUM() function:
// SELECT SUM(Quantity * 10)
// FROM OrderDetails; 





We can also join the OrderDetails table to the Products table to find the actual amount, instead of assuming it is 10 dollars:
// Example
// Join OrderDetails with Products, and use SUM() to find the total amount:
// SELECT SUM(Price * Quantity)
// FROM OrderDetails
// LEFT JOIN Products ON OrderDetails.ProductID = Products.ProductID; 




The SQL AVG() Function
The AVG() function returns the average value of a numeric column.
// Example
// Find the average price of all products:
// SELECT AVG(Price)
// FROM Products;
Note: NULL values are ignored.
// Syntax
// SELECT AVG(column_name)
// FROM table_name
// WHERE condition;



Add a Where Clause
You can add a WHERE clause to specify conditions:
// Example
// Return the average price of products in category 1:
// SELECT AVG(Price)
// FROM Products
// WHERE CategoryID = 1;



Use an Alias
Give the AVG column a name by using the AS keyword.
// Example
// Name the column "average price":
// SELECT AVG(Price) AS [average price]
// FROM Products;



The SQL LIKE Operator
The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
There are two wildcards often used in conjunction with the LIKE operator:
The percent sign % represents zero, one, or multiple characters
The underscore sign _ represents one, single character
You will learn more about wildcards in the next chapter.
// Example
// Select all customers that starts with the letter "a":
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a%'; 


Syntax
// SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;



The _ Wildcard
The _ wildcard represents a single character.
It can be any character or number, but each _ represents one, and only one, character.
// Example
// Return all customers from a city that starts with 'L' followed by one wildcard character, then 'nd' and then two wildcard characters:
// SELECT * FROM Customers
// WHERE city LIKE 'L_nd__'; 


The % Wildcard
The % wildcard represents any number of characters, even zero characters.
// Example
// Return all customers from a city that contains the letter 'L':
// SELECT * FROM Customers
// WHERE city LIKE '%L%'; 


Starts With
To return records that starts with a specific letter or phrase, add the % at the end of the letter or phrase.
// Example
// Return all customers that starts with 'La':
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'La%'; 
Tip: You can also combine any number of conditions using AND or OR operators.
Example
// Return all customers that starts with 'a' or starts with 'b':
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%'; 


Ends With
To return records that ends with a specific letter or phrase, add the % at the beginning of the letter or phrase.
// Example
// Return all customers that ends with 'a':
// SELECT * FROM Customers
// WHERE CustomerName LIKE '%a';
Tip: You can also combine "starts with" and "ends with":
Example
// Return all customers that starts with "b" and ends with "s":
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'b%s'; 




Contains
To return records that contains a specific letter or phrase, add the % both before and after the letter or phrase.
// Example
// Return all customers that contains the phrase 'or'
// SELECT * FROM Customers
// WHERE CustomerName LIKE '%or%';




Combine Wildcards
Any wildcard, like % and _ , can be used in combination with other wildcards.
// Example
// Return all customers that starts with "a" and are at least 3 characters in length:
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a__%'; 

Return all customers that have "r" in the second position:
// SELECT * FROM Customers
// WHERE CustomerName LIKE '_r%';


Without Wildcard

If no wildcard is specified, the phrase has to have an exact match to return a result.
// Example
// Return all customers from Spain:
// SELECT * FROM Customers
// WHERE Country LIKE 'Spain';




SQL Wildcard Characters
A wildcard character is used to substitute one or more characters in a string.
Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
// Example
// Return all customers that starts with the letter 'a':
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a%'; 



Symbol 	Description
% 	Represents zero or more characters
_ 	Represents a single character
[] 	Represents any single character within the brackets *
^ 	Represents any character not in the brackets *
- 	Represents any single character within the specified range *
{} 	Represents any escaped character **


Return all customers that ends with the pattern 'es':
SELECT * FROM Customers
WHERE CustomerName LIKE '%es';


Return all customers that contains the pattern 'mer':
SELECT * FROM Customers
WHERE CustomerName LIKE '%mer%';


Return all customers with a City starting with any character, followed by "ondon":
SELECT * FROM Customers
WHERE City LIKE '_ondon';


Return all customers with a City starting with "L", followed by any 3 characters, ending with "on":
SELECT * FROM Customers
WHERE City LIKE 'L___on';



The [] wildcard returns a result if any of the characters inside gets a match.
// Example
// Return all customers starting with either "b", "s", or "p":
// SELECT * FROM Customers
// WHERE CustomerName LIKE '[bsp]%';


Using the - Wildcard
The - wildcard allows you to specify a range of characters inside the [] wildcard.
// Example
// Return all customers starting with "a", "b", "c", "d", "e" or "f":
// SELECT * FROM Customers
// WHERE CustomerName LIKE '[a-f]%';



Combine Wildcards
Any wildcard, like % and _ , can be used in combination with other wildcards.
// Example
// Return all customers that starts with "a" and are at least 3 characters in length:
// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a__%'; 



The SQL IN Operator
The IN operator allows you to specify multiple values in a WHERE clause.
The IN operator is a shorthand for multiple OR conditions.
// Example
// Get your own SQL Server
// Return all customers from 'Germany', 'France', or 'UK'
// SELECT * FROM Customers
// WHERE Country IN ('Germany', 'France', 'UK');
Syntax
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);



NOT IN
By using the NOT keyword in front of the IN operator, you return all records that are NOT any of the values in the list.
// Example
// Return all customers that are NOT from 'Germany', 'France', or 'UK':
// SELECT * FROM Customers
// WHERE Country NOT IN ('Germany', 'France', 'UK');




IN (SELECT)
You can also use IN with a subquery in the WHERE clause.
With a subquery you can return all records from the main query that are present in the result of the subquery.
// Example
// Return all customers that have an order in the Orders table:
// SELECT * FROM Customers
// WHERE CustomerID IN (SELECT CustomerID FROM Orders);


Return all customers that have NOT placed any orders in the Orders table:
SELECT * FROM Customers
WHERE CustomerID NOT IN (SELECT CustomerID FROM Orders);





The SQL BETWEEN Operator
The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.
The BETWEEN operator is inclusive: begin and end values are included. 
// Example
// Selects all products with a price between 10 and 20:
// SELECT * FROM Products
// WHERE Price BETWEEN 10 AND 20;



Syntax
// SELECT column_name(s)
// FROM table_name
// WHERE column_name BETWEEN value1 AND value2;


NOT BETWEEN
To display the products outside the range of the previous example, use NOT BETWEEN:
// Example
// SELECT * FROM Products
// WHERE Price NOT BETWEEN 10 AND 20;


BETWEEN with IN
The following SQL statement selects all products with a price between 10 and 20. In addition, the CategoryID must be either 1,2, or 3:
// Example
// SELECT * FROM Products
// WHERE Price BETWEEN 10 AND 20
// AND CategoryID IN (1,2,3);




BETWEEN Text Values
The following SQL statement selects all products with a ProductName alphabetically between Carnarvon Tigers and Mozzarella di Giovanni:
// Example
// SELECT * FROM Products
// WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
// ORDER BY ProductName;


The following SQL statement selects all products with a ProductName between Carnarvon Tigers and Chef Anton's Cajun Seasoning:
// Example
// SELECT * FROM Products
// WHERE ProductName BETWEEN "Carnarvon Tigers" AND "Chef Anton's Cajun Seasoning"
// ORDER BY ProductName;


NOT BETWEEN Text Values
The following SQL statement selects all products with a ProductName not between Carnarvon Tigers and Mozzarella di Giovanni:
// Example
// SELECT * FROM Products
// WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
// ORDER BY ProductName;



BETWEEN Dates
The following SQL statement selects all orders with an OrderDate between '01-July-1996' and '31-July-1996':
Example
// SELECT * FROM Orders
// WHERE OrderDate BETWEEN #07/01/1996# AND #07/31/1996#;

OR:
Example
// SELECT * FROM Orders
// WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';


SQL Aliases
SQL aliases are used to give a table, or a column in a table, a temporary name.
Aliases are often used to make column names more readable.
An alias only exists for the duration of that query.
An alias is created with the AS keyword.
// Example
// SELECT CustomerID AS ID
// FROM Customers; 



AS is Optional
Actually, in most database languages, you can skip the AS keyword and get the same result:
Example
// SELECT CustomerID ID
// FROM Customers;
Syntax
// When alias is used on column:
// SELECT column_name AS alias_name
// FROM table_name;

When alias is used on table:
// SELECT column_name(s)
// FROM table_name AS alias_name;



Alias for Columns
The following SQL statement creates two aliases, one for the CustomerID column and one for the CustomerName column:
// Example
// SELECT CustomerID AS ID, CustomerName AS Customer
// FROM Customers; 


Using Aliases With a Space Character
If you want your alias to contain one or more spaces, like "My Great Products", surround your alias with square brackets or double quotes.
// Example
// Using [square brackets] for aliases with space characters:
// SELECT ProductName AS [My Great Products]
// FROM Products; 


Using "double quotes" for aliases with space characters:
// SELECT ProductName AS "My Great Products"
// FROM Products; 



Concatenate Columns
The following SQL statement creates an alias named "Address" that combine four columns (Address, PostalCode, City and Country):
// Example
// SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
// FROM Customers; 


Alias for Tables
The same rules applies when you want to use an alias for a table.
// Example
// Refer to the Customers table as Persons instead:
// SELECT * FROM Customers AS Persons;


It might seem useless to use aliases on tables, but when you are using more than one table in your queries, it can make the SQL statements shorter.
The following SQL statement selects all the orders from the customer with CustomerID=4 (Around the Horn). We use the "Customers" and "Orders" tables, and give them the table aliases of "c" and "o" respectively (Here we use aliases to make the SQL shorter):
// Example
// SELECT o.OrderID, o.OrderDate, c.CustomerName
// FROM Customers AS c, Orders AS o
// WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;



SQL JOIN

A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

We can create the following SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables:
// Example
// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;


Different Types of SQL JOINs

Here are the different types of the JOINs in SQL:

    (INNER) JOIN: Returns records that have matching values in both tables
    LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
    RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
    FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

INNER JOIN
The INNER JOIN keyword selects records that have matching values in both tables.
// Example
// Join Products and Categories with the INNER JOIN keyword:
// SELECT ProductID, ProductName, CategoryName
// FROM Products
// INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID; 
Note: The INNER JOIN keyword returns only rows with a match in both tables. Which means that if you have a product 
with no CategoryID, or with a CategoryID that is not present in the Categories table, that record would not be returned in the result.
SYNTAX
// SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;


Naming the Columns
It is a good practice to include the table name when specifying columns in the SQL statement.
// Example
// Specify the table names:
// SELECT Products.ProductID, Products.ProductName, Categories.CategoryName
// FROM Products
// INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;


JOIN is the same as INNER JOIN:
// SELECT Products.ProductID, Products.ProductName, Categories.CategoryName
// FROM Products
// JOIN Categories ON Products.CategoryID = Categories.CategoryID;



JOIN Three Tables
The following SQL statement selects all orders with customer and shipper information:
// Example
// SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
// FROM ((Orders
// INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
// INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID); 


SQL LEFT JOIN Keyword
The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.
// LEFT JOIN Syntax
// SELECT column_name(s)
// FROM table1
// LEFT JOIN table2
// ON table1.column_name = table2.column_name;



SQL LEFT JOIN Example
The following SQL statement will select all customers, and any orders they might have:
// Example
// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// ORDER BY Customers.CustomerName;
Note: The LEFT JOIN keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders).




SQL RIGHT JOIN Keyword
The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.
// RIGHT JOIN Syntax
// SELECT column_name(s)
// FROM table1
// RIGHT JOIN table2
// ON table1.column_name = table2.column_name;

SQL RIGHT JOIN Example
The following SQL statement will return all employees, and any orders they might have placed:
// Example
// SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
// FROM Orders
// RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
// ORDER BY Orders.OrderID;
Note: The RIGHT JOIN keyword returns all records from the right table (Employees), even if there are no matches in the left table (Orders).





SQL FULL OUTER JOIN Keyword
The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
Tip: FULL OUTER JOIN and FULL JOIN are the same.
// FULL OUTER JOIN Syntax
// SELECT column_name(s)
// FROM table1
// FULL OUTER JOIN table2
// ON table1.column_name = table2.column_name
// WHERE condition; 


SQL FULL OUTER JOIN Example
The following SQL statement selects all customers, and all orders:
// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
// ORDER BY Customers.CustomerName;


SQL Self Join
A self join is a regular join, but the table is joined with itself.
// Self Join Syntax
// SELECT column_name(s)
// FROM table1 T1, table1 T2
// WHERE condition;
T1 and T2 are different table aliases for the same table.


SQL Self Join Example
The following SQL statement matches customers that are from the same city:
// Example
// SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
// FROM Customers A, Customers B
// WHERE A.CustomerID <> B.CustomerID
// AND A.City = B.City
// ORDER BY A.City;



Subquery, Set Operators, Common Table Expression and PIVOT
1. Subqueries:
A subquery is a query nested inside another query, used to retrieve data
that will be used by the main query. Subqueries can be used in various 
parts of a SQL statement such as the WHERE clause, FROM clause, or SELECT clause.

Example 1: Using Subquery in WHERE clause
// -- Find employees with a salary greater than the average salary
// SELECT EmployeeName, Salary
// FROM Employees
// WHERE Salary > (SELECT AVG(Salary) FROM Employees);

Example 2: Using Subquery in SELECT clause
// -- Find employees and their department's average salary
// SELECT EmployeeName, Salary, 
//        (SELECT AVG(Salary) FROM Employees WHERE DepartmentID = E.DepartmentID) AS AvgDeptSalary
// FROM Employees E;



2. Set Operators:
Set operators combine the result sets of two or more SELECT statements.
Example: Using UNION to Combine Result Sets
// -- Combine the results of two SELECT statements
// SELECT FirstName, LastName FROM Employees
// UNION
// SELECT FirstName, LastName FROM Customers;



3. Common Table Expression (CTE):
A CTE is a named temporary result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement.
Example: Using CTE to Find Employees with High Salary
-- Define CTE
// WITH HighSalaryCTE AS (
//   SELECT EmployeeID, EmployeeName, Salary
//   FROM Employees
//   WHERE Salary > 50000
// )
-- Use CTE in the main query
// SELECT * FROM HighSalaryCTE;



4. PIVOT:
Pivot is used to rotate data from a vertical representation into a horizontal representation.
Example: Using PIVOT to Transform Data
-- Pivot the data to show sales by product category
// SELECT *
// FROM (
//   SELECT ProductCategory, SalesAmount
//   FROM Sales
// ) AS SourceTable
// PIVOT (
//   SUM(SalesAmount)
//   FOR ProductCategory IN ([Electronics], [Clothing], [Home Goods])
// ) AS PivotTable;



Modifying data in SQL involves using statements like INSERT, UPDATE, and DELETE 
to add, modify, or remove records from a table.
1. INSERT:
The INSERT statement is used to insert new records into a table.
Example 1: Insert a Single Record
// -- Insert a new employee into the Employees table
// INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID, Salary)
// VALUES (101, 'John Doe', 1, 60000);
Example 2: Insert Multiple Records
// -- Insert multiple employees into the Employees table
// INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID, Salary)
// VALUES (102, 'Jane Smith', 2, 55000),
//        (103, 'Bob Johnson', 1, 62000),
//        (104, 'Alice Williams', 3, 58000);

2. UPDATE:
The UPDATE statement is used to modify existing records in a table.
Example: Update Salary of Employees in a Department
// -- Update the salary of employees in Department 1
// UPDATE Employees
// SET Salary = Salary * 1.1
// WHERE DepartmentID = 1;

3. DELETE:
The DELETE statement is used to remove records from a table.
Example: Delete Employees with Low Salary
// -- Delete employees with a salary less than 50000
// DELETE FROM Employees
// WHERE Salary < 50000;

4. SELECT INTO:
The SELECT INTO statement is used to copy data from one table into a new table.
Example: Create a Backup of Employees Table
// -- Create a backup table with the same structure as Employees
// SELECT *
// INTO EmployeesBackup
// FROM Employees;

5. MERGE:
The MERGE statement is used to perform an INSERT, UPDATE, or DELETE operation based on a specified condition.
Example: Merge Data from Staging Table
// -- Merge data from StagingTable into Employees based on EmployeeID
// MERGE INTO Employees AS Target
// USING StagingTable AS Source
// ON Target.EmployeeID = Source.EmployeeID
// WHEN MATCHED THEN
//     UPDATE SET Target.Salary = Source.Salary
// WHEN NOT MATCHED THEN
//     INSERT (EmployeeID, EmployeeName, Salary)
//     VALUES (Source.EmployeeID, Source.EmployeeName, Source.Salary);


In SQL, a bulk operation refers to performing a large-scale operation on a set of data, 
typically involving the insertion, update, or deletion of multiple rows in a single statement. 
These operations are more efficient than performing individual row-by-row operations, as they 
reduce the number of transactions and can significantly improve performance.

Here are a few types of bulk operations commonly used in SQL:
1. **BULK INSERT:**
   - The `BULK INSERT` statement is used to insert large amounts of data from an external file into a table. It is a fast and efficient way to load data into a database.
//    ```sql
//    BULK INSERT TableName
//    FROM 'file_path'
//    WITH (
//       FIELDTERMINATOR = ',',
//       ROWTERMINATOR = '\n',
//       FIRSTROW = 2
//    );
//    ```

2. **BULK UPDATE:**
   - While SQL doesn't have a specific "BULK UPDATE" statement, you can achieve bulk updates using the standard `UPDATE` statement with conditions that affect multiple rows.
//    ```sql
//    UPDATE TableName
//    SET Column1 = Value1
//    WHERE SomeCondition;
//    ```

3. **BULK DELETE:**
   - Similar to bulk updates, bulk deletes involve using the `DELETE` statement with conditions to remove multiple rows in a single operation.
//    ```sql
//    DELETE FROM TableName
//    WHERE SomeCondition;
//    ```

4. **BULK COLLECT (PL/SQL):**
   - In PL/SQL (Procedural Language for SQL), the `BULK COLLECT` clause is used to fetch multiple rows at once into collections, 
   improving the performance of data retrieval in procedures or functions.
//    ```plsql
//    DECLARE
//       TYPE EmpNameList IS TABLE OF Employees.EmployeeName%TYPE;
//       empNames EmpNameList;
//    BEGIN
//       SELECT EmployeeName BULK COLLECT INTO empNames FROM Employees WHERE DepartmentID = 1;
//       -- Perform operations on empNames collection
//    END;
//    ```

Bulk operations are crucial for efficiently handling large datasets, and they help minimize the overhead associated with individual row operations. 
However, it's important to use them judiciously and be mindful of potential performance implications, especially in production environments.






































