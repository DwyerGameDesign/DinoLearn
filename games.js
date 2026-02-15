// Word list for spelling game
const SPELL_WORDS = [
  { emoji: '🦕', word: 'DINO', hint: 'Dino' },
  { emoji: '🥚', word: 'EGG', hint: 'Egg' },
  { emoji: '🌋', word: 'LAVA', hint: 'Lava' },
  { emoji: '🦴', word: 'BONE', hint: 'Bone' },
  { emoji: '🪺', word: 'NEST', hint: 'Nest' },
  { emoji: '🪨', word: 'ROCK', hint: 'Rock' },
  { emoji: '🌿', word: 'LEAF', hint: 'Leaf' },
  { emoji: '🌊', word: 'WAVE', hint: 'Wave' },
  { emoji: '☀️', word: 'SUN', hint: 'Sun' },
  { emoji: '🐱', word: 'CAT', hint: 'Cat' },
  { emoji: '🐶', word: 'DOG', hint: 'Dog' },
  { emoji: '🐟', word: 'FISH', hint: 'Fish' },
  { emoji: '🐸', word: 'FROG', hint: 'Frog' },
  { emoji: '🐻', word: 'BEAR', hint: 'Bear' },
  { emoji: '🐝', word: 'BEE', hint: 'Bee' },
  { emoji: '🐛', word: 'BUG', hint: 'Bug' },
  { emoji: '🦆', word: 'DUCK', hint: 'Duck' },
  { emoji: '🐄', word: 'COW', hint: 'Cow' },
  { emoji: '🐷', word: 'PIG', hint: 'Pig' },
  { emoji: '🦊', word: 'FOX', hint: 'Fox' },
  { emoji: '🐔', word: 'HEN', hint: 'Hen' },
  { emoji: '🐴', word: 'PONY', hint: 'Pony' },
  { emoji: '🐑', word: 'LAMB', hint: 'Lamb' },
  { emoji: '🦁', word: 'LION', hint: 'Lion' },
  { emoji: '🌳', word: 'TREE', hint: 'Tree' },
  { emoji: '🌧️', word: 'RAIN', hint: 'Rain' },
  { emoji: '⭐', word: 'STAR', hint: 'Star' },
  { emoji: '🌙', word: 'MOON', hint: 'Moon' },
  { emoji: '🔥', word: 'FIRE', hint: 'Fire' },
  { emoji: '💧', word: 'DROP', hint: 'Drop' },
  { emoji: '🌺', word: 'ROSE', hint: 'Rose' },
  { emoji: '🍂', word: 'FALL', hint: 'Fall' },
  { emoji: '❄️', word: 'SNOW', hint: 'Snow' },
  { emoji: '🌈', word: 'RAIN', hint: 'Rainbow' },
  { emoji: '💨', word: 'WIND', hint: 'Wind' },
  { emoji: '🏔️', word: 'HILL', hint: 'Hill' },
  { emoji: '🌾', word: 'HAY', hint: 'Hay' },
  { emoji: '🍎', word: 'APPLE', hint: 'Apple' },
  { emoji: '🍕', word: 'PIZZA', hint: 'Pizza' },
  { emoji: '🍌', word: 'NANA', hint: 'Banana' },
  { emoji: '🧁', word: 'CAKE', hint: 'Cake' },
  { emoji: '🌽', word: 'CORN', hint: 'Corn' },
  { emoji: '🥛', word: 'MILK', hint: 'Milk' },
  { emoji: '🍇', word: 'GRAPE', hint: 'Grape' },
  { emoji: '🥕', word: 'YAM', hint: 'Yam' },
  { emoji: '🍪', word: 'COOK', hint: 'Cookie' },
  { emoji: '🏠', word: 'HOME', hint: 'Home' },
  { emoji: '⚽', word: 'BALL', hint: 'Ball' },
  { emoji: '📖', word: 'BOOK', hint: 'Book' },
  { emoji: '🚗', word: 'CAR', hint: 'Car' },
  { emoji: '🚌', word: 'BUS', hint: 'Bus' },
  { emoji: '🛏️', word: 'BED', hint: 'Bed' },
  { emoji: '🧸', word: 'TOYS', hint: 'Toys' },
  { emoji: '👑', word: 'KING', hint: 'King' },
  { emoji: '🔔', word: 'BELL', hint: 'Bell' },
  { emoji: '🎈', word: 'POP', hint: 'Balloon' },
  { emoji: '🪁', word: 'KITE', hint: 'Kite' },
  { emoji: '🛶', word: 'BOAT', hint: 'Boat' },
  { emoji: '🎵', word: 'SONG', hint: 'Song' },
  { emoji: '🧊', word: 'ICE', hint: 'Ice' },
  { emoji: '🏖️', word: 'SAND', hint: 'Sand' }
];

