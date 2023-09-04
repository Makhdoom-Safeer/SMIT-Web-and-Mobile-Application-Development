function task_1()
{
    var city = prompt("Enter city")

    if (city === "Karachi")
    {
        alert("Welcome to city of lights")
    }
}

function task_2()
{
    var gender = prompt("Enter gender")
    
    if (gender === "Male")
    {
        alert("Good Morning Sir")
    }

    else if (gender === "Female")
    {
        alert("Good Morning Ma’am")
    }
}

function task_3()
{
    var color = prompt("Enter color")
    
    if (color === "Red")
    {
        alert("Must Stop")
    }

    else if (color === "Yellow")
    {
        alert("Ready to move")
    }

    else if (color === "Green")
    {
        alert("Move now")
    }
}

function task_4()
{
    var fuel = prompt("Enter remaining fuel")

    if (fuel < 0.25)
    {
        alert("Please refill the fuel in your car")
    }

    else
    {
        alert("No need to worry")
    }
}

function task_5()
{
    // a
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }

    // b
    var b = 82;
    if (b++ === 83)
    {
        alert("given condition for variable b is true");
    }

    // c
    var c = 12;
    if (c++ === 13)
    {
        alert("condition 1 is true");
    }

    if (c === 13)
    {
        alert("condition 2 is true");
    }

    if (++c < 14)
    {
        alert("condition 3 is true");
    }

    if(c === 14)
    {
        alert("condition 4 is true");
    }

    // d
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost)
    {
        alert("The cost equals");
    }

    // e
    if (true)
    {
        alert("True");
    }

    if (false)
    {
        alert("False");
    }

    // f
    if("car" < "cat")
    {
        alert("car is smaller than cat");
    }

}

function task_6()
{
    var marks_obtained = prompt("Enter marks obtained")
    var total_marks = prompt("Enter total marks")
    percentage = (marks_obtained / total_marks) * 100
    
    if (percentage >= 80)
    {
        document.write("Total mark: ", total_marks, "<br>")
        document.write("Mark obtained: ", marks_obtained, "<br>")
        document.write("Percentage: ", percentage, "<br>")
        document.write("Grade: A-one", "<br>")
        document.write("Remarks: Excellent", "<br>")
    }

    else if (percentage >= 70)
    {
        document.write("Total mark: ", total_marks, "<br>")
        document.write("Mark obtained: ", marks_obtained, "<br>")
        document.write("Percentage: ", percentage, "<br>")
        document.write("Grade: A", "<br>")
        document.write("Remarks: Good", "<br>")
    }

    else if (percentage >= 60)
    {
        document.write("Total mark: ", total_marks, "<br>")
        document.write("Mark obtained: ", marks_obtained, "<br>")
        document.write("Percentage: ", percentage, "<br>")
        document.write("Grade: B", "<br>")
        document.write("Remarks: You need to improve", "<br>")
    }

    else
    {
        document.write("Total mark: ", total_marks, "<br>")
        document.write("Mark obtained: ", marks_obtained, "<br>")
        document.write("Percentage: ", percentage, "<br>")
        document.write("Grade: Fail", "<br>")
        document.write("Remarks: Sorry", "<br>")
    }
}

function task_7()
{
    var guess_secret_number = prompt("Enter secret number")
    guess_secret_number = parseInt(guess_secret_number)
    var secret_number = 6

    if (guess_secret_number === secret_number)
    {
        alert("Bingo! Correct answer")
    }

    else if (++guess_secret_number === secret_number)
    {
        alert("Close enough to the correct answer")
    }

    else
    {
        alert("Try again")
    }
}

function task_8()
{
    var number = prompt("Enter number")
    number = parseInt(number)

    if (number%3 === 0)
    {
        alert("Number is divisible by 3")
    }

    else
    {
        alert("Number is not divisible by 3")
    }
}

function task_9()
{
    var number = prompt("Enter number")
    number = parseInt(number)

    if (number%2 === 0)
    {
        alert("Number is even")
    }

    else
    {
        alert("Number is odd")
    }
}

function task_10()
{
    var temperature = prompt("Enter temperature")
    temperature = parseInt(temperature)

    if (temperature > 40)
    {
        alert("It is too hot outside.")
    }

    else if (temperature > 30)
    {
        alert("The Weather today is Normal.")
    }

    else if (temperature > 20)
    {
        alert("Today's Weather is cool.")
    }

    else if (temperature > 10)
    {
        alert("OMG! Today's weather is so Cool.")
    }

}

function task_11()
{
    var number_1 = prompt("First number")
    number_1 = parseInt(number_1)
    var number_2 = prompt("Second number")
    number_2 = parseInt(number_2)
    var operation = prompt("Operation (+, -, *, /, %)")

    if (operation === "+")
    {
        result = number_1 + number_2
        alert("The result is: " + result)
    }

    else if (operation === "-")
    {
        result = number_1 - number_2
        alert("The result is: " + result)
    }
    
    else if (operation === "*")
    {
        result = number_1 * number_2
        alert("The result is: " + result)
    }

    else if (operation === "/")
    {
        result = number_1 / number_2
        alert("The result is: " + result)
    }

    else if (operation === "%")
    {
        result = number_1 % number_2
        alert("The result is: " + result)
    }

    else
    {
        alert("Invalid operation")
    }
}