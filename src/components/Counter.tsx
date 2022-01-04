import React, { useState } from 'react';
import { CounterButton } from './CounterButton';

type Props = {
  minValue: number;
  maxValue: number;
  defaultValue: number;
  header: String;
  subheader: String;
}

export const  Counter = (props: Props) => {
  const [count, setCount] = useState<number>(props.defaultValue);
  const counterId = Math.random().toString();

  const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));      
  }

  const updateCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <fieldset className='counter'>
      <label className='counter__label' htmlFor={counterId}>
        <span className='counter__label__header'>{props.header}</span>
        <span className='counter__label__subheader'>{props.subheader}</span>
      </label>
      <CounterButton 
        increaseBtn={false} 
        updateCounter={updateCounter}
        className='counter__btn'
        shouldBeDisabled={count === props.minValue}
      />
      <input 
        className='counter__input'
        id={counterId}
        type='number' 
        placeholder='0' 
        onChange={handleInputUpdate}
        value={count}
      />
      <CounterButton 
        increaseBtn={true} 
        updateCounter={updateCounter}
        className='counter__btn'  
        shouldBeDisabled={count === props.maxValue}
      />
    </fieldset>
  );
}

export default Counter;
