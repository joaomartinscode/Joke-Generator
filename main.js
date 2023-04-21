//Array with message examples
const jokes = ["What's the best thing about Switzerland? I don't know, but the flag is a big plus.", "What do you call an ant who fights crime? A vigilANTe!", "Why are snails slow? Because they're carrying a house on their back", "What’s the smartest insect? A spelling bee!", "What is fast, loud and crunchy? A rocket chip.", "What's a cat's favorite dessert? A bowl full of mice-cream."];


//Generate random numbers to select a message example
const randomJokeIndex = Math.floor(Math.random() * jokes.length);


//Access the random joke from the jokes array
const randomJoke = jokes[randomJokeIndex];


//Output the random joke in the console
console.log(randomJoke);

