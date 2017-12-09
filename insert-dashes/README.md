# 301-code-wars
insert-dashes
code wars repo

Insert Dashes
Problem domain: Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Our solution was to use the num to string function to convert the number to a string. Then we created a variable to create a new empty array. Purpose of the array is to push the '-' into the new array depending on whether the previous number and successive number was odd.
