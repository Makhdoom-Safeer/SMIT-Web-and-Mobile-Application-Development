function task_1()
{
    var a = prompt("Enter a number")
    a = parseInt(a)
    document.write("Result<br>")
    document.write("The value of a is: ", a, "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of ++a is: ", ++a, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of a++ is: ", a++, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of ++a is: ", --a, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of ++a is: ", a--, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
}

function task_2()
{
    var a = 2
    var b = 1
    result = --a - --b + ++b + b--;
    document.write("a is: ", a, "<br>")
    document.write("b is: ", b, "<br>")
    document.write("result is: ", result, "<br>")
}

function task_3()
{
    var name = prompt("Enter your name")
    alert("Welcome " + name)
}

function task_4()
{
    var number = prompt("Enter number: ")
    number = parseInt(number)

    if number >== 0()
    {

    }
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

function task_5()
{
    console.log("Hello... I can run JS through my web browser's console")
}