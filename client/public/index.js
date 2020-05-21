// click counter
let clicks = 0;

//  click counter handler
function incrementClicks(e) {
  if (e) {
    clicks++;
  }
  return clicks;
}

// Trigger to start Covid Easter egg
function Germ(e) {
  console.log(e);
  if (e.detail === 5 || incrementClicks(e) === 5) {
    trigger();
    clicks = 0;
    let gif = document.getElementById("covid");
    gif.style.visibility = "visible";
    gif.style.animationPlayState = "running";
    GermAudio();
    setTimeout(() => {
      gif.style.visibility = "hidden";
      gif.style.animationPlayState = "paused";
      stopGermAudio();
      resetGif();
    }, 8000);
  }
}
// Disable/enable trigger for 8seconds so that animation can reset
function trigger() {
  // disable animation trigger
  let trigger = document.getElementById("trigger");
  trigger.onclick = null;
  // enable animation trigger
  setTimeout(() => {
    trigger.onclick = Germ;
  }, 12000);
}

// Change annimation gif to explostion gif on click
function explode() {
  let gif = document.getElementById("covid");
  stopGermAudio();
  explosionAudio();
  gif.style.animationPlayState = "paused";
  gif.src = "https://media.giphy.com/media/yr6EicFQYkbgk/source.gif";
  setTimeout(() => {
    gif.style.visibility = "hidden";
    toiletRoll();
  }, 1000);
}
// reset the explosion gif to the animation gif
function resetGif() {
  let gif = document.getElementById("covid");
  gif.src = "https://media.giphy.com/media/d55y3M7J6ECPh3zGD9/source.gif";
}

// toilet roll gif annimation
function toiletRoll() {
  let roll = document.getElementById("roll");
  roll.style.visibility = "visible";
  roll.style.animationPlayState = "running";
  toiletRollAudio();
  // pause and hide animation
  setTimeout(() => {
    roll.style.animationPlayState = "paused";
    roll.style.visibility = "hidden";
  }, 3000);
}

// toilet roll gif sound
function toiletRollAudio() {
  let aaaah = document.getElementById("run");
  // aaaah.play();
  let playPromise = aaaah.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        console.log("audio played auto");
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        console.log(error);
      });
  }
}
// Germ gif sound
function GermAudio() {
  let tongue = document.getElementById("tongue");
  tongue.loop = true;
  let playPromise = tongue.play();
  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        console.log("audio played auto");
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        console.log(error);
      });
  }
}
// stop germ audion on click
function stopGermAudio() {
  let tongueSound = document.getElementById("tongue");
  tongueSound.pause();
  tongueSound.currentTime = 0;
}
// exlosion audio
function explosionAudio() {
  let explosion = document.getElementById("explode");
  let playPromise = explosion.play();
  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        console.log("audio played auto");
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        console.log(error);
      });
  }
}
