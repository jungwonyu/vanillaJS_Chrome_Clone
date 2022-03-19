const quotes = [
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "Laughter is timeless, Imagination has no age. And dreams are forever.",
    author: "Walt Disney",
  },
  {
    quote: "Today's special moments are tomorrow's memories.",
    author: "Aladdin",
  },
  {
    quote: "Sometimes the right path is not the easiest one.",
    author: "Pocahontas",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 화면에 나타나게 하기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
