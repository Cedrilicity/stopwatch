window.onload = function () {

  var seconds = 0;
  var milliseconds = 0;
  var appendSeconds = document.getElementById("seconds");
  var appendMilliseconds = document.getElementById("milliseconds");
  var buttonStart = document.getElementById("startButton");
  var buttonStop = document.getElementById("stopButton");
  var buttonReset = document.getElementById("resetButton");
  var Interval ;
  
  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    console.log("Stopwatch started.");
  }
  
  buttonStop.onclick = function () {
    clearInterval(Interval)
    console.log("Stopwatch stopped.");
  }

  buttonReset.onclick = function () {
    clearInterval(Interval)
    seconds = "00";
    milliseconds = "00";
    appendMilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    console.log("Stopwatch reset.");
  }

  function startTimer () {
    milliseconds++;
    
    if (milliseconds <= 9) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    
    if (milliseconds > 9) {
      appendMilliseconds.innerHTML = milliseconds;
    }
    
    if (milliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}