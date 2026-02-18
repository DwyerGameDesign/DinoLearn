// ============================================================
// LETTER OF THE DAY
// Activities: Intro → Emoji Words → Case Match → Tracing → Find It → Yes/No
// ============================================================

// --- Letter data: emoji words for each letter ---
const LETTER_DATA = {
    A: { words: [{ e: '🍎', w: 'Apple' }, { e: '🐊', w: 'Alligator' }, { e: '✈️', w: 'Airplane' }, { e: '🐜', w: 'Ant' }, { e: '🥑', w: 'Avocado' }, { e: '🪗', w: 'Accordion' }] },
    B: { words: [{ e: '🐻', w: 'Bear' }, { e: '🍌', w: 'Banana' }, { e: '🦋', w: 'Butterfly' }, { e: '⛵', w: 'Boat' }, { e: '📚', w: 'Book' }, { e: '🎈', w: 'Balloon' }] },
    C: { words: [{ e: '🐱', w: 'Cat' }, { e: '🍰', w: 'Cake' }, { e: '🚗', w: 'Car' }, { e: '🌵', w: 'Cactus' }, { e: '🍒', w: 'Cherry' }, { e: '🐛', w: 'Caterpillar' }] },
    D: { words: [{ e: '🐶', w: 'Dog' }, { e: '🦆', w: 'Duck' }, { e: '🍩', w: 'Donut' }, { e: '🐉', w: 'Dragon' }, { e: '💃', w: 'Dance' }, { e: '🦌', w: 'Deer' }] },
    E: { words: [{ e: '🐘', w: 'Elephant' }, { e: '🥚', w: 'Egg' }, { e: '🦅', w: 'Eagle' }, { e: '🌍', w: 'Earth' }, { e: '🤿', w: 'Explore' }, { e: '🎉', w: 'Event' }] },
    F: { words: [{ e: '🐸', w: 'Frog' }, { e: '🦊', w: 'Fox' }, { e: '🐟', w: 'Fish' }, { e: '🌸', w: 'Flower' }, { e: '🔥', w: 'Fire' }, { e: '🍟', w: 'Fries' }] },
    G: { words: [{ e: '🦒', w: 'Giraffe' }, { e: '🍇', w: 'Grapes' }, { e: '🐊', w: 'Gator' }, { e: '🎸', w: 'Guitar' }, { e: '👻', w: 'Ghost' }, { e: '🌿', w: 'Grass' }] },
    H: { words: [{ e: '🐴', w: 'Horse' }, { e: '🏠', w: 'House' }, { e: '🦔', w: 'Hedgehog' }, { e: '🍯', w: 'Honey' }, { e: '🎃', w: 'Hat' }, { e: '🌺', w: 'Hibiscus' }] },
    I: { words: [{ e: '🦎', w: 'Iguana' }, { e: '🍦', w: 'Ice cream' }, { e: '🎃', w: 'Island' }, { e: '🏝️', w: 'Isle' }, { e: '🪲', w: 'Insect' }, { e: '🎻', w: 'Instrument' }] },
    J: { words: [{ e: '🦘', w: 'Jumping' }, { e: '🃏', w: 'Joker' }, { e: '🌶️', w: 'Jalapeño' }, { e: '🪼', w: 'Jellyfish' }, { e: '🎷', w: 'Jazz' }, { e: '🚂', w: 'Journey' }] },
    K: { words: [{ e: '🦘', w: 'Kangaroo' }, { e: '🪁', w: 'Kite' }, { e: '🔑', w: 'Key' }, { e: '🤴', w: 'King' }, { e: '🍵', w: 'Kettle' }, { e: '🐨', w: 'Koala' }] },
    L: { words: [{ e: '🦁', w: 'Lion' }, { e: '🦞', w: 'Lobster' }, { e: '🍋', w: 'Lemon' }, { e: '🦎', w: 'Lizard' }, { e: '🌿', w: 'Leaf' }, { e: '🏮', w: 'Lantern' }] },
    M: { words: [{ e: '🐒', w: 'Monkey' }, { e: '🌙', w: 'Moon' }, { e: '🍄', w: 'Mushroom' }, { e: '🧁', w: 'Muffin' }, { e: '🦟', w: 'Mosquito' }, { e: '🎵', w: 'Music' }] },
    N: { words: [{ e: '🪺', w: 'Nest' }, { e: '🌙', w: 'Night' }, { e: '🎵', w: 'Note' }, { e: '🌰', w: 'Nut' }, { e: '🦩', w: 'Newt' }, { e: '🪆', w: 'Nesting' }] },
    O: { words: [{ e: '🦦', w: 'Otter' }, { e: '🐙', w: 'Octopus' }, { e: '🦉', w: 'Owl' }, { e: '🍊', w: 'Orange' }, { e: '🥚', w: 'Oval' }, { e: '🌊', w: 'Ocean' }] },
    P: { words: [{ e: '🐧', w: 'Penguin' }, { e: '🍕', w: 'Pizza' }, { e: '🐷', w: 'Pig' }, { e: '🦜', w: 'Parrot' }, { e: '🌸', w: 'Peach' }, { e: '🏓', w: 'Ping pong' }] },
    Q: { words: [{ e: '👑', w: 'Queen' }, { e: '🦆', w: 'Quack' }, { e: '❓', w: 'Question' }, { e: '🪶', w: 'Quill' }, { e: '🌀', w: 'Quirky' }, { e: '🎯', w: 'Quest' }] },
    R: { words: [{ e: '🐰', w: 'Rabbit' }, { e: '🌈', w: 'Rainbow' }, { e: '🦁', w: 'Roar' }, { e: '🚀', w: 'Rocket' }, { e: '🤖', w: 'Robot' }, { e: '🌹', w: 'Rose' }] },
    S: { words: [{ e: '🐍', w: 'Snake' }, { e: '⭐', w: 'Star' }, { e: '🌻', w: 'Sunflower' }, { e: '🦭', w: 'Seal' }, { e: '🍓', w: 'Strawberry' }, { e: '🦕', w: 'Sauropod' }] },
    T: { words: [{ e: '🐯', w: 'Tiger' }, { e: '🌮', w: 'Taco' }, { e: '🐢', w: 'Turtle' }, { e: '🌳', w: 'Tree' }, { e: '🚂', w: 'Train' }, { e: '🦖', w: 'T-Rex' }] },
    U: { words: [{ e: '☂️', w: 'Umbrella' }, { e: '🦄', w: 'Unicorn' }, { e: '🎠', w: 'Unique' }, { e: '⬆️', w: 'Up' }, { e: '🌌', w: 'Universe' }, { e: '🎭', w: 'Unusual' }] },
    V: { words: [{ e: '🌋', w: 'Volcano' }, { e: '🎻', w: 'Violin' }, { e: '🦅', w: 'Vulture' }, { e: '🚐', w: 'Van' }, { e: '🌹', w: 'Valentine' }, { e: '🧛', w: 'Vampire' }] },
    W: { words: [{ e: '🐺', w: 'Wolf' }, { e: '🐳', w: 'Whale' }, { e: '🕷️', w: 'Web' }, { e: '🌊', w: 'Wave' }, { e: '🍉', w: 'Watermelon' }, { e: '🦩', w: 'Wading' }] },
    X: { words: [{ e: '🎸', w: 'Xylophone' }, { e: '✖️', w: 'X mark' }, { e: '📦', w: 'Xbox' }, { e: '🦴', w: 'X-ray' }, { e: '❎', w: 'X sign' }, { e: '🗺️', w: 'X marks' }] },
    Y: { words: [{ e: '🧶', w: 'Yarn' }, { e: '🥱', w: 'Yawn' }, { e: '⛵', w: 'Yacht' }, { e: '🍠', w: 'Yam' }, { e: '🌻', w: 'Yellow' }, { e: '🤸', w: 'Yoga' }] },
    Z: { words: [{ e: '🦓', w: 'Zebra' }, { e: '🤐', w: 'Zipper' }, { e: '🍕', w: 'Ziti' }, { e: '🦁', w: 'Zoo' }, { e: '⚡', w: 'Zap' }, { e: '🌀', w: 'Zoom' }] },
  };
  
  // --- SVG tracing paths for each letter (uppercase, d= path string) ---
  // Paths are defined in a 200x240 viewBox
  const TRACE_PATHS = {
    // Uppercase
    A: { upper: 'M100,20 L170,210 M100,20 L30,210 M55,140 L145,140', lower: 'M130,80 Q130,60 110,60 Q80,60 80,100 L80,200 M80,100 Q80,130 110,140 Q140,150 130,120' },
    B: { upper: 'M60,20 L60,210 M60,20 Q120,20 130,60 Q140,100 60,115 M60,115 Q140,115 140,165 Q140,210 60,210', lower: 'M80,20 L80,200 M80,140 Q80,110 110,110 Q140,110 140,155 Q140,200 110,200 Q80,200 80,155' },
    C: { upper: 'M160,55 Q130,20 90,20 Q40,20 40,115 Q40,210 90,210 Q130,210 160,175', lower: 'M150,100 Q140,80 115,80 Q80,80 80,140 Q80,200 115,200 Q140,200 150,180' },
    D: { upper: 'M60,20 L60,210 M60,20 Q160,20 160,115 Q160,210 60,210', lower: 'M100,80 L100,200 M100,140 Q100,80 130,80 Q160,80 160,140 Q160,200 130,200 Q100,200 100,140' },
    E: { upper: 'M150,20 L50,20 L50,210 L150,210 M50,115 L130,115', lower: 'M50,140 Q50,80 110,80 Q160,80 160,140 Q160,160 50,160 Q50,200 110,200 Q145,200 160,180' },
    F: { upper: 'M150,20 L50,20 L50,210 M50,115 L130,115', lower: 'M100,60 Q100,40 120,40 Q140,40 140,60 M100,60 L100,200 M80,120 L130,120' },
    G: { upper: 'M160,55 Q130,20 90,20 Q40,20 40,115 Q40,210 90,210 Q140,210 160,175 L160,115 L105,115', lower: 'M150,100 Q140,80 115,80 Q80,80 80,140 Q80,200 115,200 Q150,200 150,160 L150,140 L110,140' },
    H: { upper: 'M50,20 L50,210 M150,20 L150,210 M50,115 L150,115', lower: 'M80,20 L80,200 M80,140 Q80,100 120,100 Q150,100 150,140 L150,200' },
    I: { upper: 'M100,20 L100,210 M70,20 L130,20 M70,210 L130,210', lower: 'M100,80 L100,200 M100,60 L100,50' },
    J: { upper: 'M130,20 L130,175 Q130,210 95,210 Q60,210 60,175', lower: 'M120,80 L120,180 Q120,210 90,210 Q60,210 60,185 M120,55 L120,45' },
    K: { upper: 'M60,20 L60,210 M140,20 L60,115 M80,95 L150,210', lower: 'M80,20 L80,200 M140,80 L80,150 M95,135 L150,200' },
    L: { upper: 'M60,20 L60,210 L160,210', lower: 'M100,20 L100,200 L150,200' },
    M: { upper: 'M40,210 L40,20 L100,120 L160,20 L160,210', lower: 'M70,200 L70,100 Q70,80 95,80 Q115,80 115,100 L115,200 M115,140 Q115,80 140,80 Q160,80 160,100 L160,200' },
    N: { upper: 'M50,210 L50,20 L150,210 L150,20', lower: 'M80,200 L80,100 Q80,80 110,80 Q140,80 140,100 L140,200' },
    O: { upper: 'M100,20 Q160,20 160,115 Q160,210 100,210 Q40,210 40,115 Q40,20 100,20', lower: 'M100,80 Q140,80 140,140 Q140,200 100,200 Q60,200 60,140 Q60,80 100,80' },
    P: { upper: 'M60,20 L60,210 M60,20 Q140,20 140,75 Q140,130 60,130', lower: 'M80,80 L80,230 M80,130 Q80,80 110,80 Q140,80 140,130 Q140,175 80,175' },
    Q: { upper: 'M100,20 Q160,20 160,115 Q160,210 100,210 Q40,210 40,115 Q40,20 100,20 M130,175 L170,215', lower: 'M100,80 Q140,80 140,140 Q140,200 100,200 Q60,200 60,140 Q60,80 100,80 M120,185 L150,215' },
    R: { upper: 'M60,20 L60,210 M60,20 Q140,20 140,75 Q140,130 60,130 M80,115 L150,210', lower: 'M80,80 L80,200 M80,120 Q80,80 110,80 Q140,80 140,120 Q140,155 80,155 M100,145 L150,200' },
    S: { upper: 'M150,50 Q140,20 100,20 Q50,20 50,70 Q50,115 100,115 Q150,115 150,165 Q150,210 100,210 Q60,210 50,180', lower: 'M140,95 Q130,80 105,80 Q75,80 75,110 Q75,140 110,145 Q145,150 145,180 Q145,200 110,200 Q85,200 75,180' },
    T: { upper: 'M100,20 L100,210 M40,20 L160,20', lower: 'M100,20 L100,60 Q100,80 120,80 M60,60 L140,60' },
    U: { upper: 'M50,20 L50,165 Q50,210 100,210 Q150,210 150,165 L150,20', lower: 'M80,80 L80,165 Q80,200 110,200 Q140,200 140,165 L140,80' },
    V: { upper: 'M50,20 L100,210 L150,20', lower: 'M70,80 L110,200 L150,80' },
    W: { upper: 'M30,20 L65,210 L100,120 L135,210 L170,20', lower: 'M60,80 L85,200 L110,130 L135,200 L160,80' },
    X: { upper: 'M50,20 L150,210 M150,20 L50,210', lower: 'M65,80 L145,200 M145,80 L65,200' },
    Y: { upper: 'M50,20 L100,115 L150,20 M100,115 L100,210', lower: 'M70,80 L110,155 L150,80 M110,155 L110,230' },
    Z: { upper: 'M50,20 L150,20 L50,210 L150,210', lower: 'M65,80 L145,80 L65,200 L145,200' },
  };
  
  // --- YES/NO distractor words ---
  const YES_NO_POOL = {
    A: { yes: [{ e: '🍎', w: 'Apple' }, { e: '🐊', w: 'Alligator' }, { e: '🐜', w: 'Ant' }], no: [{ e: '🐶', w: 'Dog' }, { e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '🌺', w: 'Flower' }, { e: '🐸', w: 'Frog' }] },
    B: { yes: [{ e: '🐻', w: 'Bear' }, { e: '🍌', w: 'Banana' }, { e: '🎈', w: 'Balloon' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '⭐', w: 'Star' }] },
    C: { yes: [{ e: '🐱', w: 'Cat' }, { e: '🍰', w: 'Cake' }, { e: '🌵', w: 'Cactus' }], no: [{ e: '🐶', w: 'Dog' }, { e: '🍌', w: 'Banana' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    D: { yes: [{ e: '🐶', w: 'Dog' }, { e: '🦆', w: 'Duck' }, { e: '🐉', w: 'Dragon' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    E: { yes: [{ e: '🐘', w: 'Elephant' }, { e: '🥚', w: 'Egg' }, { e: '🦅', w: 'Eagle' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    F: { yes: [{ e: '🐸', w: 'Frog' }, { e: '🦊', w: 'Fox' }, { e: '🐟', w: 'Fish' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '🌙', w: 'Moon' }, { e: '⭐', w: 'Star' }, { e: '🎈', w: 'Balloon' }] },
    G: { yes: [{ e: '🦒', w: 'Giraffe' }, { e: '🍇', w: 'Grapes' }, { e: '👻', w: 'Ghost' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    H: { yes: [{ e: '🐴', w: 'Horse' }, { e: '🏠', w: 'House' }, { e: '🦔', w: 'Hedgehog' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '🌙', w: 'Moon' }, { e: '🐱', w: 'Cat' }, { e: '🎈', w: 'Balloon' }] },
    I: { yes: [{ e: '🦎', w: 'Iguana' }, { e: '🍦', w: 'Ice cream' }, { e: '🪲', w: 'Insect' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    J: { yes: [{ e: '🪼', w: 'Jellyfish' }, { e: '🌶️', w: 'Jalapeño' }, { e: '🚂', w: 'Journey' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    K: { yes: [{ e: '🦘', w: 'Kangaroo' }, { e: '🔑', w: 'Key' }, { e: '🐨', w: 'Koala' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    L: { yes: [{ e: '🦁', w: 'Lion' }, { e: '🍋', w: 'Lemon' }, { e: '🌿', w: 'Leaf' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '🌙', w: 'Moon' }, { e: '🐱', w: 'Cat' }, { e: '🎈', w: 'Balloon' }] },
    M: { yes: [{ e: '🐒', w: 'Monkey' }, { e: '🌙', w: 'Moon' }, { e: '🍄', w: 'Mushroom' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    N: { yes: [{ e: '🪺', w: 'Nest' }, { e: '🌙', w: 'Night' }, { e: '🌰', w: 'Nut' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌺', w: 'Flower' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    O: { yes: [{ e: '🐙', w: 'Octopus' }, { e: '🦉', w: 'Owl' }, { e: '🍊', w: 'Orange' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    P: { yes: [{ e: '🐧', w: 'Penguin' }, { e: '🍕', w: 'Pizza' }, { e: '🦜', w: 'Parrot' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '🌙', w: 'Moon' }, { e: '🐱', w: 'Cat' }, { e: '🎈', w: 'Balloon' }] },
    Q: { yes: [{ e: '👑', w: 'Queen' }, { e: '❓', w: 'Question' }, { e: '🪶', w: 'Quill' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    R: { yes: [{ e: '🐰', w: 'Rabbit' }, { e: '🌈', w: 'Rainbow' }, { e: '🚀', w: 'Rocket' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    S: { yes: [{ e: '🐍', w: 'Snake' }, { e: '⭐', w: 'Star' }, { e: '🦭', w: 'Seal' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    T: { yes: [{ e: '🐯', w: 'Tiger' }, { e: '🌮', w: 'Taco' }, { e: '🐢', w: 'Turtle' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐶', w: 'Dog' }, { e: '🌙', w: 'Moon' }, { e: '🐱', w: 'Cat' }, { e: '🎈', w: 'Balloon' }] },
    U: { yes: [{ e: '☂️', w: 'Umbrella' }, { e: '🦄', w: 'Unicorn' }, { e: '⬆️', w: 'Up' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    V: { yes: [{ e: '🌋', w: 'Volcano' }, { e: '🎻', w: 'Violin' }, { e: '🚐', w: 'Van' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    W: { yes: [{ e: '🐺', w: 'Wolf' }, { e: '🐳', w: 'Whale' }, { e: '🍉', w: 'Watermelon' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    X: { yes: [{ e: '🎸', w: 'Xylophone' }, { e: '✖️', w: 'X mark' }, { e: '🦴', w: 'X-ray' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    Y: { yes: [{ e: '🧶', w: 'Yarn' }, { e: '⛵', w: 'Yacht' }, { e: '🍠', w: 'Yam' }], no: [{ e: '🍎', w: 'Apple' }, { e: '🐱', w: 'Cat' }, { e: '🌙', w: 'Moon' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
    Z: { yes: [{ e: '🦓', w: 'Zebra' }, { e: '🤐', w: 'Zipper' }, { e: '⚡', w: 'Zap' }], no: [{ e: '🍌', w: 'Banana' }, { e: '🐱', w: 'Cat' }, { e: '⭐', w: 'Star' }, { e: '🐸', w: 'Frog' }, { e: '🎈', w: 'Balloon' }] },
  };
  
  // ---- State ----
  let lotdState = {
    letter: 'A',
    activity: 'intro', // intro | words | cases | trace | findIt | yesno | done
    traceCanvas: null,
    traceCtx: null,
    isDrawing: false,
    tracePathPoints: [],
    traceProgress: 0,
    traceComplete: false,
    findItScore: 0,
    findItTotal: 0,
    findItTimer: null,
    findItSpawnTimer: null,
    findItGrid: Array(9).fill(null),
    yesnoScore: 0,
    yesnoTotal: 0,
    yesnoQueue: [],
  };
  
  // ---- Get today's letter ----
  function getTodaysLetter() {
    const start = new Date('2025-01-01');
    const today = new Date();
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[diffDays % 26];
  }
  
  // ---- Start Letter of the Day ----
  function startLOTD() {
    lotdState.letter = getTodaysLetter();
    lotdState.activity = 'intro';
    showScreen('lotdScreen');
    showLOTDIntro();
  }
  
  // ======================================================
  // ACTIVITY 1: INTRO SPLASH
  // ======================================================
  function showLOTDIntro() {
    lotdState.activity = 'intro';
    const content = document.getElementById('lotdContent');
    const L = lotdState.letter;
  
    content.innerHTML = `
      <div class="lotd-intro-wrap">
        <div class="lotd-intro-subtitle">Letter of the Day</div>
        <div class="lotd-big-letter lotd-intro-pop">${L}</div>
        <div class="lotd-intro-lower lotd-intro-pop-delay">${L.toLowerCase()}</div>
        <div class="lotd-intro-sound">says <span class="lotd-phonic">"${getPhonic(L)}"</span></div>
        <div class="lotd-intro-examples">
          ${LETTER_DATA[L].words.slice(0, 3).map(w => `<span class="lotd-ex-chip">${w.e} ${w.w}</span>`).join('')}
        </div>
        <button class="lotd-next-btn" id="lotdIntroNext">Let's Learn! 🦕</button>
      </div>
    `;
  
    if (audioCtx) {
      sounds.instructionChime();
    }
  
    document.getElementById('lotdIntroNext').addEventListener('click', () => {
      if (audioCtx) sounds.tap();
      showLOTDWords();
    });
  }
  
  function getPhonic(letter) {
    const phonics = { A:'æ',B:'buh',C:'kuh',D:'duh',E:'eh',F:'fuh',G:'guh',H:'huh',I:'ih',J:'juh',K:'kuh',L:'luh',M:'mmm',N:'nnn',O:'oh',P:'puh',Q:'kwuh',R:'rrr',S:'sss',T:'tuh',U:'uh',V:'vuh',W:'wuh',X:'ks',Y:'yuh',Z:'zzz' };
    return phonics[letter] || letter;
  }
  
  // ======================================================
  // ACTIVITY 2: EMOJI WORDS
  // ======================================================
  function showLOTDWords() {
    lotdState.activity = 'words';
    updateLOTDProgress('words');
    const content = document.getElementById('lotdContent');
    const L = lotdState.letter;
    const words = LETTER_DATA[L].words;
  
    content.innerHTML = `
      <div class="lotd-words-wrap">
        <div class="lotd-activity-title"><span class="lotd-letter-badge">${L}</span> is for...</div>
        <div class="lotd-words-grid" id="lotdWordsGrid"></div>
        <button class="lotd-next-btn" id="lotdWordsNext" style="display:none">Next ➡️</button>
      </div>
    `;
  
    if (audioCtx) sounds.instructionChime();
  
    const grid = document.getElementById('lotdWordsGrid');
    let revealed = 0;
  
    words.forEach((w, i) => {
      const card = document.createElement('div');
      card.className = 'lotd-word-card lotd-word-hidden';
      card.innerHTML = `<div class="lotd-word-emoji">${w.e}</div><div class="lotd-word-label"><span class="lotd-word-first">${w.w[0]}</span>${w.w.slice(1)}</div>`;
      card.style.animationDelay = `${i * 0.18}s`;
      grid.appendChild(card);
  
      setTimeout(() => {
        card.classList.remove('lotd-word-hidden');
        card.classList.add('lotd-word-reveal');
        if (audioCtx) sounds.cardPop();
        revealed++;
        if (revealed >= words.length) {
          setTimeout(() => {
            document.getElementById('lotdWordsNext').style.display = 'flex';
          }, 400);
        }
      }, 300 + i * 200);
  
      card.addEventListener('click', () => {
        card.classList.add('lotd-word-tap');
        if (audioCtx) sounds.tap();
        setTimeout(() => card.classList.remove('lotd-word-tap'), 300);
      });
    });
  
    document.getElementById('lotdWordsNext').addEventListener('click', () => {
      if (audioCtx) sounds.tap();
      showLOTDCases();
    });
  }
  
  // ======================================================
  // ACTIVITY 3: CASE MATCHING
  // ======================================================
  function showLOTDCases() {
    lotdState.activity = 'cases';
    updateLOTDProgress('cases');
    const content = document.getElementById('lotdContent');
    const L = lotdState.letter;
  
    content.innerHTML = `
      <div class="lotd-cases-wrap">
        <div class="lotd-activity-title">These are the same letter!</div>
        <div class="lotd-cases-display">
          <div class="lotd-case-block lotd-case-upper">
            <div class="lotd-case-letter">${L}</div>
            <div class="lotd-case-label">Uppercase</div>
          </div>
          <div class="lotd-case-equals">↔️</div>
          <div class="lotd-case-block lotd-case-lower">
            <div class="lotd-case-letter">${L.toLowerCase()}</div>
            <div class="lotd-case-label">Lowercase</div>
          </div>
        </div>
        <div class="lotd-activity-title" style="font-size:clamp(18px,4vw,26px);margin-top:8px">Now find the matching letters!</div>
        <div class="lotd-cases-quiz" id="lotdCasesQuiz"></div>
        <div class="lotd-cases-score" id="lotdCasesScore">Find all 4 pairs! ✨</div>
      </div>
    `;
  
    if (audioCtx) sounds.instructionChime();
    buildCaseQuiz();
  }
  
  function buildCaseQuiz() {
    const L = lotdState.letter;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Pick 3 distractor letters
    const distractors = [];
    while (distractors.length < 3) {
      const d = letters[Math.floor(Math.random() * 26)];
      if (d !== L && !distractors.includes(d)) distractors.push(d);
    }
  
    // We show: top row = 4 uppercase (shuffled), bottom row = 4 lowercase (shuffled)
    const upperSet = [L, ...distractors].sort(() => Math.random() - 0.5);
    const lowerSet = [L.toLowerCase(), ...distractors.map(d => d.toLowerCase())].sort(() => Math.random() - 0.5);
  
    const quiz = document.getElementById('lotdCasesQuiz');
    quiz.innerHTML = `
      <div class="lotd-cases-row" id="casesUpperRow"></div>
      <div class="lotd-cases-row" id="casesLowerRow"></div>
    `;
  
    let selectedUpper = null;
    let matched = 0;
    const total = 4;
  
    function tryMatch(upBtn, lowBtn) {
      const upL = upBtn.dataset.letter;
      const lowL = lowBtn.dataset.letter.toUpperCase();
      if (upL === lowL) {
        upBtn.classList.add('lotd-case-matched');
        lowBtn.classList.add('lotd-case-matched');
        upBtn.disabled = true;
        lowBtn.disabled = true;
        if (audioCtx) sounds.correct();
        matched++;
        document.getElementById('lotdCasesScore').textContent = matched === total
          ? '🎉 Perfect! All matched!' : `${matched}/${total} matched!`;
        if (matched === total) {
          setTimeout(() => {
            if (audioCtx) sounds.celebration();
            showLOTDTrace();
          }, 900);
        }
      } else {
        upBtn.classList.add('lotd-case-wrong');
        lowBtn.classList.add('lotd-case-wrong');
        if (audioCtx) sounds.wrong();
        setTimeout(() => {
          upBtn.classList.remove('lotd-case-wrong', 'lotd-case-selected');
          lowBtn.classList.remove('lotd-case-wrong');
          selectedUpper = null;
        }, 600);
      }
    }
  
    const upperRow = document.getElementById('casesUpperRow');
    const lowerRow = document.getElementById('casesLowerRow');
    let selectedLower = null;
  
    upperSet.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'lotd-case-btn lotd-case-upper-btn';
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        if (selectedUpper) selectedUpper.classList.remove('lotd-case-selected');
        selectedUpper = btn;
        btn.classList.add('lotd-case-selected');
        if (audioCtx) sounds.tap();
        if (selectedLower) {
          tryMatch(selectedUpper, selectedLower);
          selectedLower = null;
          selectedUpper = null;
        }
      });
      upperRow.appendChild(btn);
    });
  
    lowerSet.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'lotd-case-btn lotd-case-lower-btn';
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        if (selectedLower) selectedLower.classList.remove('lotd-case-selected');
        selectedLower = btn;
        btn.classList.add('lotd-case-selected');
        if (audioCtx) sounds.tap();
        if (selectedUpper) {
          tryMatch(selectedUpper, selectedLower);
          selectedUpper = null;
          selectedLower = null;
        }
      });
      lowerRow.appendChild(btn);
    });
  }
  
  // ======================================================
  // ACTIVITY 4: FINGER TRACING
  // ======================================================
  function showLOTDTrace() {
    lotdState.activity = 'trace';
    updateLOTDProgress('trace');
    lotdState.traceProgress = 0;
    lotdState.traceComplete = false;
    const content = document.getElementById('lotdContent');
    const L = lotdState.letter;
  
    content.innerHTML = `
      <div class="lotd-trace-wrap">
        <div class="lotd-activity-title">Trace the letter <span class="lotd-letter-badge">${L}</span></div>
        <div class="lotd-trace-tabs">
          <button class="lotd-trace-tab active" id="traceTabUpper">Uppercase ${L}</button>
          <button class="lotd-trace-tab" id="traceTabLower">Lowercase ${L.toLowerCase()}</button>
        </div>
        <div class="lotd-trace-container" id="traceContainer">
          <canvas class="lotd-trace-canvas" id="traceCanvas"></canvas>
          <div class="lotd-trace-guide" id="traceGuide"></div>
        </div>
        <div class="lotd-trace-progress-bar"><div class="lotd-trace-progress-fill" id="traceProgressFill"></div></div>
        <div class="lotd-trace-hint" id="traceHint">Follow the dotted path with your finger!</div>
        <div class="lotd-trace-actions">
          <button class="lotd-clear-btn" id="traceClearBtn">🗑️ Clear</button>
          <button class="lotd-next-btn" id="lotdTraceNext" style="display:none">Next ➡️</button>
        </div>
      </div>
    `;
  
    if (audioCtx) sounds.instructionChime();
  
    let currentCase = 'upper';
    setupTraceCanvas(L, 'upper');
  
    document.getElementById('traceTabUpper').addEventListener('click', () => {
      document.getElementById('traceTabUpper').classList.add('active');
      document.getElementById('traceTabLower').classList.remove('active');
      currentCase = 'upper';
      setupTraceCanvas(L, 'upper');
      document.getElementById('lotdTraceNext').style.display = 'none';
    });
  
    document.getElementById('traceTabLower').addEventListener('click', () => {
      document.getElementById('traceTabLower').classList.add('active');
      document.getElementById('traceTabUpper').classList.remove('active');
      currentCase = 'lower';
      setupTraceCanvas(L, 'lower');
      document.getElementById('lotdTraceNext').style.display = 'none';
    });
  
    document.getElementById('traceClearBtn').addEventListener('click', () => {
      setupTraceCanvas(L, currentCase);
      document.getElementById('lotdTraceNext').style.display = 'none';
    });
  
    document.getElementById('lotdTraceNext').addEventListener('click', () => {
      if (audioCtx) sounds.tap();
      cleanupFindIt(); // safety
      showLOTDFindIt();
    });
  }
  
  function setupTraceCanvas(letter, caseType) {
    const container = document.getElementById('traceContainer');
    const canvas = document.getElementById('traceCanvas');
    const size = Math.min(container.clientWidth, container.clientHeight, 280);
    canvas.width = size;
    canvas.height = size;
  
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    lotdState.traceCtx = ctx;
    lotdState.traceCanvas = canvas;
    lotdState.traceProgress = 0;
    lotdState.traceComplete = false;
    document.getElementById('traceProgressFill').style.width = '0%';
    document.getElementById('traceHint').textContent = 'Follow the dotted path with your finger!';
  
    // Get path
    const pathData = TRACE_PATHS[letter];
    if (!pathData) return;
    const pathStr = caseType === 'upper' ? pathData.upper : pathData.lower;
    if (!pathStr) return;
    const pathPoints = sampleSVGPath(pathStr, size);
    lotdState.tracePathPoints = pathPoints;
  
    // Draw guide (ghost letter behind canvas)
    const guide = document.getElementById('traceGuide');
    guide.innerHTML = '';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 200 240');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
  
    const paths = pathStr.split(' M ').map((p, i) => i === 0 ? p : 'M ' + p);
    paths.forEach(pStr => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pStr);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'rgba(255,255,255,0.25)');
      path.setAttribute('stroke-width', '18');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('stroke-dasharray', '12 8');
      svg.appendChild(path);
    });
  
    // Start dots - pathPoints are already in canvas coordinates, need to convert back to SVG viewBox coords
    const svgScale = size / 200;
    const svgOffsetY = (240 - 200) / 2; // Offset in viewBox coordinates
    pathPoints.forEach((pt, i) => {
      if (i % 20 === 0) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        // Convert canvas coords back to SVG viewBox coords
        circle.setAttribute('cx', pt.x / svgScale);
        circle.setAttribute('cy', (pt.y - (size - 240 * svgScale) / 2) / svgScale);
        circle.setAttribute('r', i === 0 ? '8' : '4');
        circle.setAttribute('fill', i === 0 ? '#FFD700' : 'rgba(255,255,255,0.5)');
        svg.appendChild(circle);
      }
    });
  
    guide.appendChild(svg);
  
    // Draw canvas background letter (large faint)
    ctx.save();
    ctx.font = `bold ${size * 0.8}px 'Lilita One', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillText(caseType === 'upper' ? letter : letter.toLowerCase(), size / 2, size / 2);
    ctx.restore();
  
    // Draw user strokes on top
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = Math.max(size * 0.065, 14);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  
    // Touch/mouse events
    canvas.removeEventListener('mousedown', canvas._startDraw);
    canvas.removeEventListener('touchstart', canvas._startDraw);
    canvas.removeEventListener('mousemove', canvas._draw);
    canvas.removeEventListener('touchmove', canvas._draw);
    canvas.removeEventListener('mouseup', canvas._endDraw);
    canvas.removeEventListener('touchend', canvas._endDraw);
  
    let drawing = false;
    let prevX = null, prevY = null;
    let coveredPoints = new Set();
    let totalDistanceDrawn = 0; // Track total distance drawn
    let startX = null, startY = null; // Track where drawing started
  
    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    }
  
    function startDraw(e) {
      e.preventDefault();
      drawing = true;
      const pos = getPos(e);
      prevX = pos.x;
      prevY = pos.y;
      startX = pos.x;
      startY = pos.y;
      totalDistanceDrawn = 0; // Reset distance tracking
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
  
    function draw(e) {
      e.preventDefault();
      if (!drawing) return;
      const pos = getPos(e);
      
      // Track total distance drawn
      if (prevX !== null && prevY !== null) {
        const segmentDist = Math.sqrt((pos.x - prevX) ** 2 + (pos.y - prevY) ** 2);
        totalDistanceDrawn += segmentDist;
      }
      
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
  
      // Check coverage of path points - check along the line segment too
      const checkRadius = size * 0.3; // Increased radius for easier detection (30% of canvas)
      
      if (!lotdState.tracePathPoints || lotdState.tracePathPoints.length === 0) {
        return;
      }
      
      let foundAny = false;
      
      // Check current position and previous position line segment
      if (prevX !== null && prevY !== null) {
        const segmentLength = Math.sqrt((pos.x - prevX) ** 2 + (pos.y - prevY) ** 2);
        const steps = Math.max(1, Math.floor(segmentLength / 1.5)); // Check even more points along segment
        
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const checkX = prevX + (pos.x - prevX) * t;
          const checkY = prevY + (pos.y - prevY) * t;
          
          lotdState.tracePathPoints.forEach((pt, i) => {
            if (!coveredPoints.has(i)) {
              const dx = checkX - pt.x;
              const dy = checkY - pt.y;
              const distSq = dx * dx + dy * dy;
              const dist = Math.sqrt(distSq);
              if (distSq < checkRadius * checkRadius) {
                coveredPoints.add(i);
                foundAny = true;
              }
            }
          });
        }
      } else {
        // Just check current position
        lotdState.tracePathPoints.forEach((pt, i) => {
          if (!coveredPoints.has(i)) {
            const dx = pos.x - pt.x;
            const dy = pos.y - pt.y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            if (distSq < checkRadius * checkRadius) {
              coveredPoints.add(i);
              foundAny = true;
            }
          }
        });
      }
  
      const progress = coveredPoints.size / Math.max(lotdState.tracePathPoints.length, 1);
      const pct = Math.min(progress * 100, 100);
      
      // Always update progress bar
      document.getElementById('traceProgressFill').style.width = pct + '%';
  
      // Calculate minimum distance required (roughly 60% of the path length)
      const pathLength = lotdState.tracePathPoints.length > 0 ? 
        lotdState.tracePathPoints.reduce((sum, pt, i) => {
          if (i === 0) return 0;
          const prevPt = lotdState.tracePathPoints[i - 1];
          return sum + Math.sqrt((pt.x - prevPt.x) ** 2 + (pt.y - prevPt.y) ** 2);
        }, 0) : 0;
      const minDistanceRequired = pathLength * 0.5; // Must draw at least 50% of path length
      
      if (pct > 30 && pct <= 70) {
        document.getElementById('traceHint').textContent = 'Great! Keep going! 🌟';
      } else if (pct > 70 && !lotdState.traceComplete) {
        document.getElementById('traceHint').textContent = 'Almost there! ✨';
      }

      // Require both: 70% coverage AND minimum distance drawn
      if (pct >= 90 && totalDistanceDrawn >= minDistanceRequired && !lotdState.traceComplete) {
        lotdState.traceComplete = true;
        if (audioCtx) sounds.celebration();
        spawnTraceSparkles(canvas);
        document.getElementById('traceHint').textContent = '🎉 Amazing tracing!';
        setTimeout(() => {
          document.getElementById('lotdTraceNext').style.display = 'flex';
        }, 600);
      }
  
      prevX = pos.x;
      prevY = pos.y;
    }
  
    function endDraw(e) {
      e.preventDefault();
      drawing = false;
      ctx.beginPath();
    }
  
    canvas._startDraw = startDraw;
    canvas._draw = draw;
    canvas._endDraw = endDraw;
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('touchend', endDraw);
  }
  
  // Sample points along SVG path string
  function sampleSVGPath(pathStr, canvasSize) {
    // SVG viewBox is 200x240, but canvas is square
    // Scale based on width (200), then center vertically
    const scale = canvasSize / 200;
    const offsetY = (canvasSize - 240 * scale) / 2;
    const points = [];

    // Parse SVG path - handle commands and numbers separated by spaces or commas
    // Commands can be immediately followed by numbers (e.g., "M30,20" or "M 30 20")
    // First, insert spaces between commands and numbers, and handle negative numbers
    let normalized = pathStr
      .replace(/([MLQ])(-?\d)/g, '$1 $2') // M30 -> M 30, M-30 -> M -30
      .replace(/,/g, ' ') // Replace commas with spaces
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    const tokens = normalized.split(' ').filter(t => t.length > 0);
    
    let i = 0;
    let curX = 0, curY = 0;
    let currentCmd = null;

    while (i < tokens.length) {
      const token = tokens[i];
      
      // Check if it's a command (single letter M, L, or Q)
      if (token.length === 1 && /[MLQ]/.test(token)) {
        currentCmd = token;
        i++;
        continue;
      }
      
      // It's a number - parse based on current command
      const num = parseFloat(token);
      if (isNaN(num)) {
        i++;
        continue;
      }
      
      if (currentCmd === 'M') {
        curX = num * scale;
        if (i + 1 < tokens.length) {
          const nextNum = parseFloat(tokens[i + 1]);
          if (!isNaN(nextNum)) {
            curY = nextNum * scale + offsetY;
            i += 2;
            points.push({ x: curX, y: curY });
            currentCmd = 'L'; // After M, subsequent coords are treated as L
          } else {
            i++;
          }
        } else {
          i++;
        }
      } else if (currentCmd === 'L') {
        const tx = num * scale;
        if (i + 1 < tokens.length) {
          const nextNum = parseFloat(tokens[i + 1]);
          if (!isNaN(nextNum)) {
            const ty = nextNum * scale + offsetY;
            i += 2;
            // Sample along line
            const steps = Math.max(1, Math.ceil(Math.hypot(tx - curX, ty - curY) / 6));
            for (let s = 1; s <= steps; s++) {
              points.push({ x: curX + (tx - curX) * s / steps, y: curY + (ty - curY) * s / steps });
            }
            curX = tx; curY = ty;
          } else {
            i++;
          }
        } else {
          i++;
        }
      } else if (currentCmd === 'Q') {
        const cx = num * scale;
        if (i + 3 < tokens.length) {
          const cy = parseFloat(tokens[i + 1]) * scale + offsetY;
          const ex = parseFloat(tokens[i + 2]) * scale;
          const ey = parseFloat(tokens[i + 3]) * scale + offsetY;
          i += 4;
          const steps = 20;
          for (let s = 1; s <= steps; s++) {
            const t = s / steps;
            const qx = (1 - t) * (1 - t) * curX + 2 * (1 - t) * t * cx + t * t * ex;
            const qy = (1 - t) * (1 - t) * curY + 2 * (1 - t) * t * cy + t * t * ey;
            points.push({ x: qx, y: qy });
          }
          curX = ex; curY = ey;
        } else {
          i++;
        }
      } else {
        i++;
      }
    }

    return points;
  }
  
  function spawnTraceSparkles(canvas) {
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const spark = document.createElement('div');
        spark.className = 'lotd-sparkle';
        spark.textContent = ['⭐', '✨', '💫', '🌟'][Math.floor(Math.random() * 4)];
        spark.style.left = (rect.left + Math.random() * rect.width) + 'px';
        spark.style.top = (rect.top + Math.random() * rect.height) + 'px';
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      }, i * 70);
    }
  }
  
  // ======================================================
  // ACTIVITY 5: FIND IT! (letter stomp mini-game)
  // ======================================================
  function showLOTDFindIt() {
    cleanupFindIt(); // Clean up first (this clears activity)
    lotdState.activity = 'findIt'; // Then set activity
    updateLOTDProgress('findIt');
    lotdState.findItScore = 0;
    lotdState.findItTotal = 0;
    lotdState.findItGrid = Array(9).fill(null);
  
    const content = document.getElementById('lotdContent');
    const L = lotdState.letter;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(L, '');
  
    content.innerHTML = `
      <div class="lotd-findit-wrap">
        <div class="lotd-activity-title">Find the <span class="lotd-letter-badge">${L}</span>! Tap it fast!</div>
        <div class="lotd-findit-timer" id="findItTimer">⏱️ 20s</div>
        <div class="lotd-findit-score">Score: <span id="findItScoreEl">0</span> ⭐</div>
        <div class="lotd-findit-grid" id="findItGrid"></div>
      </div>
    `;
  
    if (audioCtx) sounds.instructionChime();
  
    // Build grid slots
    const grid = document.getElementById('findItGrid');
    if (!grid) return;
    for (let i = 0; i < 9; i++) {
      const slot = document.createElement('div');
      slot.className = 'lotd-findit-slot';
      slot.dataset.index = i;
      grid.appendChild(slot);
    }
  
    // Start timer
    let timeLeft = 20;
    lotdState.findItTimer = setInterval(() => {
      timeLeft -= 0.1;
      const el = document.getElementById('findItTimer');
      if (el) el.textContent = `⏱️ ${Math.ceil(timeLeft)}s`;
      if (timeLeft <= 0) {
        cleanupFindIt();
        showLOTDYesNo();
      }
    }, 100);
  
    // Spawn cards
    function spawnCard() {
      if (lotdState.activity !== 'findIt') return;
      const emptySlots = [];
      for (let i = 0; i < 9; i++) {
        if (!lotdState.findItGrid[i]) emptySlots.push(i);
      }
      if (emptySlots.length > 0) {
        const slotIdx = emptySlots[Math.floor(Math.random() * emptySlots.length)];
        const isTarget = Math.random() < 0.4;
        const letter = isTarget ? L : letters[Math.floor(Math.random() * letters.length)];
        if (isTarget) lotdState.findItTotal++;
        spawnFindItCard(slotIdx, letter, isTarget);
      }
      lotdState.findItSpawnTimer = setTimeout(spawnCard, 900);
    }
    spawnCard();
  }
  
  function spawnFindItCard(slotIdx, letter, isTarget) {
    const slot = document.querySelector(`.lotd-findit-slot[data-index="${slotIdx}"]`);
    if (!slot || lotdState.findItGrid[slotIdx]) return;
  
    const card = document.createElement('div');
    card.className = 'lotd-findit-card';
    card.textContent = letter;
    card.style.top = '50%';
    card.style.left = '50%';
    card.style.transform = 'translate(-50%, -50%)';
    card.style.opacity = '1';
    card.style.zIndex = '10';
  
    const lifespan = 2200;
    const cardObj = {
      element: card,
      isTarget,
      timeoutId: setTimeout(() => {
        if (lotdState.findItGrid[slotIdx] === cardObj) {
          card.classList.add('lotd-findit-sink');
          setTimeout(() => { if (card.parentNode) card.remove(); lotdState.findItGrid[slotIdx] = null; }, 300);
        }
      }, lifespan)
    };
    lotdState.findItGrid[slotIdx] = cardObj;
  
    card.addEventListener('click', () => {
      if (!lotdState.findItGrid[slotIdx] || lotdState.findItGrid[slotIdx] !== cardObj) return;
      clearTimeout(cardObj.timeoutId);
      lotdState.findItGrid[slotIdx] = null;
  
      if (isTarget) {
        card.classList.add('lotd-findit-correct');
        if (audioCtx) sounds.stompCorrect();
        lotdState.findItScore++;
        const scoreEl = document.getElementById('findItScoreEl');
        if (scoreEl) scoreEl.textContent = lotdState.findItScore;
        const particle = document.createElement('div');
        particle.className = 'score-particle';
        particle.textContent = '+1 ⭐';
        const r = card.getBoundingClientRect();
        particle.style.left = (r.left + r.width / 2) + 'px';
        particle.style.top = r.top + 'px';
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
      } else {
        card.classList.add('lotd-findit-wrong');
        if (audioCtx) sounds.wrong();
      }
      setTimeout(() => { if (card.parentNode) card.remove(); }, 350);
    });

    slot.appendChild(card);
  }
  
  function cleanupFindIt() {
    if (lotdState.findItTimer) { clearInterval(lotdState.findItTimer); lotdState.findItTimer = null; }
    if (lotdState.findItSpawnTimer) { clearTimeout(lotdState.findItSpawnTimer); lotdState.findItSpawnTimer = null; }
    lotdState.findItGrid.forEach((cardObj, i) => {
      if (cardObj) {
        clearTimeout(cardObj.timeoutId);
        if (cardObj.element && cardObj.element.parentNode) cardObj.element.remove();
        lotdState.findItGrid[i] = null;
      }
    });
    lotdState.activity = '';
  }
  
  // ======================================================
  // ACTIVITY 6: YES / NO — DOES IT START WITH ___?
  // ======================================================
  function showLOTDYesNo() {
    lotdState.activity = 'yesno';
    updateLOTDProgress('yesno');
    const L = lotdState.letter;
    const data = YES_NO_POOL[L];
  
    // Build queue of 6 questions
    const yesItems = [...data.yes].sort(() => Math.random() - 0.5).slice(0, 3);
    const noItems = [...data.no].sort(() => Math.random() - 0.5).slice(0, 3);
    lotdState.yesnoQueue = [...yesItems.map(i => ({ ...i, correct: true })), ...noItems.map(i => ({ ...i, correct: false }))].sort(() => Math.random() - 0.5);
    lotdState.yesnoScore = 0;
    lotdState.yesnoTotal = lotdState.yesnoQueue.length;
  
    const content = document.getElementById('lotdContent');
    content.innerHTML = `
      <div class="lotd-yesno-wrap">
        <div class="lotd-activity-title">Does it start with <span class="lotd-letter-badge">${L}</span>?</div>
        <div class="lotd-yesno-progress" id="yesnoProgress"></div>
        <div class="lotd-yesno-card" id="yesnoCard"></div>
        <div class="lotd-yesno-btns">
          <button class="lotd-yn-btn lotd-yn-no" id="ynNoBtn">❌ No</button>
          <button class="lotd-yn-btn lotd-yn-yes" id="ynYesBtn">✅ Yes!</button>
        </div>
        <div class="lotd-yesno-feedback" id="yesnoFeedback"></div>
      </div>
    `;
  
    if (audioCtx) sounds.instructionChime();
    renderYesNoQuestion();
  
    document.getElementById('ynYesBtn').addEventListener('click', () => handleYesNo(true));
    document.getElementById('ynNoBtn').addEventListener('click', () => handleYesNo(false));
  }
  
  function renderYesNoQuestion() {
    const q = lotdState.yesnoQueue[0];
    if (!q) { showLOTDDone(); return; }
  
    const card = document.getElementById('yesnoCard');
    card.innerHTML = `
      <div class="lotd-yesno-emoji">${q.e}</div>
      <div class="lotd-yesno-word">${q.w}</div>
    `;
    card.classList.remove('lotd-yn-correct', 'lotd-yn-wrong');
    document.getElementById('yesnoFeedback').textContent = '';
  
    // Update dot progress
    const total = lotdState.yesnoTotal;
    const done = total - lotdState.yesnoQueue.length;
    const prog = document.getElementById('yesnoProgress');
    prog.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot' + (i < done ? ' filled' : i === done ? ' current' : '');
      prog.appendChild(dot);
    }
  
    const btns = document.querySelectorAll('.lotd-yn-btn');
    btns.forEach(b => b.disabled = false);
  }
  
  function handleYesNo(answered) {
    const q = lotdState.yesnoQueue[0];
    const correct = answered === q.correct;
    const btns = document.querySelectorAll('.lotd-yn-btn');
    btns.forEach(b => b.disabled = true);
  
    const card = document.getElementById('yesnoCard');
    const feedback = document.getElementById('yesnoFeedback');
  
    if (correct) {
      card.classList.add('lotd-yn-correct');
      feedback.textContent = q.correct
        ? `✅ Yes! "${q.w}" starts with ${lotdState.letter}!`
        : `✅ Right! "${q.w}" doesn't start with ${lotdState.letter}!`;
      feedback.style.color = '#27ae60';
      if (audioCtx) sounds.correct();
      lotdState.yesnoScore++;
    } else {
      card.classList.add('lotd-yn-wrong');
      feedback.textContent = q.correct
        ? `❌ Actually yes! "${q.w}" starts with ${lotdState.letter}!`
        : `❌ Actually no! "${q.w}" doesn't start with ${lotdState.letter}!`;
      feedback.style.color = '#e74c3c';
      if (audioCtx) sounds.wrong();
    }
  
    lotdState.yesnoQueue.shift();
    setTimeout(() => {
      if (lotdState.yesnoQueue.length === 0) {
        showLOTDDone();
      } else {
        renderYesNoQuestion();
      }
    }, 1200);
  }
  
  // ======================================================
  // DONE SCREEN
  // ======================================================
  function showLOTDDone() {
    lotdState.activity = 'done';
    updateLOTDProgress('done');
    const L = lotdState.letter;
    const content = document.getElementById('lotdContent');
  
    content.innerHTML = `
      <div class="lotd-done-wrap">
        <div class="lotd-done-dino">🦕</div>
        <div class="lotd-done-title">You learned letter <span class="lotd-letter-badge">${L}</span>!</div>
        <div class="lotd-done-score">⭐ ${lotdState.yesnoScore} / ${lotdState.yesnoTotal} Yes/No correct</div>
        <div class="lotd-done-score">🦶 ${lotdState.findItScore} letters found!</div>
        <button class="lotd-next-btn" id="lotdDoneBtn">Back to Home 🏠</button>
      </div>
    `;
  
    if (audioCtx) {
      sounds.celebration();
      createConfetti();
    }
  
    document.getElementById('lotdDoneBtn').addEventListener('click', () => {
      cleanupFindIt();
      showScreen('homeScreen');
    });
  }
  
  // ======================================================
  // PROGRESS BAR
  // ======================================================
  const LOTD_ACTIVITIES = ['words', 'cases', 'trace', 'findIt', 'yesno', 'done'];
  
  function updateLOTDProgress(current) {
    const container = document.getElementById('lotdProgress');
    if (!container) return;
    container.innerHTML = '';
    LOTD_ACTIVITIES.forEach(act => {
      const dot = document.createElement('div');
      const idx = LOTD_ACTIVITIES.indexOf(act);
      const curIdx = LOTD_ACTIVITIES.indexOf(current);
      dot.className = 'progress-dot' + (idx < curIdx ? ' filled' : idx === curIdx ? ' current' : '');
      container.appendChild(dot);
    });
  }