// Spelling Game
let spellGame = {
  words: [],
  currentRound: 0,
  currentWord: null,
  currentIndex: 0,
  stars: 0,
  showWordName: true
};

function startSpellGame() {
  const shuffled = [...SPELL_WORDS].sort(() => Math.random() - 0.5).slice(0, 5);
  spellGame.words = shuffled;
  spellGame.currentRound = 0;
  spellGame.stars = 0;
  updateSpellProgress();
  updateSpellStars();
  updateWordNameToggle();
  showSpellRound();
  showScreen('spellScreen');
  
  // Set up toggle button
  const toggleBtn = document.getElementById('wordNameToggle');
  toggleBtn.onclick = toggleWordName;
}

function updateSpellProgress() {
  const container = document.getElementById('spellProgress');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < spellGame.currentRound) dot.classList.add('filled');
    else if (i === spellGame.currentRound) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateSpellStars() {
  document.getElementById('spellStars').textContent = spellGame.stars;
}

function updateWordNameToggle() {
  const toggleBtn = document.getElementById('wordNameToggle');
  if (spellGame.showWordName) {
    toggleBtn.textContent = '👁️';
    toggleBtn.classList.remove('disabled');
    toggleBtn.title = 'Hide word in prompt';
  } else {
    toggleBtn.textContent = '🚫';
    toggleBtn.classList.add('disabled');
    toggleBtn.title = 'Show word in prompt';
  }
}

function toggleWordName() {
  spellGame.showWordName = !spellGame.showWordName;
  updateWordNameToggle();
  updateSpellPrompt();
}

function updateSpellPrompt() {
  const promptEl = document.getElementById('spellPrompt');
  if (spellGame.currentWord) {
    if (spellGame.showWordName) {
      promptEl.textContent = `Spell "${spellGame.currentWord}"!`;
    } else {
      promptEl.textContent = 'Spell it!';
    }
  }
}

function showSpellRound() {
  if (spellGame.currentRound >= spellGame.words.length) {
    showCelebration('spell');
    return;
  }

  const wordData = spellGame.words[spellGame.currentRound];
  spellGame.currentWord = wordData.word;
  spellGame.currentIndex = 0;

  document.getElementById('spellEmoji').textContent = wordData.emoji;
  updateSpellPrompt();

  // Create letter slots
  const slotsContainer = document.getElementById('letterSlots');
  slotsContainer.innerHTML = '';
  for (let i = 0; i < spellGame.currentWord.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'letter-slot';
    slot.dataset.index = i;
    slotsContainer.appendChild(slot);
  }

  // Create letter buttons
  const letters = spellGame.currentWord.split('');
  const distractors = [];
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  while (distractors.length < 3) {
    const letter = allLetters[Math.floor(Math.random() * allLetters.length)];
    if (!letters.includes(letter) && !distractors.includes(letter)) {
      distractors.push(letter);
    }
  }
  const allButtons = [...letters, ...distractors].sort(() => Math.random() - 0.5);

  const buttonsContainer = document.getElementById('letterButtons');
  buttonsContainer.innerHTML = '';
  allButtons.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.addEventListener('click', () => handleLetterClick(letter, btn));
    buttonsContainer.appendChild(btn);
  });
}

function handleLetterClick(letter, btn) {
  if (btn.disabled) return;
  sounds.tap();

  const expectedLetter = spellGame.currentWord[spellGame.currentIndex];
  const slot = document.querySelector(`.letter-slot[data-index="${spellGame.currentIndex}"]`);

  if (letter === expectedLetter) {
    slot.textContent = letter;
    slot.classList.add('filled');
    btn.disabled = true;
    spellGame.currentIndex++;
    sounds.correct();

    if (spellGame.currentIndex >= spellGame.currentWord.length) {
      spellGame.stars++;
      updateSpellStars();
      setTimeout(() => {
        spellGame.currentRound++;
        updateSpellProgress();
        showSpellRound();
      }, 800);
    }
  } else {
    slot.textContent = letter;
    slot.classList.add('wrong');
    sounds.wrong();
    setTimeout(() => {
      slot.textContent = '';
      slot.classList.remove('wrong');
    }, 500);
  }
}

