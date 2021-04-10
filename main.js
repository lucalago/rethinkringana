
var currentSectionId = 'landingpage';

let sections = document.getElementsByTagName("section");
for (let section of sections) {
  section.style.display = 'none';
}
document.getElementById(currentSectionId).style.display = "block";
// navigation - toggling display none to block for matching href and section id

let links = document.getElementsByClassName("nav-button");

for (let link of links){
    link.addEventListener('click', function(e) {
      var newSectionId = link.getAttribute("href").slice(1, link.getAttribute("href").length);
      console.log(newSectionId);
      var newSection = document.getElementById(newSectionId);
      var currentSection = document.getElementById(currentSectionId);

      currentSection.style.display = 'none';
      newSection.style.display = 'block';

      if (newSectionId == "start") cleanSongToPlay();
      if (currentSectionId == "start") leaveSoundToPlay();
      if (newSectionId == "two") startSection2();
      if (currentSectionId == "two") leaveSection2();
      if (newSectionId == "three") startSection3();
      if (currentSectionId == "three") leaveSection3();
      if (newSectionId == "four") startSection4();
      if (currentSectionId == "four") leaveSection4();
      if (newSectionId == "five") startSection5();
      if (currentSectionId == "five") leaveSection5();
      if (newSectionId == "six") startSection6();
      if (currentSectionId == "six") leaveSection6();
      if (newSectionId == "thousand") startSection7();
      if (currentSectionId == "thousand") leaveSection7();
      if (newSectionId == "eight") startSection8();
      currentSectionId = newSectionId;
    })
}

var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var replayButton = document.getElementById('replay-button');
playButton.addEventListener('click', playUserSong);
pauseButton.addEventListener('click', pauseUserSong);
replayButton.addEventListener('click', replayUserSong);

// Setting Audio files, Links and Playback - "Section: Test Sounds and Record Song"

// #1 defining audio files
var audios = {
  A: new Audio('resources/Sounds/a.mp3'),
  B: new Audio('resources/Sounds/b.mp3'),
  C: new Audio('resources/Sounds/c.mp3'),
  D: new Audio('resources/Sounds/d.mp3'),
  E: new Audio('resources/Sounds/e.mp3'),
  F: new Audio('resources/Sounds/f.mp3'),
  G: new Audio('resources/Sounds/g.mp3'),
  H: new Audio('resources/Sounds/h.mp3'),
  I: new Audio('resources/Sounds/i.mp3'),
  J: new Audio('resources/Sounds/j.mp3'),
}

// #2 key events to reproduce audio

document.addEventListener('keyup', function(e) {
  var keyCode = e.keyCode;
  // If key code from num pad
  if (keyCode <= 48) keyCode += 26;
  if (keyCode > 95) keyCode -= 96 - 65;
  // if key code number
  else if (keyCode < 65) keyCode += 64 - 48;
  var key = String.fromCharCode(keyCode)

  console.log(key);

  myAudioFunction(key);
});

function myAudioFunction(key) {
  if (audios[key]) {
    var audio = audios[key];
    if(!audio.paused) audio.pause();
    audio.currentTime = 0;
    audio.play(); 

    if (currentSectionId == "start") {
      if (songsToPlay[0] && Date.now() - songsToPlay[0].time > 15000) return;
      // if (songsToPlay.length == 0) startTimer();
      addSongToPlay(audio);
    }
  }
}

// Media Play Functionalities - "Section: Listen your song"


// Click event add / remove class 'active'
var products = document.getElementsByClassName("products-images-div");
for (var i = 0; i < products.length; i++) {
   products.item(i).addEventListener('mousedown', function(c) {
      this.classList += ' active';
      setTimeout(() => {  this.classList.remove("active"); }, 100);
   });
}

// Key Down event to add class 'active' to pressed pad (packaging)
document.onkeydown = keyDownEvent;

