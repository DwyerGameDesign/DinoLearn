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

// Letter Match Game (Lowercase to Uppercase)
const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

let lettersGame = {
  currentRound: 0,
  letters: [],
  currentLetter: null,
  stars: 0
};

function startLettersGame() {
  // Pick 5 random letters
  const shuffled = [...ALL_LETTERS].sort(() => Math.random() - 0.5).slice(0, 5);
  lettersGame.letters = shuffled;
  lettersGame.currentRound = 0;
  lettersGame.stars = 0;
  updateLettersProgress();
  updateLettersStars();
  showLettersRound();
  showScreen('lettersScreen');
}

function updateLettersProgress() {
  const container = document.getElementById('lettersProgress');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < lettersGame.currentRound) dot.classList.add('filled');
    else if (i === lettersGame.currentRound) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateLettersStars() {
  document.getElementById('lettersStars').textContent = lettersGame.stars;
}

function showLettersRound() {
  if (lettersGame.currentRound >= lettersGame.letters.length) {
    showCelebration('letters');
    return;
  }

  lettersGame.currentLetter = lettersGame.letters[lettersGame.currentRound];
  const correctUpper = lettersGame.currentLetter.toUpperCase();

  // Display lowercase letter
  document.getElementById('lettersLowercase').textContent = lettersGame.currentLetter;

  // Generate distractors (3 random uppercase letters that aren't the correct one)
  const distractors = [];
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  while (distractors.length < 3) {
    const letter = upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
    if (letter !== correctUpper && !distractors.includes(letter)) {
      distractors.push(letter);
    }
  }

  // Combine correct answer with distractors and shuffle
  const allChoices = [correctUpper, ...distractors].sort(() => Math.random() - 0.5);

  // Create buttons
  const container = document.getElementById('lettersUppercaseButtons');
  container.innerHTML = '';
  allChoices.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'letters-uppercase-btn';
    btn.textContent = letter;
    btn.addEventListener('click', () => handleLetterMatch(letter, btn, correctUpper));
    container.appendChild(btn);
  });
}

function handleLetterMatch(letter, btn, correctUpper) {
  if (btn.disabled || btn.classList.contains('correct') || btn.classList.contains('wrong')) return;

  sounds.tap();

  if (letter === correctUpper) {
    btn.classList.add('correct');
    sounds.correct();
    lettersGame.stars++;
    updateLettersStars();
    setTimeout(() => {
      lettersGame.currentRound++;
      updateLettersProgress();
      showLettersRound();
    }, 1000);
  } else {
    btn.classList.add('wrong');
    sounds.wrong();
    setTimeout(() => {
      btn.classList.remove('wrong');
    }, 800);
  }
}

// Dino Stomp Game
const TARGET_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'X'];
const CONFUSABLE_PAIRS = {
  'B': ['D', 'P', 'R'],
  'C': ['G', 'O'],
  'D': ['B', 'O', 'P'],
  'E': ['F'],
  'F': ['E', 'P'],
  'G': ['C', 'O'],
  'K': ['X'],
  'M': ['N'],
  'N': ['M'],
  'O': ['C', 'D', 'G'],
  'P': ['B', 'D', 'F', 'R'],
  'R': ['B', 'P'],
  'X': ['K'],
};

const CARD_COLORS = [
  { bg: 'linear-gradient(135deg, #f5e6c8, #fdf6e3)', text: '#2c1810' },
  { bg: 'linear-gradient(135deg, #d4efdf, #eafaf1)', text: '#1a5c2a' },
  { bg: 'linear-gradient(135deg, #d6eaf8, #ebf5fb)', text: '#1a3a5c' },
  { bg: 'linear-gradient(135deg, #f9e79f, #fef9e7)', text: '#7d6608' },
  { bg: 'linear-gradient(135deg, #fadbd8, #fdedec)', text: '#7a1a1a' },
];

