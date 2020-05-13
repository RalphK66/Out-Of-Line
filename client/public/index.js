

// Trigger to start Covid Easter egg
function Germ(e) {
  if (e.detail === 5) {
    trigger()
    let gif = document.getElementById("covid");
    gif.hidden = false;
    gif.style.animationPlayState = "running";
    setTimeout(() => {
      gif.hidden = true;
      gif.style.animationPlayState = "paused";
      resetGif()
    }, 8000);
  }
}
// Disable/enable trigger for 8seconds so that animation can reset
function trigger() {
  // disable animation trigger
  let trigger = document.getElementById("trigger")
  trigger.onclick = null
  // enable animation trigger
  setTimeout(() => {
      trigger.onclick = Germ
  }, 8500);
}

// Change annimation gif to explostion gif on click
function explode() {
  let gif = document.getElementById("covid");
  gif.style.animationPlayState = "paused";
  gif.src = "https://media.giphy.com/media/yr6EicFQYkbgk/source.gif";
  setTimeout(() => {
    gif.hidden = true;
    toiletRoll()
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
  roll.hidden = false
  roll.style.animationPlayState = "running";
  toiletRollAudio()
  // pause and hide animation
  setTimeout(() => {
    roll.style.animationPlayState = "paused";
    roll.hidden = true;
  }, 3000);
}

// toilet roll gif sound - NOT WORKING
// function toiletRollAudio() {
//     let aaaah = document.getElementById("run")
//     let playPromise = aaaah.play();

//     if (playPromise !== undefined) {
//       playPromise
//         .then(_ => {
//           // Automatic playback started!
//           // Show playing UI.
//           console.log("audio played auto");
//         })
//         .catch(error => {
//           // Auto-play was prevented
//           // Show paused UI.
//           console.log("playback prevented");
//         });
//     }
// }