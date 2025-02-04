document.addEventListener("DOMContentLoaded", () => {
    const fiyAudio = new Audio('Fade Into You.mp3'); // Same audio file
  
    // Retrieve playback time and play state
    const savedTime = localStorage.getItem('audioTime');
    const wasPlaying = localStorage.getItem('isPlaying') === 'true'; // Check if it was playing
    const playBtn = document.querySelector('.play-pause');
    const playPauseIcon = document.querySelector('#play-pause-icon');

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
  
    if (savedTime) {
      fiyAudio.currentTime = parseFloat(savedTime);
    }
  
    // Play automatically if it was playing before
    if (wasPlaying) {
      fiyAudio.play().catch(error => console.error('Error playing audio:', error));
    }
  });
  