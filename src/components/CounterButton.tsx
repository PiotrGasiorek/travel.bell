import React from 'react';
import { Plus, Minus } from 'react-feather';

type Props = {
  increaseBtn: boolean;
  updateCounter: Function;
  className: string;
  shouldBeDisabled: boolean;
}

export const  CounterButton = (props: Props) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const passedValue = props.increaseBtn ? 1 : -1;
    props.updateCounter(passedValue);
  };

  return (
    <button type='button' onClick={handleButtonClick} className={`${props.className} ${props.shouldBeDisabled ? 'counter__btn--disabled' : ''}`} disabled={props.shouldBeDisabled ? true : false}>
      {props.increaseBtn ? <Plus/> : <Minus/>}
    </button>
  );
}