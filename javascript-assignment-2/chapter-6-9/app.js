function task_1()
{
    var a = prompt("Enter a number")
    a = parseInt(a)
    document.write("Result<br>")
    document.write("The value of a is: ", a, "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of ++a is: ", ++a, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of a++ is: ", a++, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of ++a is: ", --a, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("The value of ++a is: ", a--, "<br>")
    document.write("Now the value of a is: ", a, "<br>")
}

function task_2()
{
    var a = 2
    var b = 1
    result = --a - --b + ++b + b--;
    document.write("a is: ", a, "<br>")
    document.write("b is: ", b, "<br>")
    document.write("result is: ", result, "<br>")
}

function task_3()
{
    var name = prompt("Enter your name")
    alert("Welcome " + name)
}

function task_4()
{
    var number = prompt("Enter number: ")

    if (number >= 0)
    {
        number = parseInt(number)
        document.write("Table of " + number + "<br>")
        document.write(number + " * 1 = " + number*1 + "<br>")
        document.write(number + " * 2 = " + number*2 + "<br>")
        document.write(number + " * 3 = " + number*3 + "<br>")
        document.write(number + " * 4 = " + number*4 + "<br>")
        document.write(number + " * 5 = " + number*5 + "<br>")
        document.write(number + " * 6 = " + number*6 + "<br>")
        document.write(number + " * 7 = " + number*7 + "<br>")
        document.write(number + " * 8 = " + number*8 + "<br>")
        document.write(number + " * 9 = " + number*9 + "<br>")
        document.write(number + " * 10 = " + number*10 + "<br>")
    }

    else
    {
        document.write("Table of 5<br>")
        document.write("5 * 1 = " + 5*1 + "<br>")
        document.write("5 * 2 = " + 5*2 + "<br>")
        document.write("5 * 3 = " + 5*3 + "<br>")
        document.write("5 * 4 = " + 5*4 + "<br>")
        document.write("5 * 5 = " + 5*5 + "<br>")
        document.write("5 * 6 = " + 5*6 + "<br>")
        document.write("5 * 7 = " + 5*7 + "<br>")
        document.write("5 * 8 = " + 5*8 + "<br>")
        document.write("5 * 9 = " + 5*9 + "<br>")
        document.write("5 * 10 = " + 5*10 + "<br>")
    }
}

function task_5()
{
    var subject_1 = prompt("Enter subject 1")
    var subject_2 = prompt("Enter subject 2")
    var subject_3 = prompt("Enter subject 3")
    var total_marks = 100
    var subject_1_marks = prompt("Enter subject 1 marks")
    subject_1_marks = parseInt(subject_1_marks)
    var subject_2_marks = prompt("Enter subject 2 marks")
    subject_2_marks = parseInt(subject_2_marks)
    var subject_3_marks = prompt("Enter subject 3 marks")
    subject_3_marks = parseInt(subject_3_marks)
    subject_1_percentage = (subject_1_marks/total_marks)*100
    subject_2_percentage = (subject_2_marks/total_marks)*100
    subject_3_percentage = (subject_3_marks/total_marks)*100
    overall_percentage = ((subject_1_percentage + subject_2_percentage + subject_3_percentage)/(total_marks * 3))*100
    document.write("<table>")
    document.write("<tr>")
    document.write("<td><b>Subject</b></td>")
    document.write("<td><b>Total Marks</b></td>")
    document.write("<td><b>Obtained Marks</b></td>")
    document.write("<td><b>Percentage</b></td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + subject_1 + "</td>")
    document.write("<td>" + total_marks + "</td>")
    document.write("<td>" + subject_1_marks + "</td>")
    document.write("<td>" + subject_1_percentage + "%</td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + subject_2 + "</td>")
    document.write("<td>" + total_marks + "</td>")
    document.write("<td>" + subject_2_marks + "</td>")
    document.write("<td>" + subject_2_percentage + "%</td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>" + subject_3 + "</td>")
    document.write("<td>" + total_marks + "</td>")
    document.write("<td>" + subject_3_marks + "</td>")
    document.write("<td>" + subject_3_percentage + "%</td>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td></td>")
    document.write("<td><b>" + (total_marks * 3) + "</b></td>")
    document.write("<td><b>" + (subject_1_marks + subject_2_marks + subject_3_marks) + "</b></td>")
    document.write("<td><b>" + overall_percentage + "%</b></td>")
    document.write("</tr>")
    document.write("</table>")
}