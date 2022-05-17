const quotes = [
    {
        quote: "Life isn't fair. It's just fairer than death, that's all.",
        author: "William Goldman",
    },
    {
        quote: "Life is a fatal complaint, and an eminently contagious one.",
        author: "Oliver Wendell Holmes",
    },
    {
        quote: "The purpose of life is to fight maturity.",
        author: "Dick Werthimer",
    },
    {
        quote: "Life is a moderately good play with a badly written third act.",
        author: "Truman Capote",
    },
    {
        quote: "The universe is change; our life is what our thoughts make it.",
        author: "Marcus Aurelius Antoninus",
    },
    {
        quote: "Success didn't spoil me, I've always been insufferable.",
        author: "Fran Lebowitz",
    },
    {
        quote: "Frugality without creativity is deprivation.",
        author: "Amy Dacyczyn",
    },
    {
        quote: "To freely bloom - that is my definition of success.",
        author: "Gerry Spence",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author: "Genghis Khan",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
