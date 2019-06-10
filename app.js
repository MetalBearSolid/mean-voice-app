const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//Mean speeches
const greetings = ['I\'m good you little piece of shit', 'Doing good homie', 'leave me alone' ];

const weather = [
	'Weather is fine',
	'You need a tan'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('voice is activated, you can use microphonee');
};

//holds string of what we're talking about
recognition.onresult = function(event) {
	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener('click', () => {
recognition.start();
});


function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();

	speech.text = 'I dont know waht you said';

	if(message.includes('how are you')){
		const finalText = 
			greetings[Math.floor(Math.random() *  greetings.length)];
		speech.text = finalText;
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
};