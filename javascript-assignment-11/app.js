var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "",
        answer: "Hyper Text Markup Language",
    },

    {
        question: "Who is making the Web standards?",
        option1: "Microsoft",
        option2: "Google",
        option3: "The World Wide Web Consortium",
        option4: "Mozilla",
        answer: "The World Wide Web Consortium",
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "&lt;heading&gt;",
        option2: "&lt;h6&gt;",
        option3: "&lt;h1&gt;",
        option4: "&lt;head&gt;",
        answer: "<h1>",
    },

    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "&lt;br&gt;",
        option2: "&lt;lb&gt;",
        option3: "&lt;break&gt;",
        option4: "",
        answer: "<br>",
    },

    {
        question: "What is the correct HTML for adding a background color?",
        option1: "&lt;background&gt;yellow&lt;/background&gt;",
        option2: "&lt;body bg='yellow'&gt;",
        option3: "&lt;body style='background-color:yellow;'&gt;",
        option4: "",
        answer: "<body style='background-color:yellow;'>",
    },

    {
        question: "Choose the correct HTML element to define important text",
        option1: "&lt;b&gt;",
        option2: "&lt;strong&gt;",
        option3: "&lt;i&gt;",
        option4: "&lt;important&gt;",
        answer: "<strong>",
    },

    {
        question: "Choose the correct HTML element to define emphasized text",
        option1: "&lt;italic&gt;",
        option2: "&lt;em&gt;",
        option3: "&lt;i&gt;",
        option4: "",
        answer: "<em>",
    },

    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "&lt;a url='http://www.w3schools.com'&gt;W3Schools.com&lt;/a&gt;",
        option2: "&lt;a&gt;http://www.w3schools.com&lt;/a&gt;",
        option3: "&lt;a name='http://www.w3schools.com'&gt;W3Schools.com&lt;/a&gt;",
        option4: "&lt;a href='http://www.w3schools.com'&gt;W3Schools&lt;/a&gt;",
        answer: "<a href='http://www.w3schools.com'>W3Schools</a>",
    },

    {
        question: "Which character is used to indicate an end tag?",
        option1: "^",
        option2: "/",
        option3: "*",
        option4: "&lt;",
        answer: "/",
    },

    {
        question: "How can you open a link in a new tab/browser window?",
        option1: "&lt;a href='url' new&gt;",
        option2: "&lt;a href='url' target='_blank'&gt;",
        option3: "&lt;a href='url' target='new'&gt;",
        option4: "",
        answer: "<a href='url' target='_blank'>",
    },

    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        option1: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
        option2: "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;",
        option3: "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
        option4: "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
        answer: "<table><tr><td>",
    },

    {
        question: "Inline elements are normally displayed without starting a new line.",
        option1: "False",
        option2: "True",
        option3: "",
        option4: "",
        answer: "True",
    },

    {
        question: "How can you make a numbered list?",
        option1: "&lt;ol&gt;",
        option2: "&lt;dl&gt;",
        option3: "&lt;ul&gt;",
        option4: "&lt;list&gt;",
        answer: "<ol>",
    },

    {
        question: "How can you make a bulleted list?",
        option1: "&lt;ol&gt;",
        option2: "&lt;list&gt;",
        option3: "&lt;ul&gt;",
        option4: "&lt;dl&gt;",
        answer: "<ul>",
    },
    
    {
        question: "What is the correct HTML for making a checkbox?",
        option1: "&lt;checkbox&gt;",
        option2: "&lt;input type='check'&gt;",
        option3: "&lt;input type='checkbox'&gt;",
        option4: "&lt;check&gt;",
        answer: "<input type='checkbox'>",
    },

    {
        question: "What is the correct HTML for making a text input field?",
        option1: "&lt;input type='textfield'&gt;",
        option2: "&lt;input type='text'&gt;",
        option3: "&lt;textinput type='text'&gt;",
        option4: "&lt;textfield&gt;",
        answer: "<input type='text'>",
    },

    {
        question: "What is the correct HTML for making a drop-down list?",
        option1: "&lt;input type='list'&gt;",
        option2: "&lt;select&gt;",
        option3: "&lt;list&gt;",
        option4: "&lt;input type='dropdown'&gt;",
        answer: "<select>",
    },

    {
        question: "What is the correct HTML for making a text area?",
        option1: "&lt;input type='textbox'&gt;",
        option2: "&lt;input type='textarea'&gt;",
        option3: "&lt;textarea&gt;",
        option4: "",
        answer: "<textarea>",
    },

    {
        question: "What is the correct HTML for inserting an image?",
        option1: "&lt;img href='image.gif' alt='MyImage'&gt;",
        option2: "&lt;img alt='MyImage'&gt;image.gif&lt;/img&gt;",
        option3: "&lt;img src='image.gif' alt='MyImage'&gt;",
        option4: "&lt;image src='image.gif' alt='MyImage'&gt;",
        answer: "<img src='image.gif' alt='MyImage'>",
    },

    {
        question: "What is the correct HTML for inserting a background image?",
        option1: "&lt;body style='background-image:url(background.gif)'&gt;",
        option2: "&lt;body bg='background.gif'&gt;",
        option3: "&lt;background img='background.gif'&gt;",
        option4: "",
        answer: "<body style='background-image:url(background.gif)'>",
    },

    {
        question: "An &lt;iframe&gt; is used to display a web page within a web page.",
        option1: "False",
        option2: "True",
        option3: "There is no such thing as an &lt;iframe&gt;",
        option4: "",
        answer: "True",
    },

    {
        question: "HTML comments start with &lt;!-- and end with --&gt;",
        option1: "False",
        option2: "True",
        option3: "",
        option4: "",
        answer: "True",
    },

    {
        question: "Block elements are normally displayed without starting a new line.",
        option1: "False",
        option2: "True",
        option3: "",
        option4: "",
        answer: "False",
    },

    {
        question: "Which HTML element defines the title of a document?",
        option1: "&lt;meta&gt;",
        option2: "&lt;title&gt;",
        option3: "&lt;head&gt;",
        option4: "",
        answer: "<title>",
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        option1: "alt",
        option2: "src",
        option3: "longdesc",
        option4: "title",
        answer: "alt",
    },
    
    {
        question: "Which doctype is correct for HTML5?",
        option1: "&lt;!DOCTYPE HTML5&gt;",
        option2: "&lt;!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 5.0//EN' 'http://www.w3.org/TR/html5/strict.dtd'&gt;",
        option3: "&lt;!DOCTYPE html&gt;",
        option4: "",
        answer: "<!DOCTYPE html>",
    },
    
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        option1: "&lt;footer&gt;",
        option2: "&lt;section&gt;",
        option3: "&lt;bottom&gt;",
        option4: "",
        answer: "<footer>",
    },
    
    {
        question: "In HTML, you can embed SVG elements directly into an HTML page",
        option1: "True",
        option2: "False",
        option3: "",
        option4: "",
        answer: "True",
    },
    
    {
        question: "What is the correct HTML element for playing video files?",
        option1: "&lt;video&gt;",
        option2: "&lt;movie&gt;",
        option3: "&lt;media&gt;",
        option4: "",
        answer: "<video>",
    },
    
    {
        question: "What is the correct HTML element for playing audio files?",
        option1: "&lt;audio&gt;",
        option2: "&lt;mp3&gt;",
        option3: "&lt;sound&gt;",
        option4: "",
        answer: "<audio>",
    },
    
    {
        question: "The HTML global attribute, 'contenteditable' is used to:",
        option1: "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
        option2: "Update content from the server",
        option3: "Specify whether the content of an element should be editable or not",
        option4: "Return the position of the first found occurrence of content inside a string",
        answer: "Specify whether the content of an element should be editable or not",
    },
    
    {
        question: "In HTML, onblur and onfocus are:",
        option1: "Event attributes",
        option2: "Style attributes",
        option3: "HTML elements",
        option4: "",
        answer: "Event attributes",
    },
    
    {
        question: "Graphics defined by SVG is in which format?",
        option1: "CSS",
        option2: "HTML",
        option3: "XML",
        option4: "",
        answer: "XML",
    },
    
    {
        question: "The HTML &lt;canvas&gt; element is used to:",
        option1: "draw graphics",
        option2: "display database records",
        option3: "create draggable elements",
        option4: "manipulate data in MySQL",
        answer: "draw graphics",
    },
    
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        option1: "placeholder",
        option2: "formvalidate",
        option3: "validate",
        option4: "required",
        answer: "required",
    },
    
    {
        question: "Which input type defines a slider control?",
        option1: "slider",
        option2: "controls",
        option3: "search",
        option4: "range",
        answer: "range",
    },
    
    {
        question: "Which HTML element is used to display a scalar measurement within a range?",
        option1: "&lt;range&gt;",
        option2: "&lt;gauge&gt;",
        option3: "&lt;meter&gt;",
        option4: "&lt;measure&gt;",
        answer: "<meter>",
    },
    
    {
        question: "Which HTML element defines navigation links?",
        option1: "&lt;nav&gt;",
        option2: "&lt;navigation&gt;",
        option3: "&lt;navigate&gt;",
        option4: "",
        answer: "<nav>",
    },
    
    {
        question: "In HTML, what does the &lt;aside&gt; element define?",
        option1: "A navigation list to be shown at the left side of the page",
        option2: "Content aside from the page content",
        option3: "The ASCII character-set; to send information between computers on the Internet",
        option4: "",
        answer: "Content aside from the page content",
    },
    
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        option1: "&lt;head&gt;",
        option2: "&lt;top&gt;",
        option3: "&lt;section&gt;",
        option4: "&lt;header&gt;",
        answer: "<header>",
    },
]

