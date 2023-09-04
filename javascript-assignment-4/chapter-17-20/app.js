function task_1()
{
    var multi_array = [[], [], []]
    document.write(multi_array)
}

function task_2()
{
    var multi_array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
    document.write(multi_array)
    console.log(multi_array)
}

function task_3()
{
    for (var i = 1; i <= 10; i++)
    {
        document.write(i + "<br>")
    }
}

function task_4()
{
    var number = +prompt("Enter a number to show its multiplication table")
    var length = +prompt("Enter length of multiplication table")
    document.write("Table of " + number + "<br>")

    for (var i = 1; i <= length; i++)
    {
        document.write(number + " *  " + i + " = " + number*i + "<br>")
    }
    
}

function task_5()
{
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

    for (var i = 0; i < fruits.length; i++)
    {
        document.write(fruits[i] + "<br>")
    }
    
    document.write("<br>")

    for (var i = 0; i < fruits.length; i++)
    {
        document.write("Element at index " + i + " is " + fruits[i] + "<br>")
    }

}

function task_6()
{
    document.write("<b>Counting:</b>")
    document.write("<br><br>")
    for (var i = 1; i <= 15; i++)
    {
        document.write(i + ", ")
    }
    document.write("<br><br>")

    document.write("<b>Reverse counting:</b>")
    document.write("<br><br>")
    for (var i = 10; i >= 1; i--)
    {
        document.write(i + ", ")
    }
    document.write("<br><br>")

    document.write("<b>Even:</b>")
    document.write("<br><br>")
    for (var i = 0; i <= 20; i+=2)
    {
        document.write(i + ", ")
    }
    document.write("<br><br>")

    document.write("<b>Odd:</b>")
    document.write("<br><br>")
    for (var i = 1; i <= 20; i+=2)
    {
        document.write(i + ", ")
    }
    document.write("<br><br>")

    document.write("<b>Series:</b>")
    document.write("<br><br>")
    for (var i = 2; i <= 20; i+=2)
    {
        document.write(i + "k, ")
    }
    document.write("<br><br>")
}

function task_7()
{
    var A = ["cake", "apple pie", "cookie", "chips", "patties"]

    var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

    for (var i = 0; i <= A.length; i++)
    {
        if (A[i] === item)
        {
            alert(item + " is available at index " + i + " in our bakery")
            break
        }

        if (i === A.length)
        {
            alert("We are sorry. " + item + " is not available in our bakery")
        }

    }
}

function task_10()
{
    for (var i = 1; i <= 20; i++)
    {
        document.write(i*5 + ", ")
    }
}