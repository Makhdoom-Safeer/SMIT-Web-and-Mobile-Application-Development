var start_button = document.getElementById("start")
var display = document.getElementById("display")
var timer_text = document.getElementById("timer-text").getElementsByTagName("a")[0]
var stopwatch_text = document.getElementById("stopwatch-text").getElementsByTagName("a")[0]
timer_text.focus()

// Timer Variables
var seconds = 0
var minutes = 5
var milliseconds = 0
var hours = 0
var timer_selected = true
var stopwatch_selected = false
var timer_on = false
var stopwatch_on = false
const timer_interval = setInterval(timer, 1000)
const stopwatch_interval = setInterval(stopwatch, 10)

display.innerHTML = `
<p><span id="large_font">${minutes}</span>m <span id="large_font">${seconds}</span>s</p>
`

function timer_display(){
    
    timer_selected = true
    stopwatch_selected = false
    
    if (stopwatch_on)
    {
        stopwatch_on = false
        start_button.innerHTML = "START"
    }
    
    if (timer_selected && !stopwatch_selected && !timer_on)
    {
        hours = 0
        minutes = 5
        seconds = 0
        milliseconds = 0

        display.innerHTML = `
        <p><span id="large_font">${minutes}</span>m <span id="large_font">${seconds}</span>s</p>
        `
    }

    else if (timer_selected && !stopwatch_selected && timer_on)
    {
        display.innerHTML = `
        <p><span id="large_font">${minutes}</span>m <span id="large_font">${seconds}</span>s</p>
        `
    }
}

function stopwatch_display(){

    timer_selected = false
    stopwatch_selected = true

    if (timer_on)
    {
        timer_on = false
        start_button.innerHTML = "START"
    }

    if (!timer_selected && stopwatch_selected && !stopwatch_on)
    {
        hours = 0
        minutes = 0
        seconds = 0
        milliseconds = 0

        display.innerHTML = `
        <p><span id="large_font">${seconds}</span>s <span id="milliseconds">${milliseconds}</span></p>
        `
    }

    else if (!timer_selected && stopwatch_selected && stopwatch_on)
    {
        if (minutes <= 0)
        {
            display.innerHTML = `
            <p><span id="large_font">${seconds}</span>s <span id="milliseconds">${milliseconds}</span></p>
            `
        }
        
        else
        {
            display.innerHTML = `
                <p><span id="large_font">${minutes}</span>m <span id="large_font">${seconds}</span>s <span id="milliseconds">${milliseconds}</span></p>
        `
        }
    }
}

function timer(){

    if (timer_on){

        --seconds

        if (hours > 0 && minutes <= 0 && seconds <= 0){
        --hours
        minutes = 59
        seconds = 59
        }

        else if(hours <= 0 && minutes > 0 && seconds <= 0){
            --minutes
            seconds = 59
        }

        else if(hours <= 0 && minutes <= 0 && seconds <= 0){
            reset()
        }

        timer_display()
    }
}

function stopwatch()
{
    if (stopwatch_on){

        ++milliseconds

        if (milliseconds >= 99){
            ++seconds
            milliseconds = 0
        }

        else if (seconds >= 59){
            ++minutes
            seconds = 0
        }

        stopwatch_display()
    }
}

function start(){

    if (timer_selected && !stopwatch_selected && !timer_on)
    {
        timer_on = true
        start_button.innerHTML = "STOP"
    }

    else if (timer_selected && !stopwatch_selected && timer_on)
    {
        timer_on = false
        start_button.innerHTML = "START"
    }
    
    else if(!timer_selected && stopwatch_selected && !stopwatch_on)
    {
        stopwatch_on = true
        start_button.innerHTML = "STOP"
    }

    else if(!timer_selected && stopwatch_selected && stopwatch_on)
    {
        stopwatch_on = false
        start_button.innerHTML = "START"
    }
}

function reset(){
    
    if (timer_selected && !stopwatch_selected)
    {
        timer_on = false
        start_button.innerHTML = "START"
        hours = 0
        minutes = 5
        seconds = 0
        milliseconds = 0
        timer_display()
    }

    else if (!timer_selected && stopwatch_selected)
    {
        stopwatch_on = false
        start_button.innerHTML = "START"
        hours = 0
        minutes = 0
        seconds = 0
        milliseconds = 0
        stopwatch_display()
    }
}