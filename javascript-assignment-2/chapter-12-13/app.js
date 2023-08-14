function task_1()
{
    var character = prompt("Enter a character")
    character_code = character.charCodeAt(0)

    if (character_code >= 65 && character_code <= 90)
    {
        alert("Character is a uppercase letter")
    }

    else if (character_code >= 97 && character_code <= 122)
    {
        alert("Character is a lowercase letter")
    }

    else
    {
        alert("Plz enter a character")
    }
}

function task_2()
{
    var first_number = prompt("Enter first number")
    first_number = parseInt(first_number)
    var second_number = prompt("Enter second number")
    second_number = parseInt(second_number)
    
    if (first_number > second_number)
    {
        alert(first_number + " " + "is larger")
    }

    else if (first_number < second_number)
    {
        alert(second_number + " " + "is larger")
    }

    else if (first_number === second_number)
    {
        alert("Both numbers are equal")
    }

    else
    {
        alert("Plz enter integers only")
    }
}

function task_3()
{
    var number = prompt("Enter number")
    number = parseInt(number)

    if (number > 0)
    {
        alert("Number is positive")
    }

    else if (number < 0)
    {
        alert("Number is negative")
    }

    else if (number === 0)
    {
        alert("Number is zero")
    }

    else
    {
        alert("Plz enter a number")
    }
}

function task_4()
{
    var character = prompt("Enter a character")
    
    if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U" || character === "a" || character === "e" || character === "i" || character === "o" || character === "u")
    {
        alert("Character is a vowel")
    }

    else
    {
        alert("Character is not a vowel")
    }
}

function task_5()
{
    var correct_password = "Pakistan"
    var entered_password = prompt("Enter password")

    if (entered_password === "")
    {
        alert("Please enter your password")
    }

    else if (correct_password === entered_password)
    {
        alert("Correct! The password you entered matches the original password")
    }

    else
    {
        alert("Incorrect password")
    }
}

function task_6()
{
    var greeting;
    var hour = 13;

    if (hour < 18)
    {
        greeting = "Good day";
        alert(greeting)
    }

    else
    {
        greeting = "Good evening";
        alert(greeting)
    }
    
}

function task_7()
{
    var time = prompt("Enter time in 24 hour format")
    time = parseInt(time)

    if (time >= 0000 && time < 1200)
    {
        alert("Good morning!")
    }

    else if (time >= 1200 && time < 1700)
    {
        alert("Good afternoon!")
    }

    else if (time >= 1700 && time < 2100)
    {
        alert("Good evening!")
    }

    else if (time >= 2100 && time < 2359)
    {
        alert("Good night!")
    }
}