const SPAWN_CONFIG = {
  easy: { spawnInterval: 1800, cardLifespan: 2800, maxSimultaneous: 3 },
  medium: { spawnInterval: 1400, cardLifespan: 2400, maxSimultaneous: 4 },
  hard: { spawnInterval: 1000, cardLifespan: 2000, maxSimultaneous: 5 },
};

let stompState = {
  targetLetter: null,
  distractors: [],
  timeRemaining: 60,
  correctHits: 0,
  wrongHits: 0,
  totalTargetsSpawned: 0,
  missedTargets: 0,
  grid: Array(9).fill(null),
  spawnTimer: null,
  gameTimer: null,
  phase: 'countdown',
  startTime: null,
  lastSpawnTime: 0
};

function startStompGame() {
  // Reset state
  stompState.targetLetter = TARGET_LETTERS[Math.floor(Math.random() * TARGET_LETTERS.length)];
  stompState.distractors = pickDistractors(stompState.targetLetter, 5);
  stompState.timeRemaining = 60;
  stompState.correctHits = 0;
  stompState.wrongHits = 0;
  stompState.totalTargetsSpawned = 0;
  stompState.missedTargets = 0;
  stompState.grid = Array(9).fill(null);
  stompState.phase = 'countdown';
  stompState.startTime = null;
  stompState.lastSpawnTime = 0;

  // Clear timers
  if (stompState.spawnTimer) clearTimeout(stompState.spawnTimer);
  if (stompState.gameTimer) clearInterval(stompState.gameTimer);

  // Update UI
  document.getElementById('targetBadge').textContent = stompState.targetLetter;
  document.getElementById('stompCount').textContent = '0';
  document.getElementById('stompStars').textContent = '0';
  document.getElementById('timerDisplay').textContent = '⏱️ 60s';
  document.getElementById('timerDisplay').classList.remove('urgent');
  document.getElementById('stompResultsOverlay').style.display = 'none';

  // Build grid
  const grid = document.getElementById('stompGrid');
  grid.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const slot = document.createElement('div');
    slot.className = 'bush-slot';
    slot.dataset.index = i;
    const decoration = document.createElement('div');
    decoration.className = 'bush-decoration';
    decoration.textContent = '🌿';
    slot.appendChild(decoration);
    grid.appendChild(slot);
  }

  showScreen('stompScreen');
  startCountdown();
}

