import './Game.css';
import { useState } from 'react';
import Words from './Words';
import Guess from './Guess';
import HangImg from './HangImg';

const Game: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [initialSelected, setInitialSelected] = useState<string>('');
  const [mistakeNum, setMistakeNum] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

  const onChooseWord = (newWord: string) => {
    if (newWord === word) return;
    setWord(newWord);
    setCorrectGuesses(Array(newWord.length).fill('_'));
    setWrongGuesses([]);
    setMistakeNum(0);
    setInitialSelected(newWord);
  };

  const onGuess = (letter: string) => {
    if (!word) return;
    const regex = new RegExp(letter, 'g');

    const matches = word.matchAll(regex);
    const indices: number[] = [];
    for (const match of matches) {
      indices.push(match.index!);
    }

    if (indices.length) {
      setCorrectGuesses((prev: string[]): string[] => {
        const prevGuess = [...prev];
        indices.forEach((ind) => (prevGuess[ind] = letter));
        if (prevGuess.join('') === word) {
          alert('you won the game');
          document.title = 'win'; 
          onResetHandler();
        }
        return prevGuess;
      });
    } else {
      setMistakeNum((prev) => prev + 1);
      if (!wrongGuesses.includes(letter))
        setWrongGuesses((prev: string[]): string[] => [...prev, letter]);

      if (mistakeNum === 5) {
        alert('you lost the game');
        document.title = 'lost';
        onResetHandler();
      }
    }
  };

  const onResetHandler = (): void => {
    setWord('');
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setMistakeNum(0);
    setInitialSelected('');
  };

  return (
    <div className='Game'>
      <div className='title'>
        <h2>Hangman</h2>
        <HangImg numInd={mistakeNum} />
      </div>

      <div className='game-options'>
        <div className='choose-game'>
          <Words initialVal={initialSelected} onChooseWord={onChooseWord} />
          <button className='reset' onClick={onResetHandler}>
            Reset Game
          </button>
        </div>
        <Guess onGuess={onGuess} />

        <div className='guesses'>
          <span>Guesses: {wrongGuesses.join(', ')}</span>
          <span>Word: {correctGuesses.join(' ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
