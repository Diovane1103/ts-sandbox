// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 1 – Basic Types ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types
// • Analyze transpiler output
// • Identify when type checking happens

export default () => {
  // ======== Exercise 1.1 ========
  // Goals:
  // • Fix errors
 
  let pi = '3.14159';
  let tau = pi * 2;
  
  console.log('[Exercise 1.1]', `${tau} is ${pi} times two.`);

  // ======== Exercise 1.2 ========
  // Goals:
  // • Fix type annotations

  let pie: symbol;
  
  pie = 'blueberry';

  console.log('[Exercise 1.2]', `I like to eat ${pie}-flavored pie.`);

  // ======== Exercise 1.3 ========
  // Goals:
  // • Add type annotations (as explicit as possible)
  // • Look how bad the code completion is w/ `any` type 😱
  
  let isReady;
  isReady = true;
  isReady = 1;
  isReady = 'true';

  console.log('[Exercise 1.3]', `You are ${isReady ? 'ready' : 'not ready'} to learn TypeScript!`);

  // ======== Exercise 1.4 ========
  // • Fix mistyped values
  // • Add type annotations (as explicit as possible)

  let isMark: boolean;
  isMark = 1;
  isMark = 'false';
  isMark = '';

  console.log('[Exercise 1.4]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);

  // ======== Exercise 1.5 ========
  // Goals:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const integer = 6;
  const float = 6.66;
  const hex = 0xf00d;
  const binary = 0b1010011010;
  const octal = 0o944;
  const negZero = -0;
  const actuallyNumber = NaN;
  const largestNumber = Number.MAX_VALUE;
  const mostBiglyNumber = Infinity;

  const members: any[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
  ];

  members[0] = '12345';

  console.log('[Exercise 1.5]', members);

  // ======== Exercise 1.6 ========
  // Goal:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const sequence = Array.from(Array(10).keys());
  const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
  const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];

  // extra credit
  const allMyArrays = [sequence, animals, stringsAndNumbers];

  console.log(allMyArrays);

  // ======== Exercise 1.7 ========
  // Goal:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  // We want to represent an inventoryItem as a structure where
  // the first entry is the item name and the second is the quantity

  const inventoryItem = ['fidget wibbit', 11];

  // later we destructure it
  const [name, qty] = inventoryItem;

  const msg = addInventory(name, qty);

  console.log('[Exercise 1.7]', msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }
}