function pickDistractors(target, count = 5) {
  const confusable = CONFUSABLE_PAIRS[target] || [];
  const available = TARGET_LETTERS.filter(l => l !== target && !confusable.includes(l));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function startCountdown() {
  const overlay = document.getElementById('countdownOverlay');
  overlay.style.display = 'flex';
  
  function showNumber(num) {
    overlay.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'countdown-number';
    div.textContent = num;
    overlay.appendChild(div);
    if (audioCtx) sounds.countdownBeat();
  }

  function showGo() {
    overlay.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'countdown-go';
    div.textContent = 'GO! 🦖';
    overlay.appendChild(div);
    if (audioCtx) sounds.countdownGo();
    
    setTimeout(() => {
      overlay.style.display = 'none';
      startGame();
    }, 600);
  }

  setTimeout(() => {
    showNumber(3);
    setTimeout(() => {
      showNumber(2);
      setTimeout(() => {
        showNumber(1);
        setTimeout(() => {
          showGo();
        }, 800);
      }, 800);
    }, 800);
  }, 500);
}

function startGame() {
  stompState.phase = 'playing';
  stompState.startTime = Date.now();
  stompState.lastSpawnTime = Date.now();

  // Start timer
  stompState.gameTimer = setInterval(() => {
    const elapsed = (Date.now() - stompState.startTime) / 1000;
    stompState.timeRemaining = Math.max(0, 60 - elapsed);
    
    const timerEl = document.getElementById('timerDisplay');
    const seconds = Math.ceil(stompState.timeRemaining);
    timerEl.textContent = `⏱️ ${seconds}s`;
    
    if (seconds <= 10 && !timerEl.classList.contains('urgent')) {
      timerEl.classList.add('urgent');
      if (audioCtx) sounds.timerTick();
    } else if (seconds <= 10 && Math.floor(stompState.timeRemaining) !== Math.floor((stompState.timeRemaining + 0.1))) {
      if (audioCtx) sounds.timerTick();
    }

    if (stompState.timeRemaining <= 0) {
      endGame();
    }
  }, 100);

  // Start spawning
  spawnNextCard();
}

function getCurrentPhase() {
  const elapsed = (Date.now() - stompState.startTime) / 1000;
  if (elapsed < 20) return SPAWN_CONFIG.easy;
  if (elapsed < 40) return SPAWN_CONFIG.medium;
  return SPAWN_CONFIG.hard;
}

function spawnNextCard() {
  if (stompState.phase !== 'playing') return;

  const phase = getCurrentPhase();
  const activeCards = stompState.grid.filter(c => c !== null).length;

  if (activeCards < phase.maxSimultaneous) {
    const emptySlots = [];
    for (let i = 0; i < 9; i++) {
      if (stompState.grid[i] === null) emptySlots.push(i);
    }

    if (emptySlots.length > 0) {
      const slotIndex = emptySlots[Math.floor(Math.random() * emptySlots.length)];
      const isTarget = Math.random() < 0.38;
      const letter = isTarget ? stompState.targetLetter : 
                     stompState.distractors[Math.floor(Math.random() * stompState.distractors.length)];
      
      if (isTarget) stompState.totalTargetsSpawned++;

      spawnCard(slotIndex, letter, isTarget, phase.cardLifespan);
    }
  }

  const nextPhase = getCurrentPhase();
  stompState.spawnTimer = setTimeout(() => spawnNextCard(), nextPhase.spawnInterval);
}

function spawnCard(slotIndex, letter, isTarget, lifespan) {
  const slot = document.querySelector(`.bush-slot[data-index="${slotIndex}"]`);
  if (!slot || stompState.grid[slotIndex] !== null) return;

  const card = document.createElement('div');
  card.className = 'letter-card';
  card.textContent = letter;
  card.dataset.letter = letter;
  card.dataset.isTarget = isTarget;
  
  const color = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
  card.style.background = color.bg;
  card.style.color = color.text;

  card.addEventListener('click', () => handleCardTap(card, slotIndex, isTarget));
  
  slot.appendChild(card);
  if (audioCtx) sounds.cardPop();

  const cardObj = {
    letter,
    isTarget,
    element: card,
    timeoutId: setTimeout(() => {
      if (stompState.grid[slotIndex] === cardObj) {
        card.classList.add('sinking');
        if (audioCtx) sounds.cardSink();
        if (isTarget) stompState.missedTargets++;
        setTimeout(() => {
          if (card.parentNode) card.remove();
          stompState.grid[slotIndex] = null;
        }, 300);
      }
    }, lifespan),
    spawnedAt: Date.now()
  };

  stompState.grid[slotIndex] = cardObj;
}

function handleCardTap(card, slotIndex, isTarget) {
  if (stompState.phase !== 'playing' || !stompState.grid[slotIndex]) return;

  const cardObj = stompState.grid[slotIndex];
  if (cardObj.element !== card) return;

  // Clear the timeout
  clearTimeout(cardObj.timeoutId);

  if (isTarget) {
    card.classList.add('stomped');
    if (audioCtx) sounds.stompCorrect();
    stompState.correctHits++;
    document.getElementById('stompCount').textContent = stompState.correctHits;
    document.getElementById('stompStars').textContent = stompState.correctHits;
    
    spawnScoreParticle(card);
    
    setTimeout(() => {
      if (card.parentNode) card.remove();
      stompState.grid[slotIndex] = null;
    }, 400);
  } else {
    card.classList.add('wrong-stomp');
    if (audioCtx) sounds.wrong();
    stompState.wrongHits++;
    
    spawnWrongParticle(card);
    
    setTimeout(() => {
      card.classList.remove('wrong-stomp');
    }, 400);
  }
}

function spawnScoreParticle(card) {
  const particle = document.createElement('div');
  particle.className = 'score-particle';
  particle.textContent = '+1 ⭐';
  const rect = card.getBoundingClientRect();
  particle.style.left = rect.left + rect.width / 2 + 'px';
  particle.style.top = rect.top + 'px';
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 800);
}

