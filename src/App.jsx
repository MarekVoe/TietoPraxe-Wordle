import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [guesses, setGuesses] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [guessWord, setGuessWord] = useState('Test');
    const [maxGuesses, setMaxGuesses] = useState(5);
    const [currentGuess, setCurrentGuess] = useState(1);

    const handleAddGuess = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setGuesses([...guesses, inputValue]);
            setInputValue('');
            setCurrentGuess(currentGuess + 1);
        }
    };

    function getLetterColor(index, guess) {
        if (guess.toLowerCase()[index] === guessWord.toLowerCase()[index]) {
            return "green";
        } else if (guessWord.includes(guess[index])) {
            return "yellow"
        }
        return "white";
    }
    if (currentGuess <= maxGuesses) {
        return (
            <>
                <h1>Wordle - {guessWord}</h1>
                <h2>Current guess: {currentGuess}</h2>
                <div className="input-container">
                    <form onSubmit={handleAddGuess}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleAddGuess}>Add guess</button>
                    </form>
                </div>
                <div className="guess-list">
                    <ul>
                        {guesses.map((guess, index) => (
                            <li key={index}>
                                <ul className="letter-list">
                                    {guess.split('').map((letter, idx) => (
                                        <li key={idx} className="letter-item"
                                            style={{color: getLetterColor(idx, guess, guessWord)}}>{letter}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    } else {
        return (
            <>


            </>
        )
    }
}

export default App;
