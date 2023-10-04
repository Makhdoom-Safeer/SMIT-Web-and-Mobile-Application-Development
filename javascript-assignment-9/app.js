// Themes

function white()
{
    document.getElementById("text").style.backgroundColor = "white"
}

function violet()
{
    document.getElementById("text").style.backgroundColor = "violet"
}

function indigo()
{
    document.getElementById("text").style.backgroundColor = "indigo"
}

function blue()
{
    document.getElementById("text").style.backgroundColor = "blue"
}

function green()
{
    document.getElementById("text").style.backgroundColor = "green"
}

function yellow()
{
    document.getElementById("text").style.backgroundColor = "yellow"
}

function orange()
{
    document.getElementById("text").style.backgroundColor = "orange"
}

function red()
{
    document.getElementById("text").style.backgroundColor = "red"
}


// Output
function post()
{
    if (document.getElementById("text").value !== "")
    {
        document.getElementById("app").style.display = "none"
        document.getElementById("output").style.backgroundColor = document.getElementById("text").style.backgroundColor
        document.getElementById("output-text").innerHTML = document.getElementById("text").value
    }
}