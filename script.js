const openBtn = document.getElementById('openBtn');
const letterSection = document.getElementById('letterSection');
const memoriesSection = document.getElementById('memoriesSection');

openBtn.addEventListener('click', () => {
  letterSection.classList.remove('hidden');
  letterSection.scrollIntoView({ behavior: 'smooth' });
  sprinkleHearts();
});

document.getElementById('memoriesBtn').addEventListener('click', () => {
  memoriesSection.classList.remove('hidden');
  memoriesSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('backTop').addEventListener('click', () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

function sprinkleHearts() {
  const layer = document.querySelector('.floating-hearts');
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['♡', '♥', '✿'][Math.floor(Math.random() * 3)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (14 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    layer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}

// Hati kecil bergerak di latar belakang.
setInterval(() => {
  const layer = document.querySelector('.floating-hearts');
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '♡';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (12 + Math.random() * 13) + 'px';
  heart.style.animationDuration = (7 + Math.random() * 5) + 's';
  layer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}, 1100);