// Question Variables
var question_box = document.getElementById("question-box")
var options = document.getElementsByName("options")
var next_button = document.getElementById("next")
var submit_button = document.getElementById("submit")
var index = 0
var score = 0

// Timer Variables
var seconds = 0
var minutes = 0
var hours = 1
var counter = document.getElementById("timer")
const myInterval = setInterval(timer, 1000)
const check_input = setInterval(check, 250)

// End Screen
var end_screen = document.getElementById("end-screen")
var percentage

render()

function render(){
    submit_button.disabled = true

    if (index < 39){

        if (questions[index].option3 === "" && questions[index].option4 === ""){
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            </div>
            `
        }
    
        else if(questions[index].option3 !== "" && questions[index].option4 === ""){
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            <input type="radio" id="option3" name="options" value="${questions[index].option3}" required>
            <label for="option3">${questions[index].option3}</label>
            <br>
            </div>
            `
        }
    
        else{
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            <input type="radio" id="option3" name="options" value="${questions[index].option3}" required>
            <label for="option3">${questions[index].option3}</label>
            <br>
            <input type="radio" id="option4" name="options" value="${questions[index].option4}" required>
            <label for="option4">${questions[index].option4}</label>
            <br>
            </div>
            `
        }
    }
}

function enable_next_button(){
    next_button.disabled = false
}

function disabled_next_button(){
    next_button.disabled = true
}

function next()
{
    if (index < 39){
        
        for(var i=0; i < options.length; i++){
            if(options[i].checked){
                if (options[i].value === questions[index].answer){
                    ++score
                }
            }
        }

        ++index

        if (questions[index].option3 === "" && questions[index].option4 === ""){
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            </div>
            `
        }

        else if(questions[index].option3 !== "" && questions[index].option4 === ""){
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            <input type="radio" id="option3" name="options" value="${questions[index].option3}" required>
            <label for="option3">${questions[index].option3}</label>
            <br>
            </div>
            `
        }

        else{
            question_box.innerHTML = `
            <div class="col">
            <p>${index+1}) ${questions[index].question}<p>
            <input type="radio" id="option1" name="options" value="${questions[index].option1}" required>
            <label for="option1">${questions[index].option1}</label>
            <br>
            <input type="radio" id="option2" name="options" value="${questions[index].option2}" required>
            <label for="option2">${questions[index].option2}</label>
            <br>
            <input type="radio" id="option3" name="options" value="${questions[index].option3}" required>
            <label for="option3">${questions[index].option3}</label>
            <br>
            <input type="radio" id="option4" name="options" value="${questions[index].option4}" required>
            <label for="option4">${questions[index].option4}</label>
            <br>
            </div>
            `
        }
    }

    else{
        disabled_next_button()
    }
}

function timer(){
    --seconds

    if (hours > 0 && minutes <= 0 && seconds <= 0)
    {
        --hours
        minutes = 59
        seconds = 59
    }

    else if(hours <= 0 && minutes > 0 && seconds <= 0){
        --minutes
        seconds = 59
    }

    else if(hours <= 0 && minutes <= 0 && seconds <= 0){
        quiz_end()
    }

    counter.innerHTML = `
    <div class="col">
    <p>${hours}:${minutes}:${seconds}</p>
    </div>
    `
}

function check(){
    if (index <= 39){
        if (questions[index].option3 === "" && questions[index].option4 === ""){
            if (options[0].checked || options[1].checked){
                enable_next_button()
            }
            else{
                disabled_next_button()
            }
        }

        else if(questions[index].option3 !== "" && questions[index].option4 === ""){
            if (options[0].checked || options[1].checked || options[2].checked){
                enable_next_button()
            }
            else{
                disabled_next_button()
            }
        }

        else{
            if (options[0].checked || options[1].checked || options[2].checked || options[3].checked){
                enable_next_button()
                if (index >= 39){

                    submit_button.disabled = false
                    disabled_next_button()
                }
            }
            else{
                disabled_next_button()
            }
        }
    }

    else{
        disabled_next_button()
    }
}

function submit(){
    clearInterval(myInterval)
    clearInterval(check_input)
    quiz_end()
}

function quiz_end(){
    clearInterval(myInterval)
    clearInterval(check_input)
    document.getElementById("main").style.display = "none"
    end_screen.style.display = "block"
    percentage = ((score / 40) * 100)

    if (percentage >= 70)
    {
        end_screen.innerHTML = `
            <h1>Congratulatons!</h1>
            <p>Number of correct answers = ${score}</p>
            <p>Percentage = ${percentage}%</p>
        `
    }

    else
    {
        end_screen.innerHTML = `
            <h1>Better Luck Next Time!</h1>
            <p>Number of correct answers = ${score}</p>
            <p>Percentage = ${percentage}%</p>
        `
    }

}