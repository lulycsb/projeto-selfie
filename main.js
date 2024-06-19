var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();


function start()
{


   document.getElementById("textbox").innerHTML = "";
   recognition.start();
}
recognition.onresult = function(event) {


console.log(event);


var Content = event.results[0][0].transcript;


   document.getElementById("textbox").innerHTML = Content;


     }

     function speak() {
      var synth = window.speechSynthesis;
      speak_data ="tirando sua  selfie em 500 milisegundos"
      var utterThis = new SpeechSynthesisUtterance[speak_data];
      synth.speak(utterThis); 
      Webcam.attach(camera);
     }

     webcam.set({
      width:360,
      height:250,
      imege_format:'png',
      image_quality:100,
   });

   camera = document.getElementById