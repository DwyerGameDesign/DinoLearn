// Screen Management
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Home button handlers
document.querySelectorAll('.home-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Clean up any active games before going home
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen && activeScreen.id === 'stompScreen') {
      if (typeof cleanupStompGame === 'function') {
        cleanupStompGame();
      }
    }
    showScreen('homeScreen');
  });
});

// Game button handlers
document.querySelectorAll('.game-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const game = btn.dataset.game;
    if (game === 'spell') startSpellGame();
    else if (game === 'count') startCountGame();
    else if (game === 'match') startMatchGame();
    else if (game === 'dice') startDiceGame();
    else if (game === 'letters') startLettersGame();
    else if (game === 'stomp') startStompGame();
    else if (game === 'colors') startColorsGame();
  });
});

// Celebration System
const celebrationTexts = ['ROAR! 🌟', 'AMAZING! 🌟', 'WOW! 🌟', 'DINO-MITE! 🌟', 'SUPER! 🌟'];

function showCelebration(gameType) {
  const overlay = document.getElementById('celebrationOverlay');
  const text = document.getElementById('celebrationText');
  text.textContent = celebrationTexts[Math.floor(Math.random() * celebrationTexts.length)];
  overlay.classList.add('active');
  sounds.celebration();
  createConfetti();
}

function createConfetti() {
  const colors = ['#FFD700', '#e74c3c', '#3498db', '#27ae60', '#9b59b6', '#f39c12', '#1abc9c'];
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-out ${Math.random() * 0.5}s forwards`;
    document.getElementById('celebrationOverlay').appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

document.getElementById('nextBtn').addEventListener('click', () => {
  document.getElementById('celebrationOverlay').classList.remove('active');
  showScreen('homeScreen');
});
