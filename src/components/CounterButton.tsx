import React from 'react';
import { Plus, Minus } from 'react-feather';

type Props = {
  increaseBtn: boolean;
  updateCounter: Function;
  className: string;
}

export const  CounterButton = (props: Props) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const passedValue = props.increaseBtn ? 1 : -1;
    props.updateCounter(passedValue);
  };

  return (
    <button type='button' onClick={handleButtonClick} className={props.className}>
      {props.increaseBtn ? <Plus/> : <Minus/>}
    </button>
  );
}