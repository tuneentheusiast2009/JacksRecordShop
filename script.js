// use variables to make your code shorter
console.log("JavaScript is linked and ready to go!");
let currentAudio;

var change = document.getElementById("shuffle");
var face2 = document.getElementById("f2");
var face3 = document.getElementById("f3");
var face4 = document.getElementById("f4");

var p1 = document.getElementById("parent1");
var p2 = document.getElementById("parent2");
var p3 = document.getElementById("parent3");
var p4 = document.getElementById("parent4");

var audio = document.getElementById("ocean");
var audio2 = document.getElementById("wilshire");
var audio3 = document.getElementById("caesar");
var audio4 = document.getElementById("world");
var audio5 = document.getElementById("mother");
var audio6 = document.getElementById("internet");
var audio7 = document.getElementById("walk");
var audio8 = document.getElementById("sza");
var audio9 = document.getElementById("care");
var audio10 = document.getElementById("blow");
var audio11 = document.getElementById("tpab");
var audio12 = document.getElementById("worry");
var audio13 = document.getElementById("head");
var audio14 = document.getElementById("power");
var audio15 = document.getElementById("name");
var audio16 = document.getElementById("bobby");
var audio17 = document.getElementById("nolook");
// declare your functions
(function changeAll() {
  document.getElementById("shuffle").addEventListener("click", function () {
    document.querySelectorAll("audio").forEach((a) => {
      a.pause();
      a.currentTime = 0;
    }); // ← add this
  });
})();
function playSRK() {
  audio.play();
}
function playWilshire() {
  audio2.play();
}
function playCaesar() {
  audio3.play();
}
function playWorld() {
  audio4.play();
}
function playMom() {
  audio5.play();
}
function playNet() {
  audio6.play();
}
function playWalk() {
  audio7.play();
}
function playSZA() {
  audio8.play();
}
function playCare() {
  audio9.play();
}
function playBlow() {
  audio10.play();
}
function playTPAB() {
  audio11.play();
}
function playWorry() {
  audio12.play();
}
function playHead() {
  audio13.play();
}
function playPower() {
  audio14.play();
}
function playName() {
  audio15.play();
}
function playBobby() {
  audio16.play();
}
function playNumbers() {
  audio17.play();
}
function resetAll() {
  document.querySelectorAll("audio").forEach((a) => {
    // Fade-out logic
    const fadeDuration = 1000; // 1 second
    const fadeSteps = 50;
    const fadeInterval = fadeDuration / fadeSteps;

    let step = 0;
    const originalVolume = a.volume;

    const fade = setInterval(() => {
      step++;
      const newVolume = originalVolume * (1 - step / fadeSteps);
      a.volume = Math.max(newVolume, 0);

      if (step >= fadeSteps) {
        clearInterval(fade);
        a.pause();
        a.currentTime = 0;
        a.volume = originalVolume; // restore volume for next play
      }
    }, fadeInterval);
  });
}
function chooseRandomAlbum() {
  // Math.random() gives a random decimal between 0 and 1 (like 0.47, 0.13, 0.999, etc.)
  // Multiplying by 8 scales that number up to between 0 and 7.999...
  // Math.floor() removes the decimal and rounds DOWN to the nearest whole number (0–7)
  // Get a number 0–7
  const index = Math.floor(Math.random() * 5);
  console.log(index);

  if (index == 0) {
    // ALBUM SET 0 ----------------------
    document.getElementById("album1").src = "images/covers/channelorange.jpg";
    document.getElementById("albumtext1").innerHTML =
      "Super Rich Kids — Frank Ocean, Earl Sweatshirt";
    document.getElementById("album1").onclick = playSRK;

    document.getElementById("album2").src = "images/covers/ctrl.jpg";
    document.getElementById("albumtext2").innerHTML = "The Weekend — SZA";
    document.getElementById("album2").onclick = playSZA;

    document.getElementById("album3").src = "images/covers/into.jpg";
    document.getElementById("albumtext3").innerHTML = "Care — Sonder";
    document.getElementById("album3").onclick = playCare;

    document.getElementById("album4").src = "images/covers/cherrybomb.jpg";
    document.getElementById("albumtext4").innerHTML =
      "BLOW MY LOAD — Tyler, The Creator, Wanya Morris";
    document.getElementById("album4").onclick = playBlow;
  } else if (index == 1) {
    // ALBUM SET 1 ----------------------
    document.getElementById("album1").src = "images/covers/chroma.jpg";
    document.getElementById("albumtext1").innerHTML =
      "Mother — Tyler, The Creator";
    document.getElementById("album1").onclick = playMom;

    document.getElementById("album2").src = "images/covers/hivemind.jpg";
    document.getElementById("albumtext2").innerHTML = "Hold On — The Internet";
    document.getElementById("album2").onclick = playNet;

    document.getElementById("album3").src = "images/covers/thelofis.jpg";
    document.getElementById("albumtext3").innerHTML = "Infrunami — Steve Lacy";
    document.getElementById("album3").onclick = playCare;

    document.getElementById("album4").src = "images/covers/CMIYGLcov.jpg";
    document.getElementById("albumtext4").innerHTML =
      "WILSHIRE — Tyler, The Creator";
    document.getElementById("album4").onclick = playWilshire;
  } else if (index == 2) {
    // ALBUM SET 2 ----------------------
    document.getElementById("album1").src = "images/covers/drunk.png";
    document.getElementById("albumtext1").innerHTML =
      "Walk On By — Thundercat, Kendrick Lamar";
    document.getElementById("album1").onclick = playWalk;

    document.getElementById("album2").src = "images/covers/alright.jpg";
    document.getElementById("albumtext2").innerHTML =
      "Alright — Kendrick Lamar";
    document.getElementById("album2").onclick = playTPAB;

    document.getElementById("album3").src = "images/covers/gemini.png";
    document.getElementById("albumtext3").innerHTML = "Helmet — Steve Lacy";
    document.getElementById("album3").onclick = playHead;

    document.getElementById("album4").src = "images/covers/dttg.jpg";
    document.getElementById("albumtext4").innerHTML =
      "Don't You Worry Baby — Tyler, The Creator, Madison McFerrin";
    document.getElementById("album4").onclick = playWorry;
  } else if (index == 3) {
    // ALBUM SET 2 ----------------------
    document.getElementById("album1").src = "images/covers/n.png";
    document.getElementById("albumtext1").innerHTML =
      "Superpowers — Daniel Caesar";
    document.getElementById("album1").onclick = playPower;

    document.getElementById("album2").src = "images/covers/CMIYGLcov.jpg";
    document.getElementById("albumtext2").innerHTML =
      "WUSYANAME — Tyler, The Creator, NBA Youngboy";
    document.getElementById("album2").onclick = playName;

    document.getElementById("album3").src = "images/covers/numbersrmx.jpg";
    document.getElementById("albumtext3").innerHTML =
      "Don't Look At Numbers — Tony Shhnow, Brent Faiyaz";
    document.getElementById("album3").onclick = playNumbers;

    document.getElementById("album4").src = "images/covers/NERD.jpg";
    document.getElementById("albumtext4").innerHTML = "Bobby James — N.E.R.D";
    document.getElementById("album4").onclick = playBobby;
  } else if (index == 4) {
    // ALBUM SET 2 ----------------------
    document.getElementById("album1").src = "images/covers/channelorange.jpg";
    document.getElementById("albumtext1").innerHTML =
      "Super Rich Kids — Frank Ocean, Earl Sweatshirt";
    document.getElementById("album1").onclick = playSRK;

    document.getElementById("album2").src = "images/covers/n.png";
    document.getElementById("albumtext2").innerHTML =
      "Disillusioned — Daniel Caesar, serpentwithfeet";
    document.getElementById("album2").onclick = playCaesar;

    document.getElementById("album3").src = "images/covers/CMIYGLcov.jpg";
    document.getElementById("albumtext3").innerHTML =
      "WILSHIRE — Tyler, The Creator";
    document.getElementById("album3").onclick = playWilshire;

    document.getElementById("album4").src = "images/covers/gemini.png";
    document.getElementById("albumtext4").innerHTML =
      "Give You The World — Steve Lacy";
    document.getElementById("album4").onclick = playWorld;
  }
}
