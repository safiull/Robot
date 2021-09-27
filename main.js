const startTalk = document.querySelector('.talk');
const content = document.querySelector('.content')

const greetings = ['I am good.I am not in depression like you small tut tut tut', 'I am fine Dickhead', 'I am fine and I am in good mode']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('hello');
}

recognition.onresult = function (event) {
    const message = event.results[event.resultIndex][0].transcript;
    readLoud(message);

}





startTalk.addEventListener('click', () => {
    recognition.start();
})


function readLoud(message) {

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            console.log('You let me use your mic!')
        })
        .catch(function (err) {
            console.log('No mic for you!')
        });

    const speech = new SpeechSynthesisUtterance();

    speech.text = "I don't get it.Say it again";
    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('what is your name') || message.includes('name')) {
        speech.text = 'Abdullah Bin Mamun'
    }  else if (message.includes('Hi') || message.includes('Hello')) {
        speech.text = 'Hi, How are you.'
    } else if (message.includes('Who is your boss') || message.includes('boss')) {
        speech.text = 'Fahim Bin Masum'
    } else if (message.includes('Who is your second boss') || message.includes('second boss')) {
        speech.text = 'Abdullah Bin Mamun'
    } else if (message.includes('What are you doing') || message.includes('doing')) {
        speech.text = "Ami ranna kortesi"
    } else if (message.includes('Please fly on the sky') || message.includes('sky')) {
        speech.text = "Ami poree jabo, amar khooda lagsee"
    }
    else {
        speech.text = 'I am in development mode . Try again in future'
    }

    speech.pitch = 1;
    speech.rate = .8;
    speech.volume = 1;


    window.speechSynthesis.speak(speech);
}
