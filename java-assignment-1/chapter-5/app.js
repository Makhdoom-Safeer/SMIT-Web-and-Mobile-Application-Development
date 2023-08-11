function task_1()
{
    var first_number = prompt("Enter first number: ")
    first_number = parseInt(first_number)
    var second_number = prompt("Enter second number: ")
    second_number = parseInt(second_number)
    var result = first_number + second_number
    document.write("Sum of " + first_number + " and " + second_number + " is " + result)
}

function task_2()
{
    var first_number = prompt("Enter first number: ")
    first_number = parseInt(first_number)
    var second_number = prompt("Enter second number: ")
    second_number = parseInt(second_number)
    document.write("The result of subtraction is: " + (first_number-second_number) + "<br>")
    document.write("The result of multiplication is: " + (first_number*second_number) + "<br>")
    document.write("The result of division is: " + (first_number/second_number) + "<br>")
    document.write("The result of division modulus is: " + (first_number%second_number) + "<br>")
}

function task_3()
{
    var variable
    document.write("Value after variable declaration is: " + variable + "<br>")
    variable = 5
    document.write("Initial value: " + variable + "<br>")
    ++variable
    document.write("Value after increment is: " + variable + "<br>")
    variable = variable + 7
    document.write("Value after addition is: " + variable + "<br>")
    --variable
    document.write("Value after decrement is: " + variable + "<br>")
    document.write("The remainder is : " + variable%3 + "<br>")
}

function task_4()
{
    var ticket_price = 600
    var number_of_tickets = 5
    var total_cost = ticket_price * number_of_tickets
    document.write("Total cost to buy 5 tickets to a movie is " + total_cost + "PKR<br>")
}

function task_5()
{
    var number = prompt("Enter number: ")
    number = parseInt(number)
    document.write("Table of " + number + "<br>")
    document.write(number + " * 1 = " + number*1 + "<br>")
    document.write(number + " * 2 = " + number*2 + "<br>")
    document.write(number + " * 3 = " + number*3 + "<br>")
    document.write(number + " * 4 = " + number*4 + "<br>")
    document.write(number + " * 5 = " + number*5 + "<br>")
    document.write(number + " * 6 = " + number*6 + "<br>")
    document.write(number + " * 7 = " + number*7 + "<br>")
    document.write(number + " * 8 = " + number*8 + "<br>")
    document.write(number + " * 9 = " + number*9 + "<br>")
    document.write(number + " * 10 = " + number*10 + "<br>")
}

function task_6()
{
    var temperature_in_celsius = prompt("Enter temperature in Celsius: ")
    temperature_in_celsius = parseInt(temperature_in_celsius)
    var temperature_in_fahrenheit = ((temperature_in_celsius * 9) / 5) + 32
    document.write(temperature_in_celsius+"oC is "+temperature_in_fahrenheit+"oF<br>")
    var temperature_in_fahrenheit = prompt("Enter temperature in Fahrenheit: ")
    var temperature_in_celsius = (temperature_in_fahrenheit - 32) * (5 / 9)
    document.write(temperature_in_fahrenheit+"oF is "+temperature_in_celsius+"oC<br>")
}

function task_7()
{
    document.write("<h1>Shopping Cart</h1>")
    var item_1_price = prompt("Enter price of item 1: ")
    item_1_price = parseInt(item_1_price)
    var item_2_price = prompt("Enter price of item 2: ")
    item_2_price = parseInt(item_2_price)
    var item_1_quantity = prompt("Enter quantity of item 1: ")
    item_1_quantity = parseInt(item_1_quantity)
    var item_2_quantity = prompt("Enter quantity of item 2: ")
    item_2_quantity = parseInt(item_2_quantity)
    var shipping_charges = prompt("Enter shipping charges: ")
    shipping_charges = parseInt(shipping_charges)
    document.write("Price of item 1 is " + item_1_price + "<br>")
    document.write("Ordered quantity of item 1 is " + item_1_quantity + "<br>")
    document.write("Price of item 2 is " + item_2_price + "<br>")
    document.write("Ordered quantity of item 2 is " + item_2_quantity + "<br>")
    document.write("Shipping charges is " + shipping_charges + "<br>")
    var total_cost = (item_1_price * item_1_quantity) + (item_2_price * item_2_quantity) + (shipping_charges)
    document.write("Total cost of your order is " + total_cost + "<br>")
}

function task_8()
{
    document.write("<h1>Marks Sheet</h1>")
    var total_marks = prompt("Enter total marks")
    total_marks = parseInt(total_marks)
    var marks_obtained = prompt("Enter marks obtained")
    marks_obtained = parseInt(marks_obtained)
    percentage = (marks_obtained / total_marks) * 100
    document.write("Total marks: " + total_marks + "<br>")
    document.write("Marks obtained: " + marks_obtained + "<br>")
    document.write("Percentage: " + percentage + "%<br>")
}

function task_9()
{
    document.write("<h1>Currency in PKR</h1>")
    var us_dollars = 10
    var saudi_riyals = 25
    currency_in_PKR = (us_dollars * 104.80) + (saudi_riyals * 28)
    document.write("Total Currency in PKR: " + currency_in_PKR + "<br>")
}

function task_10()
{
    var number = prompt("Enter a number: ")
    number = parseInt(number)
    var new_number = ((number + 5) * 10) / 2
    document.write("Value of " + number + " after adding 5, multiplying by 10 &  dividing by 2 is "+ new_number + " <br>")
}

function task_11()
{
    document.write("<h1>Age Calculator</h1>")
    var current_year = prompt("Enter Current Year")
    current_year = parseInt(current_year)
    var birth_year = prompt("Enter Birth Year")
    birth_year = parseInt(birth_year)
    var age = current_year - birth_year
    document.write("Current Year: " + current_year + "<br>")
    document.write("Birth Year: " + birth_year + "<br>")
    document.write("Your Age is: " + age + "<br>")
}

function task_12()
{
    document.write("<h1>The Geometrizer</h1>")
    var radius = prompt("Enter radius of circle")
    radius = parseInt(radius)
    document.write("Radius of circle: " + radius + "<br>")
    circumference = 2 * 3.142 * radius
    document.write("The circumference is: " + circumference + "<br>")
    area = 3.142 * ((radius)**2)
    document.write("The area is: " + area + "<br>")
}

function task_13()
{
    document.write("<h1>The Lifetime Supply Calculator</h1>")
    var snack = "Chocalate chip"
    var current_age = 15
    var maximum_age = 65
    var snacks_per_day = 3
    document.write("Favorite Snack: " + snack + "<br>")
    document.write("Current age: " + current_age + "<br>")
    document.write("Estimated Maximum Age: " + maximum_age + "<br>")
    document.write("Amount of snacks per day: " + snacks_per_day + "<br>")
    document.write("You will need " + ((maximum_age - current_age)*snacks_per_day) + " " + snack + " to last you until the ripe old age "+maximum_age+"<br>")
}