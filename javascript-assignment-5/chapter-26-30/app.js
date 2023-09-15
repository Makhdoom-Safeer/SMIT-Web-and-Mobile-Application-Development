function task_1()
{
    var number = +prompt()

    document.write("number:" + " " + number + "<br>")

    var round_value = Math.round(number)
    document.write("round off value:" + " " + round_value + "<br>")

    var floor_value = Math.floor(number)
    document.write("floor value:" + " " + floor_value + "<br>")

    var ceil_value = Math.ceil(number)
    document.write("ceil value:" + " " + ceil_value + "<br>")
}

function task_2()
{
    var number = +prompt()

    document.write("number:" + " " + number + "<br>")

    var round_value = Math.round(number)
    document.write("round off value:" + " " + round_value + "<br>")

    var floor_value = Math.floor(number)
    document.write("floor value:" + " " + floor_value + "<br>")

    var ceil_value = Math.ceil(number)
    document.write("ceil value:" + " " + ceil_value + "<br>")
}

function task_3()
{
    var number = +prompt()
    var absolute_value = Math.abs(number)
    document.write("The absolute value of" + " " + number + " " + "is" + " " + absolute_value + "<br>")
}

function task_4()
{
    var dice = Math.random()
    dice = Math.ceil((dice * 6))
    alert("random dice value:" + " " + dice)
}

function task_5()
{
    var coin = Math.random()
    coin = Math.ceil((coin * 2))

    if (coin === 2)
    {
        alert(coin + "\n" + "random coin value: Head")
    }

    else
    {
        alert(coin + "\n" + "random coin value: Tails")
    }
    
}

function task_6()
{
    var random_number = Math.random()
    random_number = Math.ceil((random_number * 100))

    alert("random number between 1 & 100:" + " " + random_number)
}


// Incomplete
function task_7()
{
    
}

function task_8()
{
    var random_value = Math.ceil(Math.random() * 10)
    var user_value = +prompt("Enter a number between 1 and 10")

    if (user_value === random_value)
    {
        alert("Congratulations!")
    }

    else
    {
        alert("Try again!")
    }
}