// Counting Game
let countGame = {
  rounds: [],
  currentRound: 0,
  currentCount: 0,
  tappedCount: 0,
  stars: 0
};

function startCountGame() {
  countGame.rounds = [];
  // Generate 5 random numbers between 1 and 10 with better distribution
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffled = [...availableNumbers].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    countGame.rounds.push(shuffled[i]);
  }
  countGame.currentRound = 0;
  countGame.stars = 0;
  updateCountProgress();
  updateCountStars();
  showCountRound();
  showScreen('countScreen');
}

function updateCountProgress() {
  const container = document.getElementById('countProgress');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < countGame.currentRound) dot.classList.add('filled');
    else if (i === countGame.currentRound) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateCountStars() {
  document.getElementById('countStars').textContent = countGame.stars;
}

function showCountRound() {
  if (countGame.currentRound >= countGame.rounds.length) {
    showCelebration('count');
    return;
  }

  countGame.currentCount = countGame.rounds[countGame.currentRound];
  countGame.tappedCount = 0;

  document.getElementById('countPrompt').textContent = 'Tap each egg to count!';
  document.getElementById('numberButtons').style.display = 'none';

  const eggField = document.getElementById('eggField');
  eggField.innerHTML = '';
  for (let i = 0; i < countGame.currentCount; i++) {
    const egg = document.createElement('div');
    egg.className = 'egg-item';
    egg.textContent = '🥚';
    egg.dataset.index = i;
    const label = document.createElement('div');
    label.className = 'egg-count-label';
    label.style.display = 'none';
    egg.appendChild(label);
    egg.addEventListener('click', () => handleEggTap(egg));
    eggField.appendChild(egg);
  }
}

function handleEggTap(egg) {
  if (egg.classList.contains('tapped')) return;
  sounds.tap();
  egg.classList.add('tapped');
  countGame.tappedCount++;
  const label = egg.querySelector('.egg-count-label');
  label.textContent = countGame.tappedCount;
  label.style.display = 'block';

  if (countGame.tappedCount >= countGame.currentCount) {
    setTimeout(() => {
      document.getElementById('countPrompt').textContent = `You counted ${countGame.currentCount}! Pick the number!`;
      showNumberButtons();
    }, 500);
  }
}

function showNumberButtons() {
  const correct = countGame.currentCount;
  const distractors = [];
  const allNumbersPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Remove the correct answer from the pool
  const availableNumbers = allNumbersPool.filter(n => n !== correct);
  // Shuffle and pick 3 random distractors
  const shuffled = [...availableNumbers].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 3; i++) {
    distractors.push(shuffled[i]);
  }
  const allNumbers = [correct, ...distractors].sort(() => Math.random() - 0.5);

  const container = document.getElementById('numberButtons');
  container.style.display = 'flex';
  container.innerHTML = '';
  allNumbers.forEach(num => {
    const btn = document.createElement('button');
    btn.className = 'number-btn';
    btn.textContent = num;
    btn.addEventListener('click', () => handleNumberClick(num, btn));
    container.appendChild(btn);
  });
}

function handleNumberClick(num, btn) {
  if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;

  if (num === countGame.currentCount) {
    btn.classList.add('correct');
    sounds.correct();
    countGame.stars++;
    updateCountStars();
    setTimeout(() => {
      countGame.currentRound++;
      updateCountProgress();
      showCountRound();
    }, 1000);
  } else {
    btn.classList.add('wrong');
    sounds.wrong();
    setTimeout(() => {
      btn.classList.remove('wrong');
    }, 800);
  }
}

// Memory Match Game
const MATCH_EMOJI_POOL = ['🦖', '🦕', '🥚', '🌋', '🦴', '🌿', '🪨', '⭐', '🌊'];
let matchGame = {
  rounds: [],
  currentRound: 0,
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  stars: 0,
  lockInput: false
};

