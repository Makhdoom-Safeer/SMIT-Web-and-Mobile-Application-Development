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
    dice = Math.floor((dice * 6) + 1)
    alert(dice)
}

function task_5()
{
    var coin = Math.random()
    coin = Math.floor((coin * 2) + 1)

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
    random_number = Math.floor((random_number * 100) + 1)

    alert("random number between 1 & 100:" + " " + random_number)
}