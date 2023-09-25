var ryu_position = 0
var ken_position = 1100

function moveemnt()
{
    
    // Ryu Forward
    if (event.keyCode === 68 && ryu_position < 1100)
    {
        var character = document.getElementById('ryu')
        ryu_position = ryu_position + 10
        character.style.left = ryu_position + 'px'
        character.src = 'images/Ryu Walk Forward.gif'
    }

    // Ryu Backwards
    if (event.keyCode === 65 && ryu_position > 10)
    {
        var character = document.getElementById('ryu')
        ryu_position = ryu_position - 10
        character.style.left = ryu_position + 'px'
        character.src = 'images/Ryu Walk Back.gif'
    }

    // Ryu Crouch
    if (event.keyCode === 83)
    {
        var character = document.getElementById('ryu')
        character.src = 'images/Ryu Crouch.gif'
    }
    
    // Ken Forward
    if (event.keyCode === 37 && ken_position > 10)
    {
        var character = document.getElementById('ken')
        ken_position = ken_position - 10
        character.style.left = ken_position + 'px'
        character.src = 'images/Ken Walk Forward.gif'
    }

    // Ken Backwards
    if (event.keyCode === 39 && ken_position < 1100)
    {
        var character = document.getElementById('ken')
        ken_position = ken_position + 10
        character.style.left = ken_position + 'px'
        character.src = 'images/Ken Walk Back.gif'
    }

    // Ken Crouch
    if (event.keyCode === 40)
    {
        var character = document.getElementById('ken')
        character.src = 'images/Ken Crouch.gif'
    }

}

function idle()
{
    var character = document.getElementById('ryu')
    character.src = 'images/Ryu Stand.gif'
    var character = document.getElementById('ken')
    character.src = 'images/Ken Stand.gif'

    // Ryu Jump
    if (event.keyCode === 87)
    {
        var character = document.getElementById('ryu')
        character.src = 'images/Ryu Jump.gif'
        setTimeout(function () {
            idle()
        }, 500)
    }

    // Ryu Taunt
    if(event.keyCode === 32)
    {
        var character = document.getElementById('ryu')
        character.src = 'images/Ryu Taunt.gif'
        setTimeout(function () {
            idle()
        }, 850)
    }

    // Ken Jump
    if (event.keyCode === 38)
    {
        var character = document.getElementById('ken')
        character.src = 'images/Ken Jump.gif'
        setTimeout(function () {
            idle()
        }, 500)
    }

    // Ken Taunt
    if(event.keyCode === 13)
    {
        var character = document.getElementById('ken')
        character.src = 'images/Ken Taunt.gif'
        setTimeout(function () {
            idle()
        }, 633)
    }
}

window.onkeydown = moveemnt;
window.onkeyup = idle;
