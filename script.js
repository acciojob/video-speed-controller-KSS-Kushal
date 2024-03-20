const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

video.addEventListener('timeupdate', updateProgressBar);
function updateProgressBar() {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercent}%`;
}

toggle.addEventListener('click', togglePlay);
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

volume.addEventListener('input', handleVolumeChange);
function handleVolumeChange() {
    video.volume = this.value;
}

playbackSpeed.addEventListener('input', handleSpeedChange);
function handleSpeedChange() {
    video.playbackRate = this.value;
}

rewind.addEventListener('click', handleRewind);
function handleRewind() {
    video.currentTime -= 10;
}
skip.addEventListener('click', handleSkip);
function handleSkip() {
    video.currentTime += 25;
}