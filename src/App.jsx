import { useState } from 'react';
import './App.css';
import GuessList from "./GuessList.jsx";

function App() {
    const [guesses, setGuesses] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [guessWord, setGuessWord] = useState('');
    const [maxGuesses, setMaxGuesses] = useState(5);
    const [currentGuess, setCurrentGuess] = useState(1);
    const [wordGuessed, setWordGuessed] = useState(false);

    const words = [
        "Apple", "Tiger", "Lemon", "Candy", "Water", "Chair", "Horse", "Plant",
        "Queen", "Table", "Ocean", "Bread", "Earth", "Angel", "Brush", "Dance",
        "Ghost", "Hotel", "Jelly", "Knife", "Music", "Peach", "River", "Smile",
        "Truck", "Snake", "Space", "Beach", "Crown", "Flute", "Pearl", "Grass",
        "Maple", "Onion", "Pizza", "Radar", "Sheep", "Shoes", "Skirt"
    ];

    if (!guessWord) {
        const randomIndex = Math.floor(Math.random() * words.length);
        setGuessWord(words[randomIndex]);
    }
    const handleAddGuess = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setGuesses([...guesses, inputValue]);
            setInputValue('');
            setCurrentGuess(currentGuess + 1);
            if (inputValue.toLowerCase() === guessWord.toLowerCase()) {
                setWordGuessed(true);
            }
        }
    };

    function reset() {
        setGuesses([]);
        setInputValue('');
        setGuessWord('');
        setCurrentGuess(1);
        setWordGuessed(false);
    }

    function getLetterColor(index, guess) {
        if (guess.toLowerCase()[index] === guessWord.toLowerCase()[index]) {
            return "green";
        } else if (guessWord.includes(guess[index])) {
            return "yellow"
        }
        return "black";
    }

    if (currentGuess <= maxGuesses && !wordGuessed) {
        return (
            <>
                <h1>Wordle</h1>
                <h2>Current guess: {currentGuess}</h2>
                <div className="input-container">
                    <form onSubmit={handleAddGuess}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div>
                        <button onClick={handleAddGuess}>Add guess</button>
                        </div>
                    </form>
                </div>
                <GuessList guesses={guesses} guessWord={guessWord} getLetterColor={getLetterColor} />
            </>
        );
    } else if (wordGuessed) {
        return (
            <>
                <h1>Wordle</h1>
                <h2>Congratulations! You guessed the word correctly!</h2>
            </>
        );
    } else {
        return (
            <>
                <h1>Wordle</h1>
                <h2>Sorry, you have run out of guesses! The word was {guessWord}</h2>
                <button onClick={reset}>Try again</button>
            </>
        );
    }
}

export default App;