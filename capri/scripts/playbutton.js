document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const blurWrapper = document.getElementById('blur-wrapper');
    const fullWrapper = document.querySelector('.full-wrapper');
    const audioPlayer = document.getElementById('audioPlayer');
    const backgroundVideo = document.getElementById('background-video');
    const linksWrapper = document.getElementById('links-wrapper');
    const profileCard = document.querySelector('.profile-card');
    const nameElement = document.getElementById('name');

    const texts = [
        "<", "C", "C/", "C/-", "C/-\\", "CA", "CA|", "CA|>", "CAP", "CAP|", "CAP|^", "CAPR", "CAPR|", "CAPRI", "CAPR|", "CAPR", "CAP|^", "CAP|", "CAP", "CA|>", "CA|", "CA", "C/-\\", "C/-", "C/", "C"
    ];
    let currentIndex = 0;
    const interval = 350;
    let textInterval;

    function updateText() {
        nameElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    if (message && blurWrapper && fullWrapper && audioPlayer && backgroundVideo && linksWrapper && profileCard && nameElement) {
        message.addEventListener('click', () => {
            backgroundVideo.style.filter = 'none';
            blurWrapper.style.filter = 'none';
            linksWrapper.style.filter = 'none';
            profileCard.style.filter = 'none';
            fullWrapper.style.filter = 'none';

            message.style.display = 'none';

            audioPlayer.volume = 0.1;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });

            backgroundVideo.play().catch(error => {
                console.error('Error playing video:', error);
            });

            textInterval = setInterval(updateText, interval);
        });
    } else {
        console.error('One or more elements are missing');
    }
});
