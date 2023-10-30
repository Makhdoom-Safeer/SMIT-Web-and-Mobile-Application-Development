
function submit_data()
{
    event.preventDefault()
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value
    var password = document.getElementById("password").value
    var confirm_password = document.getElementById("confirm_password").value
    
    if (name === "")
    {
        alert("Please enter name")
    }

    else if (email === "")
    {
        alert("Please enter email")
    }

    else if (number === "")
    {
        alert("Please enter number")
    }

    else if (password === "")
    {
        alert("Please enter password")
    }

    else if (confirm_password === "" && password !== confirm_password || confirm_password !== "" && password !== confirm_password )
    {
        alert("Password Mismatched")
    }

    else
    {
        var userData = {
            name: name,
            email: email,
            number: number,
            password: password,
            confirm_password: confirm_password,
        }
    
        alert("Registered Successfully!")
    
        localStorage.setItem("userdata", JSON.stringify(userData))
    
        // var getUserData = JSON.parse(localStorage.getItem("userdata"))
        // console.log(getUserData)
    }
}