function spawnWrongParticle(card) {
  const particle = document.createElement('div');
  particle.className = 'score-particle';
  particle.textContent = '✗';
  particle.style.color = '#e74c3c';
  const rect = card.getBoundingClientRect();
  particle.style.left = rect.left + rect.width / 2 + 'px';
  particle.style.top = rect.top + 'px';
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 600);
}

function cleanupStompGame() {
  // Stop all timers
  if (stompState.gameTimer) {
    clearInterval(stompState.gameTimer);
    stompState.gameTimer = null;
  }
  if (stompState.spawnTimer) {
    clearTimeout(stompState.spawnTimer);
    stompState.spawnTimer = null;
  }
  
  // Clear all card timeouts
  stompState.grid.forEach((cardObj, index) => {
    if (cardObj) {
      clearTimeout(cardObj.timeoutId);
      if (cardObj.element && cardObj.element.parentNode) {
        cardObj.element.remove();
      }
      stompState.grid[index] = null;
    }
  });
  
  // Set phase to stopped
  stompState.phase = 'stopped';
}

function endGame() {
  stompState.phase = 'ended';
  clearInterval(stompState.gameTimer);
  clearTimeout(stompState.spawnTimer);

  // Sink all remaining cards
  stompState.grid.forEach((cardObj, index) => {
    if (cardObj) {
      clearTimeout(cardObj.timeoutId);
      cardObj.element.classList.add('sinking');
      if (audioCtx) sounds.cardSink();
      setTimeout(() => {
        if (cardObj.element.parentNode) cardObj.element.remove();
        stompState.grid[index] = null;
      }, 300);
    }
  });

  setTimeout(() => {
    showResults();
  }, 500);
}

function getStarRating(correctHits, totalTargetsSpawned) {
  if (totalTargetsSpawned === 0) return { stars: 1, text: 'KEEP GOING!' };
  const hitRate = correctHits / totalTargetsSpawned;
  if (hitRate >= 0.8) return { stars: 3, text: 'DINO-MITE!' };
  if (hitRate >= 0.5) return { stars: 2, text: 'GREAT JOB!' };
  if (hitRate >= 0.2) return { stars: 1, text: 'GOOD TRY!' };
  return { stars: 1, text: 'KEEP GOING!' };
}

function showResults() {
  const rating = getStarRating(stompState.correctHits, stompState.totalTargetsSpawned);
  
  document.getElementById('resultsCount').textContent = stompState.correctHits;
  
  const starsEl = document.getElementById('resultsStars');
  starsEl.innerHTML = '';
  for (let i = 0; i < rating.stars; i++) {
    const star = document.createElement('span');
    star.textContent = '⭐';
    star.style.animation = `titleBounce ${0.3 + i * 0.3}s ease-out`;
    starsEl.appendChild(star);
  }
  
  document.getElementById('resultsRating').textContent = rating.text;
  
  const overlay = document.getElementById('stompResultsOverlay');
  overlay.style.display = 'flex';

  // Play rating sound
  if (rating.stars === 3) {
    if (audioCtx) {
      sounds.celebration();
      createConfetti();
    }
  } else if (rating.stars === 2) {
    if (audioCtx) sounds.ratingGreat();
  } else {
    if (audioCtx) sounds.ratingEncourage();
  }

  // Wire up buttons
  document.getElementById('playAgainBtn').onclick = startStompGame;
  document.getElementById('stompHomeBtn').onclick = () => {
    overlay.style.display = 'none';
    cleanupStompGame();
    showScreen('homeScreen');
  };
}

