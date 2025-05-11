// script.js
function updateDateCounter() {
    // Set the start date (April 7, 2025)
    const startDate = new Date('2025-04-07');
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').textContent = daysDiff;
}

updateDateCounter();
setInterval(updateDateCounter, 24 * 60 * 60 * 1000);

// Envelope open logic
const envelope = document.getElementById('envelope');
const letterContainer = document.getElementById('letter-container');

envelope.addEventListener('click', function() {
    envelope.classList.add('open');
    setTimeout(function() {
        envelope.style.display = 'none';
        letterContainer.classList.add('show');
    }, 500);
});

// Dog woof effect
const dogOverlay = document.getElementById('dog-overlay');
const woofText = document.getElementById('woof-text');

dogOverlay.addEventListener('click', function() {
    woofText.classList.add('show');
    setTimeout(function() {
        woofText.classList.remove('show');
    }, 1000);
});

const catOverlay = document.getElementById('cat-overlay');
const meowText = document.getElementById('meow-text');

catOverlay.addEventListener('click', function() {
    	meowText.classList.add('show');
	setTimeout(function() {
		meowText.classList.remove('show');
	}, 1000);
});

// 3D photo hover and love hearts
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('mousemove', e => {
        const rect = photo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -20; // tilt X
        const ry = ((x / rect.width) - 0.5) * 20;  // tilt Y
        photo.classList.add('photo-3d');
        photo.style.setProperty('--rx', rx + 'deg');
        photo.style.setProperty('--ry', ry + 'deg');
    });
    photo.addEventListener('mouseleave', () => {
        photo.classList.remove('photo-3d');
        photo.style.setProperty('--rx', '0deg');
        photo.style.setProperty('--ry', '0deg');
    });
    photo.addEventListener('mouseenter', () => {
        photo.classList.add('photo-3d');
    });
    photo.addEventListener('click', e => {
        const rect = photo.getBoundingClientRect();
        const containerRect = letterContainer.getBoundingClientRect();
        for (let i = 0; i < 7; i++) {
            const heart = document.createElement('span');
            heart.className = 'love-heart';
            heart.textContent = '❤️';
            // Randomize heart position and direction
            const offsetX = Math.random() * rect.width * 0.6 + rect.width * 0.2;
            const offsetY = Math.random() * rect.height * 0.6 + rect.height * 0.2;
            heart.style.left = (rect.left - containerRect.left + offsetX - 16) + 'px';
            heart.style.top = (rect.top - containerRect.top + offsetY - 16) + 'px';
            heart.style.transform += ` scale(${0.8 + Math.random() * 0.6}) rotate(${Math.random()*40-20}deg)`;
            letterContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 1300);
        }
    });
});
	
