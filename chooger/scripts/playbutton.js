document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const blurWrapper = document.getElementById('blur-wrapper');
    const audioPlayer = document.getElementById('audioPlayer');
    const backgroundVideo = document.getElementById('background-video');
    const linksWrapper = document.getElementById('links-wrapper');

    if (message && blurWrapper && audioPlayer && backgroundVideo && linksWrapper) {
        message.addEventListener('click', () => {
            // Remove visual effects
            backgroundVideo.style.filter = 'none';
            blurWrapper.style.filter = 'none';
            linksWrapper.style.filter = 'none';

            // Hide the "Skip Ad" message
            message.style.display = 'none';
            roblox.style.display = 'none';

            // Play audio and video
            audioPlayer.volume = .4;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });

            backgroundVideo.play().catch(error => {
                console.error('Error playing video:', error);
            });
        });
    } else {
        console.error('One or more elements are missing');
    }
});