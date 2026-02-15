// Audio Context (initialized on first touch)
let audioCtx = null;
let audioInitialized = false;

function initAudio() {
  if (audioInitialized) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioInitialized = true;
  } catch (e) {
    console.warn('Audio not supported:', e);
  }
}

function playTone(freq, duration, type = 'triangle', volume = 0.15) {
  if (!audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('Audio play failed:', e);
  }
}

// Sound effects
const sounds = {
  tap: () => playTone(440, 0.08, 'sine', 0.1),
  correct: () => {
    playTone(523, 0.1, 'triangle', 0.15);
    setTimeout(() => playTone(659, 0.1, 'triangle', 0.15), 100);
    setTimeout(() => playTone(784, 0.1, 'triangle', 0.15), 200);
  },
  wrong: () => playTone(200, 0.3, 'sawtooth', 0.08),
  celebration: () => {
    const scale = [523, 587, 659, 698, 784, 880, 988, 1047];
    scale.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.12, 'triangle', 0.12), i * 80);
    });
  },
  diceRattle: () => {
    const freq = 300 + Math.random() * 200; // 300-500Hz
    playTone(freq, 0.04, 'sine', 0.08);
  },
  diceLand: () => playTone(150, 0.15, 'sine', 0.12)
};

// Initialize audio on first touch
document.addEventListener('touchstart', initAudio, { once: true });
document.addEventListener('mousedown', initAudio, { once: true });
