var audio = new Audio(
  "Indigo — Nelvian  Background Music  Audio Library Release.mp3"
);

audio.addEventListener(
  // 음악이 종료되면 다시 처음부터 재생
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
