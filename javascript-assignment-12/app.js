
function submit_data()
{
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const number = document.getElementById("number").value
    const password = document.getElementById("password").value
    const confirm_password = document.getElementById("confirm_password").value
    
    if (name === "")
    {
        Swal.fire
        (
            {
                title: 'Error',
                text: 'Please enter valid name',
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
                text: 'Please enter valid email',
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
                text: 'Please enter valid number',
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
                text: 'Please enter valid password',
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
            window.location.href = "./login.html"
        }, 2000)
    }
}