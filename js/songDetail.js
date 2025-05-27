const playBtn = document.getElementById("playBtn");
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.getElementById("progressContainer");
    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");

    let isPlaying = false;


    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }


    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        playBtn.textContent = "❚❚";
      } else {
        audio.pause();
        playBtn.textContent = "▶";
      }
      isPlaying = !isPlaying;
    });


    audio.addEventListener("timeupdate", () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });


    audio.addEventListener("ended", () => {
      playBtn.textContent = "▶";
      isPlaying = false;
    });


    progressContainer.addEventListener("click", (e) => {
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    });