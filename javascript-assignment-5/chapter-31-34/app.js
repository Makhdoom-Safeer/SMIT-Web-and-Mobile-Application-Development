function task_1()
{
    var date = new Date()
    alert(date)
}

function task_2()
{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var date = new Date()
    var current_month = date.getMonth()
    alert(months[current_month])
}

function task_3()
{
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sad"]
    var date = new Date()
    var current_day = date.getDay()
    alert("Today is" + " " + days[current_day])
}

function task_4()
{
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sad"]
    var date = new Date()
    var current_day = date.getDay()
    if (days[current_day] === "Sun" || days[current_day] === "Sat")
    {
        alert("Its Fun day")
    }
}

function task_5()
{
    var date = new Date()
    var current_day = date.getDate()

    if (current_day <= 15)
    {
        alert("First fifteen days of the month")
    }

    else
    {
        alert("Last days of the month")
    }
}

function task_6()
{
   var date = new Date()
   document.write("Current Date:" + " " + date + "<br>")
   document.write("Elapsed milliseconds since January 1, 1970:" + " " + date.getTime() + "<br>")
   document.write("Elapsed minutes since January 1, 1970:" + " " + ((date.getTime()) / 60000) + "<br>")
}

function task_7()
{
    var date = new Date()
    var hours = date.getHours()

    if (hours <= 11)
    {
        alert("Its AM")
    }

    else
    {
        alert("Its PM")
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

function task_16()
{
    
}

function task_17()
{
    
}