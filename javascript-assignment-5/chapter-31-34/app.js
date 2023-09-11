function task_1()
{
    
}

function task_2()
{
    var favoriteMobileModel = prompt("Enter favorite mobile phone model")

    var Message = "My favorite phone is:" + " " + favoriteMobileModel
    document.write(Message + "<br>")
    document.write("Length of string:" + " " + Message.length)
}

function task_3()
{
    var string = "Pakistani"
    document.write("String:" + " " + string + "<br>")
    document.write("Index of 'n':" + " " + string.indexOf('n'))
}

function task_4()
{
    var string = "Hello World"
    document.write("String:" + " " + string + "<br>")
    document.write("Last index of 'l':" + " " + string.lastIndexOf('l'))
}

function task_5()
{
    var string = "Pakistani"
    document.write("String:" + " " + string + "<br>")
    document.write("Character at index 3:" + " " + string.charAt(3))
}

function task_6()
{
    var firstName = prompt("Enter first name")
    var lastName = prompt("Enter last name")
    var fullName = firstName.concat(" ", lastName)

    alert("Welcome" + " " + fullName)
}

function task_7()
{
    var city = "Hyderabad"
    document.write("City:" + " " + city + "<br>")
    var newCity = city.replace("Hyder", "Islam")
    document.write("After replacement:" + " " + newCity)
}

function task_8()
{
    var message = "Ali and Sami are best friends. They play cricket and football together."
    var newMessage = message.replaceAll("and", "&")
    alert(newMessage)

}

function task_9()
{
    var string = "472"
    document.write("Value:" + " " + string + "<br>")
    document.write("Type:" + " " + typeof(string) + "<br>")
    string = parseInt(string)
    document.write("Value:" + " " + string + "<br>")
    document.write("Type:" + " " + typeof(string) + "<br>")
}

function task_10()
{
    var user_input = prompt()

    document.write("User input:" + " " + user_input + "<br>")
    document.write("Upper case:" + " " + user_input.toUpperCase() + "<br>")
}

function task_11()
{
    var user_input = prompt()
    var title_case = []

    document.write("User input:" + " " + user_input + "<br>")

    for (var i = 0; i < user_input.length; i++)
    {
        if (i === 0)
        {
            title_case[i] = user_input[i].toUpperCase()
        }

        else if (user_input[i - 1] === " ")
        {
            title_case[i] = user_input[i].toUpperCase()
        }

        else
        {
            title_case[i] = user_input[i]
        }
    }

    document.write("Title case:" + " " + title_case.join("") + "<br>")
    
}

function task_12()
{
    var num = 35.36
    document.write("Number:" + " " + num + "<br>")
    num_to_str = toString(num)
    document.write("Result:" + " " + num_to_str + "<br>")
    num_to_str = num_to_str.replace(".", "")
    document.write("Result:" + " " + num_to_str + "<br>")
}

function task_13()
{
    var name = prompt()

    for (var i = 0; i < name.length; i++)
    {
        if (name.charCodeAt(i) >= 33 && name.charCodeAt(i) <= 64)
        {
            alert("Please enter a valid username")
            break
        }
    }
}

function task_14()
{
    var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
    
    for (var i = 0; i <= A.length; i++)
    {
        if (A[i] === input.toLowerCase())
        {
            alert(input + " " + "is available at index" + " " + i + " " + "in our bakery")
            break
        }

        else if (i === A.length - 1)
        {
            alert("We are sorry," + " " + input + " " + "is not available in our bakery")
            break
        }
    }
}

function task_16()
{
    var university = "University of Karachi"
    var split_string = university.split("")

    for (var i = 0; i < split_string.length; i++)
    {
        document.write(split_string[i] + "<br>")
    }

}

function task_17()
{
    var user_input = prompt()

    document.write("User input:" + " " + user_input + "<br>")
    document.write("Last character of input:" + " " + user_input[user_input.lastIndexOf()] + "<br>")
}