function keyDownEvent(e) {
    e = e || window.event;
    if (e.keyCode == '49') {
      var lipstick = ["lipstick", "lipstick"]
    	 document.getElementsByClassName("lipstick")[0].classList.add("active");
    	 document.getElementsByClassName("lipstick")[1].classList.add("active");
       // connection.send("1");
       return false;
    }
    else if (e.keyCode == '50') {
    		document.getElementsByClassName("foam")[0].classList.add("active");
    		document.getElementsByClassName("foam")[1].classList.add("active");
        // connection.send("4");
        return false;
    }
    else if (e.keyCode == '51') {
    		document.getElementsByClassName("hairspray")[0].classList.add("active");
    		document.getElementsByClassName("hairspray")[1].classList.add("active");
       // connection.send("2");
       return false;
    }
    else if (e.keyCode == '52' ) {
    		document.getElementsByClassName("moisturizer")[0].classList.add("active");
    		document.getElementsByClassName("moisturizer")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '53' ) {
    		document.getElementsByClassName("shampoo")[0].classList.add("active");
    		document.getElementsByClassName("shampoo")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '54' ) {
    		document.getElementsByClassName("facialserum")[0].classList.add("active");
    		document.getElementsByClassName("facialserum")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '55' ) {
    		document.getElementsByClassName("supplements")[0].classList.add("active");
    		document.getElementsByClassName("supplements")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '56' ) {
    		document.getElementsByClassName("facewipes")[0].classList.add("active");
    		document.getElementsByClassName("facewipes")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '57' ) {
    		document.getElementsByClassName("deodorant")[0].classList.add("active");
    		document.getElementsByClassName("deodorant")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
    else if (e.keyCode == '48') {
    		document.getElementsByClassName("facialoil")[0].classList.add("active");
    		document.getElementsByClassName("facialoil")[1].classList.add("active");
       // connection.send("3");
       return false;
    }
}

// Key Up event to remove class 'active' to pressed pad (packaging)

document.onkeyup = keyUpEvent;

function keyUpEvent(e) {
  e = e || window.event;
    if (e.keyCode == '49') {
      document.getElementsByClassName("lipstick")[0].classList.remove("active");
      document.getElementsByClassName("lipstick")[1].classList.remove("active");
    }
    else if (e.keyCode == '50') {
        document.getElementsByClassName("foam")[0].classList.remove("active");
        document.getElementsByClassName("foam")[1].classList.remove("active");
    }
    else if (e.keyCode == '51') {
        document.getElementsByClassName("hairspray")[0].classList.remove("active");
        document.getElementsByClassName("hairspray")[1].classList.remove("active");
    }
    else if (e.keyCode == '52' ) {
        document.getElementsByClassName("moisturizer")[0].classList.remove("active");
        document.getElementsByClassName("moisturizer")[1].classList.remove("active");
    }
    else if (e.keyCode == '53' ) {
        document.getElementsByClassName("shampoo")[0].classList.remove("active");
        document.getElementsByClassName("shampoo")[1].classList.remove("active");
    }
    else if (e.keyCode == '54' ) {
        document.getElementsByClassName("facialserum")[0].classList.remove("active");
        document.getElementsByClassName("facialserum")[1].classList.remove("active");
    }
    else if (e.keyCode == '55' ) {
        document.getElementsByClassName("supplements")[0].classList.remove("active");
        document.getElementsByClassName("supplements")[1].classList.remove("active");
    }
    else if (e.keyCode == '56' ) {
        document.getElementsByClassName("facewipes")[0].classList.remove("active");
        document.getElementsByClassName("facewipes")[1].classList.remove("active");
    }
    else if (e.keyCode == '57' ) {
        document.getElementsByClassName("deodorant")[0].classList.remove("active");
        document.getElementsByClassName("deodorant")[1].classList.remove("active");
    }
    else if (e.keyCode == '48') {
        document.getElementsByClassName("facialoil")[0].classList.remove("active");
        document.getElementsByClassName("facialoil")[1].classList.remove("active");
    }
}

// #1having a flag when you need to record
var songsToPlay  = [];

function cleanSongToPlay() {
  songsToPlay = [];
}

function addSongToPlay(audio) {
  songsToPlay.push({
    time: Date.now(),
    audio: audio
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var pause = false;
var currentSoundToPlayIndex = 0;
var nextSoundToPlayTimeout = true;

function playSound(i) {
  var { time, audio } = songsToPlay[i];
  if(!audio.paused) audio.pause();
  audio.currentTime = 0;
  audio.play(); 

  currentSoundToPlayIndex = i+1;
  if (i == songsToPlay.length-1) {
    currentSoundToPlayIndex = 0;
    return;
  }

  var nextSoundToPlay = songsToPlay[i+1];
  var timeToWait = nextSoundToPlay.time - time;
  nextSoundToPlayTimeout = setTimeout(() => playSound(i+1), timeToWait);
}

async function playUserSong() {
  pauseUserSong();
  playSound(currentSoundToPlayIndex);
}

function pauseUserSong() {
  clearTimeout(nextSoundToPlayTimeout);
}

function resetUserSong() {
  pauseUserSong();
  currentSoundToPlayIndex = 0;
}

function replayUserSong() {
  pauseUserSong();
  currentSoundToPlayIndex = 0;
  playUserSong();
}

function leaveSoundToPlay() {
  resetUserSong()
}

// Sound scaling sections

// Defining pre-recorder mp3

  var k = new Audio('resources/Sounds/k.mp3');
  var l = new Audio('resources/Sounds/l.mp3');
  var m = new Audio('resources/Sounds/m.mp3');
  var n = new Audio('resources/Sounds/n.mp3');
  var o = new Audio('resources/Sounds/o.mp3');
  var p = new Audio('resources/Sounds/p.mp3');

// Play and Pause functions for pre-recorded mp3s

function playMp3(letter) {
    var audio = letter;
    if(!audio.paused) audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
 
function pauseMp3(letter) {
    var audio = letter;
    if(!audio.paused) audio.pause(); 
    audio.currentTime = 0;
    return
  }

// FUNCTION - 20 sounds scaling
function startSection2() {
  playMp3(k);
  replayUserSong();
}

function leaveSection2() {
  resetUserSong();
  pauseMp3(k);
}

// FUNCTION - 30 sounds scaling
function startSection3() {
  playMp3(l); 
  replayUserSong();
}

function leaveSection3() {
  resetUserSong();
  pauseMp3(l);
}

// FUNCTION - 50 sounds scaling
function startSection4() {
  playMp3(m); 
  replayUserSong();
}

function leaveSection4() {
  resetUserSong();
  pauseMp3(m);
}

// FUNCTION - 100 sounds scaling
function startSection5() {
  playMp3(n); 
  replayUserSong();
}

function leaveSection5() {
  resetUserSong();
  pauseMp3(n);
}

// FUNCTION - 200 sounds scaling
function startSection6() {
  playMp3(o);
  replayUserSong();
}

function leaveSection6() {
  resetUserSong();
  pauseMp3(o);
}

// FUNCTION - 1000 sounds scaling
function startSection7() {
  playMp3(p);
  replayUserSong();
}

function leaveSection7() {
  resetUserSong();
  pauseMp3(p);
}

function startSection8() {
  console.log("section8");
  function fadeIn(message){
    var elem = document.getElementById(message);
    elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 1;
  }
  function fadeOut(message){
    var elem = document.getElementById(message);
    elem.style.transition = "display 0.5s linear 0s";
    elem.style.opacity = 0;
  }

  var wrapper;
  var newRow = '<div class="row justify-content-left" id="row-infinite-image"><img src="resources/Icons/Icons-image.png"></div>';

  wrapper = document.getElementById("infinite-div");

  var counter = 2;

  function infiniteScroll() {
    console.log("onScroll");
    if(counter < 333 && wrapper.scrollTop >= (counter - 2) * 430){
      wrapper.innerHTML += newRow;
      counter += 1;
      console.log(counter);
      console.log(counter * 180);
      document.getElementById('counter-packs').innerHTML = counter * 180;
    }

    if(wrapper.scrollTop >= 80 * 430) {
      fadeIn('message-1');
    }
    if (wrapper.scrollTop >= 110 * 430) {
      fadeOut('message-1');
    }
    if(wrapper.scrollTop >= 160 * 430) {
      fadeIn('message-2');
    }
    if (wrapper.scrollTop >= 205 * 430) {
      fadeOut('message-2');
    }
    if(wrapper.scrollTop >= 315 * 430) {
      fadeIn('message-3');
    }
    if (wrapper.scrollTop < 290 * 430) {
      fadeOut('message-3');
    }
  }
  
  // var packagingsCount = counter * 200;

  if(wrapper.addEventListener) {
    wrapper.addEventListener("scroll",infiniteScroll,false);
  }
}