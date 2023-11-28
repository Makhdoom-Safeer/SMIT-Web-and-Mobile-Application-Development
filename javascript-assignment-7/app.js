if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

// Numbers

function one()
{
    document.getElementById("screen").value += "1"
}

function two()
{
    document.getElementById("screen").value += "2"
}

function three()
{
    document.getElementById("screen").value += "3"
}

function four()
{
    document.getElementById("screen").value += "4"
}

function five()
{
    document.getElementById("screen").value += "5"
}

function six()
{
    document.getElementById("screen").value += "6"
}

function seven()
{
    document.getElementById("screen").value += "7"
}

function eight()
{
    document.getElementById("screen").value += "8"
}

function nine()
{
    document.getElementById("screen").value += "9"
}

function zero()
{
    document.getElementById("screen").value += "0"
}

function double_zero()
{
    document.getElementById("screen").value += "00"
}

// Operations

function addition()
{
    var screen_length = document.getElementById("screen").value.length
    if (
        document.getElementById("screen").value[screen_length - 1] === "+" || 
        document.getElementById("screen").value[screen_length - 1] === "-" ||
        document.getElementById("screen").value[screen_length - 1] === "*" ||
        document.getElementById("screen").value[screen_length - 1] === "/" ||
        document.getElementById("screen").value[screen_length - 1] === ".")
    {
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1) + "+"
    }

    else if (document.getElementById("screen").value === "")
    {
        document.getElementById("screen").value += ""
    }

    else
    {
        document.getElementById("screen").value += "+"
    }
}

function subtraction()
{
    var screen_length = document.getElementById("screen").value.length
    if (
        document.getElementById("screen").value[screen_length - 1] === "+" || 
        document.getElementById("screen").value[screen_length - 1] === "-" || 
        document.getElementById("screen").value[screen_length - 1] === "*" || 
        document.getElementById("screen").value[screen_length - 1] === "/" ||
        document.getElementById("screen").value[screen_length - 1] === ".")
    {
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1) + "-"
    }

    else if (document.getElementById("screen").value === "")
    {
        document.getElementById("screen").value += ""
    }

    else
    {
        document.getElementById("screen").value += "-"
    }
}

function multiplication()
{
    var screen_length = document.getElementById("screen").value.length
    if (
        document.getElementById("screen").value[screen_length - 1] === "+" || 
        document.getElementById("screen").value[screen_length - 1] === "-" ||
        document.getElementById("screen").value[screen_length - 1] === "*" ||
        document.getElementById("screen").value[screen_length - 1] === "/" ||
        document.getElementById("screen").value[screen_length - 1] === ".")
    {
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1) + "*"
    }

    else if (document.getElementById("screen").value === "")
    {
        document.getElementById("screen").value += ""
    }

    else
    {
        document.getElementById("screen").value += "*"
    }
}

function division()
{
    var screen_length = document.getElementById("screen").value.length
    if (
        document.getElementById("screen").value[screen_length - 1] === "+" || 
        document.getElementById("screen").value[screen_length - 1] === "-" ||
        document.getElementById("screen").value[screen_length - 1] === "*" ||
        document.getElementById("screen").value[screen_length - 1] === "/" ||
        document.getElementById("screen").value[screen_length - 1] === ".")
    {
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1) + "/"
    }

    else if (document.getElementById("screen").value === "")
    {
        document.getElementById("screen").value += ""
    }

    else
    {
        document.getElementById("screen").value += "/"
    }
}

function decimal()
{
    var screen_length = document.getElementById("screen").value.length
    if (
        document.getElementById("screen").value[screen_length - 1] === "+" || 
        document.getElementById("screen").value[screen_length - 1] === "-" ||
        document.getElementById("screen").value[screen_length - 1] === "*" ||
        document.getElementById("screen").value[screen_length - 1] === "/" ||
        document.getElementById("screen").value[screen_length - 1] === ".")
    {
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1) + "."
    }

    else
    {
        document.getElementById("screen").value += "."
    }
}

// Screen operations

function clr()
{
    document.getElementById("screen").value = ""
}

function del()
{
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1)
}

function answer()
{
    var screen_length = document.getElementById("screen").value.length
    for (var i = 0; i < screen_length; i++)
    {
        if (
            document.getElementById("screen").value[screen_length - 1] === "+" || 
            document.getElementById("screen").value[screen_length - 1] === "-" ||
            document.getElementById("screen").value[screen_length - 1] === "*" ||
            document.getElementById("screen").value[screen_length - 1] === "/")
        {
            document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1)
        }
    }
    document.getElementById("screen").value = eval(document.getElementById("screen").value)
}