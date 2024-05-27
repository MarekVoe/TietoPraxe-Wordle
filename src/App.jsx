import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [guesses, setGuesses] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [guessWord, setGuessWord] = useState('Test');


    const handleAddGuess = () => {
        if (inputValue.trim()) {
            setGuesses([...guesses, inputValue]);
            setInputValue('');
        }
    };

    function getLetterColor(index, guess) {
        if(guess[index] === guessWord.toLowerCase()[index]) {
            return "green";
        }
        return "white";
    }

    return (
        <>
            <h1>Wordle - {guessWord}</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddGuess}>Add guess</button>
            </div>
            <div className="guess-list">
                <ul>
                    {guesses.map((guess, index) => (
                        <li key={index}>
                            <ul className="letter-list">
                                {guess.split('').map((letter, idx) => (
                                    <li key={idx} className="letter-item" style={{color: getLetterColor(idx, guess, guessWord)}}>{letter}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