// Dino Colors Game
const COLOR_DATA = [
  {
    name: 'RED',
    hex: '#e74c3c',
    dark: '#c0392b',
    bgGradient: 'radial-gradient(ellipse at center, #e74c3c 0%, #7a1a1a 100%)',
    rewardEmoji: ['🍎', '🫀', '❤️', '🌹', '🍓', '🦀', '🚒', '🎈', '🍒', '🐞'],
  },
  {
    name: 'BLUE',
    hex: '#3498db',
    dark: '#2171a6',
    bgGradient: 'radial-gradient(ellipse at center, #3498db 0%, #0d1f3c 100%)',
    rewardEmoji: ['🦋', '🐳', '💎', '🫐', '🌊', '🧢', '💙', '🐟', '🔵', '🌀'],
  },
  {
    name: 'GREEN',
    hex: '#2ecc71',
    dark: '#1ea65a',
    bgGradient: 'radial-gradient(ellipse at center, #2ecc71 0%, #0d3b1e 100%)',
    rewardEmoji: ['🐸', '🌿', '🥒', '🐊', '🍀', '🌲', '🥝', '🦎', '💚', '🥦'],
  },
  {
    name: 'YELLOW',
    hex: '#f1c40f',
    dark: '#d4ac0d',
    bgGradient: 'radial-gradient(ellipse at center, #f1c40f 0%, #5a4a05 100%)',
    rewardEmoji: ['⭐', '🌻', '🍋', '🐝', '🌙', '🧀', '💛', '🌽', '🔔', '🐥'],
  },
  {
    name: 'PURPLE',
    hex: '#9b59b6',
    dark: '#7d3c98',
    bgGradient: 'radial-gradient(ellipse at center, #9b59b6 0%, #2c0d3e 100%)',
    rewardEmoji: ['🍇', '🔮', '🦄', '👾', '💜', '🍆', '☂️', '🪻', '🎆', '🌂'],
  },
  {
    name: 'ORANGE',
    hex: '#e67e22',
    dark: '#cf6d17',
    bgGradient: 'radial-gradient(ellipse at center, #e67e22 0%, #4a2a0a 100%)',
    rewardEmoji: ['🍊', '🥕', '🦊', '🏀', '🧡', '🐅', '🍑', '🎃', '🔶', '🥧'],
  },
  {
    name: 'PINK',
    hex: '#e91e90',
    dark: '#c2185b',
    bgGradient: 'radial-gradient(ellipse at center, #e91e90 0%, #3e0a24 100%)',
    rewardEmoji: ['🌸', '🦩', '💗', '🎀', '🩷', '🌺', '🐷', '💖', '🧁', '👛'],
  },
  {
    name: 'BROWN',
    hex: '#8B5E3C',
    dark: '#6d4a2e',
    bgGradient: 'radial-gradient(ellipse at center, #8B5E3C 0%, #1a1208 100%)',
    rewardEmoji: ['🐻', '🍫', '🏈', '🌰', '🤎', '🪵', '🍩', '🐿️', '🍂', '🥜'],
  },
  {
    name: 'BLACK',
    hex: '#2c2c2c',
    dark: '#1a1a1a',
    bgGradient: 'radial-gradient(ellipse at center, #3a3a3a 0%, #0a0a0a 100%)',
    rewardEmoji: ['🖤', '🐈‍⬛', '🕷️', '🎱', '🦇', '🌑', '♠️', '🎩', '⬛', '🏴'],
  },
  {
    name: 'WHITE',
    hex: '#f5f5f5',
    dark: '#d5d5d5',
    bgGradient: 'radial-gradient(ellipse at center, #f0f0f0 0%, #888888 100%)',
    rewardEmoji: ['☁️', '🤍', '⛄', '🕊️', '🥚', '🦢', '⬜', '🐑', '❄️', '🦷'],
  },
];

