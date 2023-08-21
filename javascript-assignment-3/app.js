function task_7()
{
    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
    document.write("Qualifications:" + "<br>")
    document.write("<br>")
    document.write("1) " + qualifications[0] + "<br>")
    document.write("2) " + qualifications[1] + "<br>")
    document.write("3) " + qualifications[2] + "<br>")
    document.write("4) " + qualifications[3] + "<br>")
    document.write("5) " + qualifications[4] + "<br>")
    document.write("6) " + qualifications[5] + "<br>")
    document.write("7) " + qualifications[6] + "<br>")
    document.write("8) " + qualifications[7] + "<br>")
}

function task_8()
{
    var students = ["Micheal", "John", "Tony"]
    var score = [320, 230, 480]
    var total_marks = 500
    
    document.write("Score of " + students[0] + " is "+ score[0] + ". Percentage: "+ (score[0]/total_marks)*100 +"%<br>")
    document.write("Score of " + students[1] + " is "+ score[1] + ". Percentage: "+ (score[1]/total_marks)*100 +"%<br>")
    document.write("Score of " + students[2] + " is "+ score[2] + ". Percentage: "+ (score[2]/total_marks)*100 +"%<br>")
}

function task_9()
{
    var colors = ["Red", "Green", "Blue", "Yellow", "Orange"]
    alert("Original array \n" + colors)

    // a
    colors.unshift(prompt("Add new color to the begining of array"))
    alert("Updated array \n" + colors)

    // b
    colors.push(prompt("Add new color to the end of array"))
    alert("Updated array \n" + colors)

    // c
    colors.unshift(prompt("Add a color to the begining of array"))
    colors.unshift(prompt("Add another color to the begining of array"))
    alert("Updated array \n" + colors)

    // d
    alert("After removing first color " + colors.shift() + ", updated array is: \n" + colors)

    // e
    alert("After removing last color " + colors.pop() + ", updated array is: \n" + colors)

    // f
    new_color_index = parseInt(prompt("At which index you want to add a new color?"))
    new_color = prompt("Which color do you want to add on index " + new_color_index + "?")
    colors.splice(new_color_index, 0,  new_color)
    alert("Updated array \n" + colors)

    // g
    color_remove_start = parseInt(prompt("From which index you want to remove colors?"))
    color_remove_end = parseInt(prompt("How many colors do you want to remove?"))
    colors.splice(color_remove_start, color_remove_end)
    alert("Updated array \n" + colors)
}

function task_10()
{
    var scores = [320, 230, 480, 120]
    document.write("Scores of student: " + scores + "<br>")
    scores = scores.sort()
    document.write("Ordered Scores of student: " + scores + "<br>")
}

function task_11()
{
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    var selectedCities = cities.slice(2, 5)

    document.write("Cities list: " + "<br>")
    document.write(cities + "<br>")
    document.write("<br>")
    document.write("Selected cities list: " + "<br>")
    document.write(selectedCities + "<br>")
}

function task_12()
{
    var arr = ["This", "is", "my", "cat"];
    var arr_string = arr.join(" ")

    document.write("Array:<br>")
    document.write(arr + "<br>")
    document.write("<br>")
    document.write("String:<br>")
    document.write(arr_string  + "<br>")
}

function task_13()
{
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    document.write("Devices:<br>")
    document.write(devices + "<br>")
    document.write("<br>")
    document.write("Out:<br>")
    document.write(devices.shift() + "<br>")
    document.write("Out:<br>")
    document.write(devices.shift() + "<br>")
    document.write("Out:<br>")
    document.write(devices.shift() + "<br>")
    document.write("Out:<br>")
    document.write(devices.shift() + "<br>")
}

function task_14()
{
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    document.write("Devices:<br>")
    document.write(devices + "<br>")
    document.write("<br>")
    document.write("Out:<br>")
    document.write(devices.pop() + "<br>")
    document.write("Out:<br>")
    document.write(devices.pop() + "<br>")
    document.write("Out:<br>")
    document.write(devices.pop() + "<br>")
    document.write("Out:<br>")
    document.write(devices.pop() + "<br>")
}

function task_15()
{
    var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

    document.write("<select>")
    document.write("<option>" + phone_manufacturers[0] + "</option>")
    document.write("<option>" + phone_manufacturers[1] + "</option>")
    document.write("<option>" + phone_manufacturers[2] + "</option>")
    document.write("<option>" + phone_manufacturers[3] + "</option>")
    document.write("<option>" + phone_manufacturers[4] + "</option>")
    document.write("<option>" + phone_manufacturers[5] + "</option>")
    document.write("</select>")
}