function startMatchGame() {
  matchGame.rounds = [];
  for (let i = 0; i < 3; i++) {
    const shuffled = [...MATCH_EMOJI_POOL].sort(() => Math.random() - 0.5).slice(0, 3);
    matchGame.rounds.push([...shuffled, ...shuffled].sort(() => Math.random() - 0.5));
  }
  matchGame.currentRound = 0;
  matchGame.stars = 0;
  updateMatchProgress();
  updateMatchStars();
  showMatchRound();
  showScreen('matchScreen');
}

function updateMatchProgress() {
  const container = document.getElementById('matchProgress');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < matchGame.currentRound) dot.classList.add('filled');
    else if (i === matchGame.currentRound) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateMatchStars() {
  document.getElementById('matchStars').textContent = matchGame.stars;
}

function showMatchRound() {
  if (matchGame.currentRound >= matchGame.rounds.length) {
    showCelebration('match');
    return;
  }

  matchGame.cards = matchGame.rounds[matchGame.currentRound];
  matchGame.flippedCards = [];
  matchGame.matchedPairs = 0;
  matchGame.lockInput = false;

  const grid = document.getElementById('cardGrid');
  grid.innerHTML = '';
  matchGame.cards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.emoji = emoji;
    const back = document.createElement('div');
    back.className = 'card-back';
    back.textContent = '❓';
    const front = document.createElement('div');
    front.className = 'card-front';
    front.textContent = emoji;
    card.appendChild(back);
    card.appendChild(front);
    card.addEventListener('click', () => handleCardClick(card));
    grid.appendChild(card);
  });
}

function handleCardClick(card) {
  if (matchGame.lockInput || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  matchGame.flippedCards.push(card);
  sounds.tap();

  if (matchGame.flippedCards.length === 2) {
    matchGame.lockInput = true;
    const [card1, card2] = matchGame.flippedCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      sounds.correct();
      matchGame.matchedPairs++;
      matchGame.flippedCards = [];
      matchGame.lockInput = false;

      if (matchGame.matchedPairs >= 3) {
        matchGame.stars++;
        updateMatchStars();
        setTimeout(() => {
          matchGame.currentRound++;
          updateMatchProgress();
          showMatchRound();
        }, 1000);
      }
    } else {
      sounds.wrong();
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        matchGame.flippedCards = [];
        matchGame.lockInput = false;
      }, 800);
    }
  }
}

// Dice Add Game
const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

let diceGame = {
  currentRound: 0,
  die1: 1,
  die2: 1,
  phase: 'roll', // 'roll' or 'answer'
  answered: false,
  stars: 0,
  rollInterval: null
};

function startDiceGame() {
  diceGame.currentRound = 0;
  diceGame.stars = 0;
  diceGame.phase = 'roll';
  diceGame.answered = false;
  updateDiceProgress();
  updateDiceStars();
  showDiceRound();
  showScreen('diceScreen');
}

function updateDiceProgress() {
  const container = document.getElementById('diceProgress');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < diceGame.currentRound) dot.classList.add('filled');
    else if (i === diceGame.currentRound) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateDiceStars() {
  document.getElementById('diceStars').textContent = diceGame.stars;
}

function showDiceRound() {
  if (diceGame.currentRound >= 5) {
    showCelebration('dice');
    return;
  }

  diceGame.phase = 'roll';
  diceGame.answered = false;
  diceGame.die1 = 1;
  diceGame.die2 = 1;

  // Reset UI
  document.getElementById('die1').textContent = DICE_FACES[0];
  document.getElementById('die2').textContent = DICE_FACES[0];
  document.getElementById('die1').classList.remove('rolling', 'landed');
  document.getElementById('die2').classList.remove('rolling', 'landed');
  
  const rollBtn = document.getElementById('rollBtn');
  rollBtn.classList.remove('hidden');
  rollBtn.style.display = 'block';
  
  document.getElementById('diceAnswerButtons').style.display = 'none';
  document.getElementById('diceEquation').classList.remove('visible');
  document.getElementById('diceEquation').innerHTML = '';
  
  const dino = document.getElementById('diceDino');
  dino.className = 'dice-dino';
  dino.textContent = '🦖';

  // Set up roll button
  rollBtn.onclick = rollDice;
}