const COLOR_CONFUSABLES = {
  'RED': ['ORANGE', 'PINK'],
  'ORANGE': ['RED', 'YELLOW', 'BROWN'],
  'YELLOW': ['ORANGE'],
  'GREEN': [],
  'BLUE': ['PURPLE'],
  'PURPLE': ['BLUE', 'PINK'],
  'PINK': ['RED', 'PURPLE'],
  'BROWN': ['BLACK', 'ORANGE'],
  'BLACK': ['BROWN'],
  'WHITE': ['YELLOW'],
};

const REWARD_STYLES = ['rain', 'burst', 'float'];

let colorsState = {
  rounds: [],
  currentRound: 0,
  score: 0,
  wrongAttempts: 0,
  phase: 'choosing',
  rewardStyle: 'rain',
  collectedColors: [],
  burstOrigin: null, // {x: number, y: number} for burst animation origin
};

function startColorsGame() {
  const shuffled = [...COLOR_DATA].sort(() => Math.random() - 0.5);
  colorsState.rounds = shuffled.slice(0, 8);
  colorsState.currentRound = 0;
  colorsState.score = 0;
  colorsState.collectedColors = [];
  
  createStarField();
  updateRainbowTracker();
  updateColorsStars();
  showScreen('colorsScreen');
  startColorsRound();
}

function createStarField() {
  const field = document.getElementById('starField');
  field.innerHTML = '';
  for (let i = 0; i < 35; i++) {
    const star = document.createElement('div');
    star.className = 'bg-star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.animationDelay = Math.random() * 3 + 's';
    field.appendChild(star);
  }
}

function startColorsRound() {
  if (colorsState.currentRound >= colorsState.rounds.length) {
    showColorsCelebration();
    return;
  }
  
  colorsState.wrongAttempts = 0;
  colorsState.phase = 'choosing';
  colorsState.burstOrigin = null; // Reset burst origin
  const currentColor = colorsState.rounds[colorsState.currentRound];
  
  const screen = document.getElementById('colorsScreen');
  screen.style.background = 'radial-gradient(ellipse at top, #1a1a3e 0%, #0d0d1f 100%)';
  
  const wordDisplay = document.getElementById('colorWordDisplay');
  wordDisplay.textContent = currentColor.name;
  wordDisplay.style.color = 'white';
  wordDisplay.classList.add('waiting');
  
  const dino = document.getElementById('colorsDino');
  dino.style.animation = 'dinoIdle 2.5s ease-in-out infinite';
  
  if (audioCtx) sounds.instructionChime();
  
  showSplats(currentColor);
}

function showSplats(correctColor) {
  const row = document.getElementById('splatRow');
  row.innerHTML = '';
  
  const colors = pickDistractorColors(correctColor);
  
  colors.forEach((color, i) => {
    const btn = document.createElement('button');
    btn.className = 'splat-btn';
    btn.style.background = color.hex;
    btn.dataset.color = color.name;
    btn.dataset.isCorrect = color.name === correctColor.name ? 'true' : 'false';
    btn.style.animationDelay = (i * 0.1) + 's';
    btn.classList.add('popping-in');
    
    // Add visual indicator - small colored circle or keep background colored
    // The background color shows the color, matching letter button style
    btn.style.borderColor = 'var(--bark)';
    
    btn.addEventListener('click', () => handleSplatClick(btn, correctColor));
    row.appendChild(btn);
  });
}

