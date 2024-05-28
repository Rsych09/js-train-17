// Завдання 1
/**
 * Функція `replaceText` замінює всі входження певного слова у тексті на задану фразу.
 *
 *  word - Слово для заміни.
 *  replacement - Фраза, якою треба замінити слово.
 *  text - Текст, у якому треба здійснити заміну.
 */
function replaceText(word, replacement, text) {
  // Створюємо регулярний вираз для пошуку слова з флагом 'g' (глобальний пошук).
  const regex = new RegExp(word, 'g');
  // Використовуємо метод `replace` регулярного виразу для заміни слова на фразу у тексті.
  const replacedText = text.replace(regex, replacement);
  // Повертаємо замінений текст.
  return replacedText;
}


// Перевірка
console.log("Завдання 1 ==============================");
console.log(
  replaceText(
    "example",
    "sample text",
    "This is an example sentence. Another example is here."
  )
);
// Виведе This is an sample text sentence. Another sample text is here.

// Завдання 2

/**
 * Функція `checkWord` перевіряє, чи міститься певне слово у тексті.
 *
 *  word - Слово для перевірки.
 *  text - Текст, який треба перевірити.
 */
function checkWord(word, text) {
  // Створюємо регулярний вираз для пошуку слова з флагом 'i' (регістронезалежний пошук).
  const regex = new RegExp(word, 'i');
  // Використовуємо метод `test` регулярного виразу для перевірки наявності слова у тексті.
  return regex.test(text);
}


// Перевірка
console.log("Завдання 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Виведе true

// Завдання 3

/**
 * Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *
 *  str - Рядок, з якого треба вилучити текст.
 */
function extractTextInParentheses(str) {
  // Створюємо регулярний вираз для знаходження тексту в круглих дужках.
  const regex = /\((.*?)\)/g;
  // Використовуємо метод `matchAll` для отримання всіх збігів регулярного виразу.
  const matches = str.matchAll(regex);
  // Створюємо масив зі знайденими текстами в круглих дужках.
  const extractedTexts = [...matches].map(match => match[1]);
  // Повертаємо масив вилучених текстів.
  return extractedTexts;
}


// Перевірка
console.log("Завдання 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]

// Завдання 4

/**
 * Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *
 *  str - Рядок, в якому потрібно знайти email-адреси.
 */
function countEmails(str) {
  // Створення регулярного виразу для пошуку email-адрес
  const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  // Використання методу `match` для отримання всіх збігів регулярного виразу
  const matches = str.match(regex);
  // Підрахунок кількості email-адрес
  return matches ? matches.length : 0;
}


// Перевірка
console.log("Завдання 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3

// Завдання 5
/**
 * Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок.
 */
function findWordOccurrences(str, word) {
  // Створення регулярного виразу для пошуку слова з флагами 'g' та 'i'
  const regex = new RegExp(word, 'gi');
  // Створення масиву для зберігання індексів збігів
  let matches = [];
  let match;
  // Поки рядок містить збіги з регулярним виразом
  while ((match = regex.exec(str)) !== null) {
    // Додавання індексу поточного входження слова у масив
    matches.push(match.index);
  }
  // Повернення масиву індексів
  return matches;
}


// Перевірка

console.log("Завдання 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Виведе  [ 16, 49 ]

// Завдання 6

/**
 * Функція `checkRegexFlags` перевіряє регулярний вираз на наявність флагів 'g' та 'm'.
 *
 *  regex - Регулярний вираз, який потрібно перевірити.
 * Повертає  - true, якщо флаги 'g' та 'm' присутні, інакше - false.
 */
function checkRegexFlags(regex) {
  // Отримуємо всі флаги регулярного виразу
  const flags = regex.flags;
  // Перевіряємо наявність флагів 'g' та 'm' за допомогою методу `includes`
  return flags.includes('g') && flags.includes('m');
}

// Перевірка

console.log("Завдання 6 ==============================");

console.log(checkRegexFlags(/pattern/gm));
// Виведе true

// Завдання 7

/**
 * Функція `replaceWordOccurrences` замінює всі входження заданого слова у рядку на нове слово.
 *
 *  str - Рядок, в якому потрібно замінити входження слова.
 *  word - Слово, яке потрібно замінити.
 *  newWord - Нове слово, яким потрібно замінити.
 * Повертає  - Результат заміни входжень слова у рядку.
 */
function replaceWordOccurrences(str, word, newWord) {
  // Створюємо регулярний вираз зі словом, використовуючи флаг 'g' для глобального пошуку всіх входжень.
  const regex = new RegExp(word, 'gi');
  // Замінюємо всі входження слова у рядку на нове слово.
  const replacedString = str.replace(regex, newWord);
  // Повертаємо результат
  return replacedString;
}


// Перевірка
console.log("Завдання 7 ==============================");

console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Виведе The quick brown cat jumps over the lazy dog. The cat is quick.

// Завдання 8

/**
 * Функція `checkFlags` перевіряє, які флаги використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив флагів, які використовуються у регулярному виразі.
 */
function checkFlags(regex) {
  // Отримуємо всі флаги регулярного виразу
  const flags = regex.toString().match(/[gimsuy]+/)[0].split('');
  // Повертаємо масив використаних флагів
  return flags;
}


// Приклад використання:
console.log("Завдання 8 ==============================");

console.log(checkFlags(/pattern/gimsy));
// Виведе[ 'ignoreCase', 'pattern' ]

// Завдання 9

/**
 * Функція `checkRegexMethods` перевіряє, які методи використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив методів, які використовуються у регулярному виразі.
 */
function checkRegexMethods(regex) {
  // Створюємо масив для зберігання використаних методів
  const methods = [];
  // Перевіряємо, чи використовуються різні методи за допомогою властивостей регулярного виразу
  if (regex.dotAll) methods.push('dotAll');
  if (regex.multiline) methods.push('multiline');
  if (regex.sticky) methods.push('sticky');
  // Повертаємо масив використаних методів
  return methods;
}


// Приклад використання:
console.log("Завдання 9 ==============================");

console.log(checkRegexMethods(/test/msy));
// Виведе [ 'dotAll', 'multiline', 'sticky' ]

// Завдання 10

/**
 * Функція `findWord` знаходить перше входження заданого слова у рядок за допомогою методу `search`.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 * Повертає  - Індекс першого входження слова у рядок або -1, якщо слово не знайдено.
 */
function findWord(str, word) {
  // Створюємо регулярний вираз для пошуку слова
  const regex = new RegExp(word);
  // Використовуємо метод `search` для пошуку першого входження слова
  const index = str.search(regex);
  // Повертаємо індекс першого входження слова або -1, якщо слово не знайдено
  return index;
}


// Приклад використання:
console.log("Завдання 10 ==============================");

console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
); // Виведе: 4
