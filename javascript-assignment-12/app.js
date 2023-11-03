
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
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Please Enter Name',
                icon: 'error'
            }
        )
    }

    else if (email === "")
    {
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Please Enter Email',
                icon: 'error'
            }
        )
    }

    else if (number === "")
    {
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Please Enter Number',
                icon: 'error'
            }
        )
    }

    else if (password === "")
    {
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Please Enter Password',
                icon: 'error'
            }
        )
    }

    else if (confirm_password === "" && password !== confirm_password || confirm_password !== "" && password !== confirm_password )
    {
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Password Mismatched',
                icon: 'error'
            }
        )
    }

    else
    {
        
        Swal.fire
        (
            {
                title: 'Success',
                text: 'Registered Successfully!',
                icon: 'success'
            }
        )

        var userData = {
            name: name,
            email: email,
            number: number,
            password: password,
            confirm_password: confirm_password,
        }

        localStorage.setItem("userdata", JSON.stringify(userData))

        setTimeout(()=>{
            window.location.href = "./dashboard.html"
        }, 2000)
    }
}

function dashboard(){
    var getUserData = JSON.parse(localStorage.getItem("userdata"))
    var dashboard = document.getElementById("dashboard")
    dashboard.innerHTML = `
    <h1 id="welcome">Welcome ${getUserData.name}</h1>
    `
}

dashboard()