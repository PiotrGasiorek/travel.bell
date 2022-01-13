import React from 'react';
import CounterButton from './CounterButton';
import { useAppDispatch } from '../app/hooks';
import { 
  setAdults, 
  updateAdultsByAmount,
  setChildren, 
  updateChildrenByAmount,
} from '../features/search';

type Props = {
  minValue: number;
  maxValue: number;
  count: number;
  header: string;
  subheader: string;
  id: string;
}

const Counter: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const isCounterForAdults = props.header === 'Adults';

  const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    isCounterForAdults ? 
      dispatch(setAdults(+e.target.value)) 
      : dispatch(setChildren(+e.target.value));    
  }

  const updateCounter = (value: number) => {
    isCounterForAdults ? 
      dispatch(updateAdultsByAmount(value)) 
      : dispatch(updateChildrenByAmount(value));  
  };

  return (
    <fieldset className='counter'>
      <label className='counter__label' htmlFor={props.id}>
        <span className='counter__label__header'>{props.header}</span>
        <span className='counter__label__subheader'>{props.subheader}</span>
      </label>
      <CounterButton 
        increaseBtn={false} 
        updateCounter={updateCounter}
        className='counter__btn'
        shouldBeDisabled={props.count <= props.minValue}
      />
      <input 
        className='counter__input'
        id={props.id}
        type='number' 
        placeholder='0' 
        onChange={handleInputUpdate}
        value={props.count}
        max={props.maxValue}
        min={props.minValue}
      />
      <CounterButton 
        increaseBtn={true} 
        updateCounter={updateCounter}
        className='counter__btn'  
        shouldBeDisabled={props.count >= props.maxValue}
      />
    </fieldset>
  );
}

export default Counter;