function pickDistractorColors(correctColor) {
  const confusable = COLOR_CONFUSABLES[correctColor.name] || [];
  const available = COLOR_DATA.filter(c =>
    c.name !== correctColor.name && !confusable.includes(c.name)
  );
  const shuffled = available.sort(() => Math.random() - 0.5);
  const distractors = shuffled.slice(0, 3);
  const palette = [correctColor, ...distractors];
  return palette.sort(() => Math.random() - 0.5);
}

function handleSplatClick(btn, correctColor) {
  if (btn.classList.contains('correct-splat') || btn.classList.contains('wrong-splat')) return;
  
  const isCorrect = btn.dataset.isCorrect === 'true';
  
  if (isCorrect) {
    colorsState.phase = 'reward';
    btn.classList.add('correct-splat');
    
    // Store button position for burst animation
    const rect = btn.getBoundingClientRect();
    const container = document.getElementById('rewardContainer');
    const containerRect = container.getBoundingClientRect();
    colorsState.burstOrigin = {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    };
    
    // Add check mark
    const checkMark = document.createElement('div');
    checkMark.className = 'splat-check';
    checkMark.textContent = '✓';
    btn.appendChild(checkMark);
    
    document.querySelectorAll('.splat-btn').forEach(b => {
      if (b !== btn) {
        b.classList.add('fading');
      }
    });
    
    if (audioCtx) sounds.paintSploosh();
    
    setTimeout(() => {
      showReward(correctColor);
    }, 400);
  } else {
    btn.classList.add('wrong-splat');
    colorsState.wrongAttempts++;
    
    if (audioCtx) sounds.wrong();
    
    if (colorsState.wrongAttempts >= 3) {
      const wordDisplay = document.getElementById('colorWordDisplay');
      wordDisplay.style.color = correctColor.hex;
      wordDisplay.style.transition = 'color 0.5s';
    }
    
    setTimeout(() => {
      btn.classList.remove('wrong-splat');
    }, 400);
  }
}

function showReward(color) {
  const screen = document.getElementById('colorsScreen');
  screen.style.background = color.bgGradient;
  
  const wordDisplay = document.getElementById('colorWordDisplay');
  wordDisplay.style.color = color.hex;
  wordDisplay.style.transform = 'scale(1.15)';
  wordDisplay.classList.remove('waiting');
  
  const dino = document.getElementById('colorsDino');
  dino.style.animation = 'dinoIdle 0.3s ease-in-out infinite';
  
  colorsState.rewardStyle = REWARD_STYLES[Math.floor(Math.random() * REWARD_STYLES.length)];
  
  // Ensure we have the full color object with rewardEmoji
  const fullColor = COLOR_DATA.find(c => c.name === color.name) || color;
  startEmojiReward(fullColor);
  
  if (audioCtx) {
    let pingCount = 0;
    const pingInterval = setInterval(() => {
      if (pingCount >= 12) {
        clearInterval(pingInterval);
        return;
      }
      const freq = 600 + Math.random() * 600;
      playTone(freq, 0.06, 'sine', 0.04);
      pingCount++;
    }, 200);
  }
  
  setTimeout(() => {
    screen.style.background = 'radial-gradient(ellipse at top, #1a1a3e 0%, #0d0d1f 100%)';
    wordDisplay.style.color = 'white';
    wordDisplay.style.transform = 'scale(1)';
    
    colorsState.collectedColors.push(color);
    updateRainbowTracker();
    
    if (audioCtx) {
      const roundNum = colorsState.currentRound;
      const freq = 600 + roundNum * 80;
      playTone(freq, 0.1, 'triangle', 0.1);
    }
    
    colorsState.score++;
    updateColorsStars();
    colorsState.currentRound++;
    
    setTimeout(() => {
      startColorsRound();
    }, 600);
  }, 3200);
}

