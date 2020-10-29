const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const greeting = ["i'm good", "not very good today", "okey and you"];
const question = ["bad","fuck you","leave me alone","i'm mad at you bitch","ask your mother"];
const name ="badr bitch and i'm cheating at my girlfriend";
//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recored = new SpeechRecognition();

recored.onstart = () => {
  console.log("voice activatat ");
};

recored.onresult = (event) => {
  //  console.log(event);
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  voice2text.textContent = transcript;
  readOutLoud(transcript);
};


voice.addEventListener("click", () => {
  recored.start();
});


//function to back voice outloud //
function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  if (message.includes("how are you") || message.includes("hi")) {
    const finalText = greeting[Math.floor(Math.random() * greeting.length)];
    speech.text = finalText;
  }
   if(message.includes("how is your day")||message.includes("do you have a boyfriend")){
     const text = question[Math.floor(Math.random() * question.length)];
     speech.text=text;
   }
   if(message.includes("what's your name")||message.includes("do you have a name")){
     speech.text=name;
   }
  speech.volume = 1;
  speech.rate = 0.6;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
