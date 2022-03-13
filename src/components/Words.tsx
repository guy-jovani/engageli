import React from 'react';

import './Words.css';

const Words: React.FC<{ onChooseWord: (w: string) => void, initialVal: string }> = (props) => {
  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChooseWord(e.target.value);
  };

  return (
    <select name='words' id='words' onChange={onSelectHandler} value={props.initialVal}>
      <option value=''>Click to choose a game</option>
      <option value='falafel'>1</option>
      <option value='stairs'>2</option>
      <option value='kaboom'>3</option>
    </select>
  );
};

export default Words;
