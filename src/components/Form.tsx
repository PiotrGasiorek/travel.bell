import Counter from './Counter';
import RatingFilter from './RatingFilter';

function Form() {
  return (
    <form className='form'>
      <RatingFilter
      />
      <Counter 
        minValue={1}
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