function startEmojiReward(color) {
  const container = document.getElementById('rewardContainer');
  if (!container) {
    console.error('rewardContainer not found');
    return;
  }
  container.innerHTML = '';
  
  const emojis = color.rewardEmoji;
  if (!emojis || !Array.isArray(emojis) || emojis.length === 0) {
    console.error('No emojis found for color:', color.name, color);
    return;
  }
  
  let spawned = 0;
  const total = 18;
  
  const spawnInterval = setInterval(() => {
    if (spawned >= total) {
      clearInterval(spawnInterval);
      return;
    }
    
    const emoji = document.createElement('div');
    emoji.className = 'reward-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Set CSS variables first, before adding classes
    if (colorsState.rewardStyle === 'rain') {
      emoji.style.left = (10 + Math.random() * 80) + '%';
      const duration = 2 + Math.random() * 1.5;
      const delay = Math.random() * 0.3;
      const wobble = (Math.random() - 0.5) * 60;
      const spin = Math.random() * 360;
      emoji.style.setProperty('--wobble', wobble + 'px');
      emoji.style.setProperty('--spin', spin + 'deg');
      emoji.style.animationDuration = duration + 's';
      emoji.style.animationDelay = delay + 's';
    } else if (colorsState.rewardStyle === 'burst') {
      const angle = (Math.PI * 2 * spawned) / total;
      const distance = 150 + Math.random() * 100;
      emoji.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
      emoji.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
      emoji.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
      emoji.style.animationDuration = '2s';
      emoji.style.animationDelay = '0s';
      
      // Set burst origin from clicked button position
      if (colorsState.burstOrigin) {
        emoji.style.left = colorsState.burstOrigin.x + 'px';
        emoji.style.top = colorsState.burstOrigin.y + 'px';
      } else {
        // Fallback to center if no origin set
        emoji.style.left = '50%';
        emoji.style.top = '50%';
      }
    } else if (colorsState.rewardStyle === 'float') {
      emoji.style.left = (10 + Math.random() * 80) + '%';
      const wobble = (Math.random() - 0.5) * 40;
      const spin = Math.random() * 360;
      emoji.style.setProperty('--wobble', wobble + 'px');
      emoji.style.setProperty('--spin', spin + 'deg');
      emoji.style.animationDuration = '2.5s';
      emoji.style.animationDelay = '0s';
    }
    
    // Add style class after setting properties
    emoji.classList.add(colorsState.rewardStyle + '-style');
    
    container.appendChild(emoji);
    spawned++;
    
    // Increase timeout to match animation duration
    setTimeout(() => emoji.remove(), 5000);
  }, 130);
  
  setTimeout(() => {
    clearInterval(spawnInterval);
    container.innerHTML = '';
  }, 4000);
}

function updateRainbowTracker() {
  const tracker = document.getElementById('rainbowTracker');
  tracker.innerHTML = '';
  
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div');
    dot.className = 'rainbow-dot';
    if (i < colorsState.collectedColors.length) {
      const color = colorsState.collectedColors[i];
      dot.style.background = color.hex;
      dot.style.color = color.hex;
      dot.classList.add('collected');
    }
    tracker.appendChild(dot);
  }
  
  if (colorsState.collectedColors.length === 8) {
    tracker.classList.add('complete');
    if (audioCtx) {
      const scale = [523, 587, 659, 698, 784, 880, 988, 1047];
      scale.forEach((freq, i) => {
        setTimeout(() => playTone(freq, 0.12, 'triangle', 0.12), i * 100);
      });
      setTimeout(() => {
        playTone(523, 0.5, 'triangle', 0.12);
        playTone(659, 0.5, 'triangle', 0.12);
        playTone(784, 0.5, 'triangle', 0.12);
      }, 800);
    }
    setTimeout(() => {
      tracker.classList.remove('complete');
    }, 2000);
  }
}

function updateColorsStars() {
  document.getElementById('colorsStars').textContent = colorsState.score;
}

function showColorsCelebration() {
  sounds.celebration();
  createConfetti();
  showCelebration('RAINBOW MASTER! 🌈', () => {
    showScreen('homeScreen');
  });
}

// Old paint game code removed
