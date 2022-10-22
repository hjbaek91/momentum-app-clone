const quotes = [
  {
    quote: `"The way to get started is to quit talking and begin doing." - `,
    author: "Walt Disney",
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." - `,
    author: "Oprah Winfrey",
  },
  {
    quote: `"Always remember that you are absolutely unique. Just like everyone else." - `,
    author: "Margaret Mead",
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams. - "`,
    author: "Eleanor Roosevelt",
  },
  {
    quote: `"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart." - `,
    author: "Helen Keller",
  },
  {
    quote: `"Whoever is happy will make others happy too." - `,
    author: "Anne Frank",
  },
  {
    quote: `"Never let the fear of striking out keep you from playing the game." - `,
    author: "Babe Ruth",
  },
  {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." - `,
    author: "Dr. Seuss",
  },
  {
    quote: `"Keep smiling, because life is a beautiful thing and there's so much to smile about." - `,
    author: "Marilyn Monroe",
  },
  {
    quote: `"The question isn't who is going to let me; it's who is going to stop me." - `,
    author: "Ayn Rand",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
