import React, { useRef } from 'react';
import './Guess.css';

const Guess: React.FC<{ onGuess: (l: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current!.value) return;
    props.onGuess(inputRef.current!.value);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input
        ref={inputRef}
        maxLength={1}
        type='text'
        className='form-input'
        placeholder='Enter letter guess'
      />
      <button className='form-btn'>Submit</button>
    </form>
  );
};

export default Guess;
