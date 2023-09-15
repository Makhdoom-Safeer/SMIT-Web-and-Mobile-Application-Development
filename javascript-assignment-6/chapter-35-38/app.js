function task_1()
{
    var date = new Date()
    alert(date)
}

function task_2()
{
    var first_name = prompt("Enter first name")
    var last_name = prompt("Enter last name")
    alert("Welcome," + " " + first_name + " " + last_name)
}

function task_3()
{
    var first_number = +prompt("Enter first number")
    var second_number = +prompt("Enter second number")
    alert("Sum of two numbers is" + " " + (first_number + second_number))
}

function task_4()
{
    var first_number = +prompt("Enter first number")
    var second_number = +prompt("Enter second number")
    var operation = prompt("Enter operation")

    if (operation === "+")
    {
        result = first_number + second_number
        alert("The result is" + " " + result)
    }

    else if (operation === "-")
    {
        result = first_number - second_number
        alert("The result is" + " " + result)
    }

    else if (operation === "*")
    {
        result = first_number * second_number
        alert("The result is" + " " + result)
    }

    else if (operation === "/")
    {
        result = first_number / second_number
        alert("The result is" + " " + result)
    }

    else if (operation === "%")
    {
        result = first_number % second_number
        alert("The result is" + " " + result)
    }

    else
    {
        alert("Invalid operation")
    }
}

function task_5()
{
    var number = +prompt("Enter a number")
    alert("Square of the number is" + " " + square(number))
}

function square(n)
{
    return  n*n
}

function task_6()
{
    var input = +prompt("Enter number")
    factorial = input
    
    for (var i = factorial; i >= 2; i--)
    {
        factorial = factorial * (i - 1)
    }

    alert("Factorial of" + " " + input + " " + "is" + " " + factorial)
}

function task_7()
{
    var start_point = +prompt("Enter start point")
    var end_point = +prompt("Enter end point")

    for (i = start_point; i <= end_point; i++)
    {
        document.write(i + "," + " ")
    }
}

function task_8()
{
    
}

function task_9()
{
    
}

function task_10()
{
    
}

function task_11()
{
    
}

function task_12()
{
    
}

function task_13()
{
    
}

function task_14()
{
    
}