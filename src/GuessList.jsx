import './App.css';

// eslint-disable-next-line react/prop-types
function GuessList({ guesses, getLetterColor }) {
    return (
        <div className="guess-list">
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {guesses.map((guess, index) => (
                    <li key={index}>
                        <ul className="letter-list">
                            {guess.split('').map((letter, idx) => (
                                <li key={idx} className="letter-item"
                                    style={{color: getLetterColor(idx, guess)}}>{letter}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GuessList;
