// Themes

function white()
{
    document.getElementById("text").style.backgroundColor = "white"
    document.getElementById("text").style.color = "black"
}

function violet()
{
    document.getElementById("text").style.backgroundColor = "violet"
    document.getElementById("text").style.color = "white"
}

function indigo()
{
    document.getElementById("text").style.backgroundColor = "indigo"
    document.getElementById("text").style.color = "white"
}

function blue()
{
    document.getElementById("text").style.backgroundColor = "blue"
    document.getElementById("text").style.color = "white"
}

function green()
{
    document.getElementById("text").style.backgroundColor = "green"
    document.getElementById("text").style.color = "white"
}

function yellow()
{
    document.getElementById("text").style.backgroundColor = "yellow"
    document.getElementById("text").style.color = "black"
}

function orange()
{
    document.getElementById("text").style.backgroundColor = "orange"
    document.getElementById("text").style.color = "white"
}

function red()
{
    document.getElementById("text").style.backgroundColor = "red"
    document.getElementById("text").style.color = "white"
}

// Output
function post()
{
    var text = document.getElementById("text").value
    var text_color = document.getElementById("text").style.color
    var text_background_color = document.getElementById("text").style.backgroundColor
    
    if (text !== "")
    {
        document.getElementById("output-container").innerHTML += 
        `
        <div class="col-12" id="output">
            <div id="user">
                <img src="images/user.png" alt="" width="60px" id="user-image">
                <p id="user-name">Makhdoom Safeer Muhammad</p>
            </div>
        
            <div id="output-text">
                <p style="background-color: ${text_background_color}; color: ${text_color}">${text}</p>
            </div>
        </div>
        `
    }
}