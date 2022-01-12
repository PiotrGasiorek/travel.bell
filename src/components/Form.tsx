import Counter from './Counter';
import RatingFilter from './RatingFilter';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setResults } from '../features/search-slice';

function Form() {
  const dispatch = useAppDispatch();
  const { children, adults } = useAppSelector(state => state.search);

  const handleOnClick = () => {
    dispatch(setResults());
  }

  return (
    <form className='form'>
      <RatingFilter
      />
      <Counter 
        {...adults}
      />
      <Counter 
        {...children}  
      />
      <button className='form__btn' onClick={handleOnClick} type='button'>Search rooms</button>
    </form>
  );
}

export default Form;
