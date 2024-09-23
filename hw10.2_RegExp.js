let text = "Wonderful, Happiness, Joyful, Time, Task, Apple";
let patern = /\b[^Aa\s,]{6,}\b/g;
let matches = text.match(patern);
console.log(matches);
