import React from 'react';
import Counter from './Counter';

function Form() {
  return (
    <form className='form'>
      <Counter 
        minValue={0}
        maxValue={16}     
        defaultValue={1}   
        header='Adults'  
        subheader='Add adults'  
      />
      <Counter 
        minValue={0}
        maxValue={5}     
        defaultValue={0}   
        header='Children'  
        subheader='Ages 16 or above'  
      />
      <button className='form__btn'>Search rooms</button>
    </form>
  );
}

export default Form;
