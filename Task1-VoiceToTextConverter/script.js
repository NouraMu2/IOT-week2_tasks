var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = $("#textbox");
var instructions = $("#instructions");
var Content = "";
document.body.style.backgroundColor = "gray";
textbox.style.backgroundColor = "lightgray";

var Button = document.getElementById('start-btn');
                Button.style.height = '50px';
                Button.style.width= '200px';

recognition.continuous = true;
recognition.lang = 'ar';
recognition.onstart = function() {
    instructions.text("voice recgnition is on")
  }

recognition.onspeechend = function() {
    instructions.text("No Activity")
}

recognition.onerror = function() {
    instructions.text("Try Again")
}

recognition.onresult = function(event) {
    var current = event.resultIndex;
 
    var transcript = event.results[current][0].transcript
 
    Content += transcript
    Textbox.val(Content)
}

$("#start-btn").click(function (event) {
    if ( Content.length){
        Content +=''
    }
    recognition.start()
  })

Textbox.on('input',function (){
    content =$(this).val()
  })
  