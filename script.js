document.addEventListener("DOMContentLoaded", () => {
    const fiyAudio = new Audio('Fade Into You.mp3'); // Ensure the correct path
    const playBtn = document.querySelector('.play-pause');
    const playPauseIcon = document.querySelector('#play-pause-icon');
    const yesButton = document.querySelector('.yes-btn'); // Add a class to Yes button
  
    if (!playBtn || !playPauseIcon || !yesButton) {
      console.error("Required elements not found in the DOM.");
      return;
    }
  
    // Restore playback position if available
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
      fiyAudio.currentTime = parseFloat(savedTime);
    }
  
    // Play/Pause functionality
    playBtn.addEventListener('click', () => {
      playPauseSong();
    });
  
    const playPauseSong = () => {
      if (fiyAudio.paused) {
        fiyAudio.play().then(() => {
          playPauseIcon.className = 'ph-bold ph-pause';
        }).catch(error => console.error('Error playing audio:', error));
      } else {
        fiyAudio.pause();
        playPauseIcon.className = 'ph-bold ph-play';
      }
    };
  
    // Save playback position before navigating to yes.html
    yesButton.addEventListener('click', () => {
      localStorage.setItem('audioTime', fiyAudio.currentTime);
      localStorage.setItem('isPlaying', !fiyAudio.paused); // Store if audio was playing
      window.location.href = 'yes.html';
    });
  });
  