function rollDice() {
  const rollBtn = document.getElementById('rollBtn');
  rollBtn.classList.add('hidden');
  setTimeout(() => {
    rollBtn.style.display = 'none';
  }, 200);

  const die1El = document.getElementById('die1');
  const die2El = document.getElementById('die2');
  const dino = document.getElementById('diceDino');

  // Start rolling animation
  die1El.classList.add('rolling');
  die2El.classList.add('rolling');
  dino.className = 'dice-dino excited';

  // Play rattling sound
  let rattleCount = 0;
  const rattleInterval = setInterval(() => {
    sounds.diceRattle();
    rattleCount++;
    if (rattleCount >= 12) {
      clearInterval(rattleInterval);
    }
  }, 80);

  // Randomize dice faces during roll
  let rollFrames = 0;
  const rollInterval = setInterval(() => {
    const random1 = Math.floor(Math.random() * 6);
    const random2 = Math.floor(Math.random() * 6);
    die1El.textContent = DICE_FACES[random1];
    die2El.textContent = DICE_FACES[random2];
    rollFrames++;
    if (rollFrames >= 12) {
      clearInterval(rollInterval);
      
      // Set final values
      diceGame.die1 = Math.floor(Math.random() * 6) + 1;
      diceGame.die2 = Math.floor(Math.random() * 6) + 1;
      
      die1El.textContent = DICE_FACES[diceGame.die1 - 1];
      die2El.textContent = DICE_FACES[diceGame.die2 - 1];
      
      // Landing animation
      die1El.classList.remove('rolling');
      die2El.classList.remove('rolling');
      die1El.classList.add('landed');
      die2El.classList.add('landed');
      
      sounds.diceLand();
      dino.className = 'dice-dino';
      
      // Show equation after landing
      setTimeout(() => {
        showEquation();
      }, 400);
    }
  }, 80);
}

function showEquation() {
  const equationEl = document.getElementById('diceEquation');
  const sum = diceGame.die1 + diceGame.die2;
  
  equationEl.innerHTML = `
    <span class="equation-number">${diceGame.die1}</span>
    <span class="equation-symbol">+</span>
    <span class="equation-number">${diceGame.die2}</span>
    <span class="equation-symbol">=</span>
    <span class="equation-question" id="equationQuestion">?</span>
  `;
  
  equationEl.classList.add('visible');
  diceGame.phase = 'answer';
  
  setTimeout(() => {
    showAnswerButtons(sum);
  }, 300);
}

function generateChoices(correctSum) {
  const choices = new Set([correctSum]);
  const offsets = [-2, -1, 1, 2, -3, 3];
  const shuffledOffsets = offsets.sort(() => Math.random() - 0.5);

  for (const offset of shuffledOffsets) {
    if (choices.size >= 4) break;
    const distractor = correctSum + offset;
    if (distractor >= 2 && distractor <= 12 && !choices.has(distractor)) {
      choices.add(distractor);
    }
  }

  while (choices.size < 4) {
    const n = Math.floor(Math.random() * 11) + 2; // 2-12
    choices.add(n);
  }

  return [...choices].sort(() => Math.random() - 0.5);
}

function showAnswerButtons(correctSum) {
  const choices = generateChoices(correctSum);
  const container = document.getElementById('diceAnswerButtons');
  container.style.display = 'flex';
  container.innerHTML = '';
  
  choices.forEach(num => {
    const btn = document.createElement('button');
    btn.className = 'dice-answer-btn';
    btn.textContent = num;
    btn.addEventListener('click', () => handleDiceAnswer(num, btn, correctSum));
    container.appendChild(btn);
  });
}

function handleDiceAnswer(num, btn, correctSum) {
  if (diceGame.answered || btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
  
  if (num === correctSum) {
    diceGame.answered = true;
    btn.classList.add('correct');
    sounds.correct();
    
    // Replace ? with answer
    const questionEl = document.getElementById('equationQuestion');
    questionEl.classList.remove('equation-question');
    questionEl.classList.add('equation-answer');
    questionEl.textContent = correctSum;
    
    // Dino happy animation
    const dino = document.getElementById('diceDino');
    dino.className = 'dice-dino happy';
    
    diceGame.stars++;
    updateDiceStars();
    
    setTimeout(() => {
      diceGame.currentRound++;
      updateDiceProgress();
      showDiceRound();
    }, 1000);
  } else {
    btn.classList.add('wrong');
    sounds.wrong();
    
    // Dino sad animation
    const dino = document.getElementById('diceDino');
    dino.className = 'dice-dino sad';
    
    setTimeout(() => {
      btn.classList.remove('wrong');
      dino.className = 'dice-dino';
    }, 800);
  }
}
