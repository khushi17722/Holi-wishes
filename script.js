
function createSplash() {
    const colors = ['#ff0000', '#ff9900', '#33cc33', '#3399ff', '#9900cc'];
    const splash = document.createElement('div');
    splash.classList.add('color-splash');
    splash.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(splash);
    splash.style.left = Math.random() * window.innerWidth + 'px';
    splash.style.top = Math.random() * window.innerHeight + 'px';

    setTimeout(() => {
        splash.remove();
    }, 2000);
}

setInterval(createSplash, 300);

function showWishes() {
    document.querySelector('.message').style.display = 'block';
    document.getElementById('wishBtn').style.display = 'none';
}

function showWishes() {
    // Display wishes
    document.querySelector('.message').style.display = 'block';

    // Play the Holi song
    let audio = document.getElementById('holiSong');
    audio.play();
}
