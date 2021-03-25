// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [0,0,0,0];
var patternLen = pattern.length;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakesCounter = 0;
var timerTimeout;

//random pattern function

function randomizePattern() {
  for (let i = 0; i < patternLen; i++) {
    pattern[i] = getRandomInt(1, 5);
    console.log(pattern[i]);
  }
}

//button lighting functions

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//start and stop game functions

function startGame(){
    //initialize game variables
    //swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    progress = 0;
    gamePlaying = true;
    clueHoldTime = 1000;  
    mistakesCounter = 0;
    randomizePattern();
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    //swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    gamePlaying = false;
}

//game status alerts (win/loss)

function loseGame(){
  stopGame();
  alert("Sans says that it seems like you won't last in our world. He is disappointed");
}

function winGame(){
  stopGame();
  alert("Congratulations! Sans seems to have taken an interest in you");
}

//guess function

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (btn == pattern[guessCounter]) {
    clearTimeout(timerTimeout);
    if (guessCounter == progress) {
      if(progress == patternLen - 1){
        winGame();
      }else{
        progress += 1;
        playClueSequence();
      }
    }
    else {
      guessCounter += 1;
    }
    
  }
  else {
    mistakesCounter += 1;
    if (mistakesCounter == 3) {
      loseGame();
    }
    else {
      if (mistakesCounter == 1) {
        alert("Oops... Sans didn't like that. Try again. ♡♡");
      }
      else if (mistakesCounter == 2) {
        alert("Oops... Sans didn't like that. Try again. ♡");
      }
      
    }
  }
  
}

// Functions related to sound production

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 150;
}



//Page Initialization
// Init Sound Synthesizer

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Sound Synthesis Functions

const freqMap = {
  1: 200,
  2: 260,
  3: 320,
  4: 380
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    clearTimeout(timerTimeout);
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
    timerTimeout = setTimeout(function(){ loseGame(); }, 5000);
}

//randomization function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
