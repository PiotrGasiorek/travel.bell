import { Star } from 'react-feather';
import Rating from 'react-rating';
import { setRating } from '../features/search-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

function RatingInput() {
  const dispatch = useAppDispatch();
  const initialRating = useAppSelector(state => state.search.rating);
  const handleRatingUpdate = (value: number) => {
    dispatch(setRating(value));
  }

  return (
    <div className='rating-filter__input' id='rating'>
      <Rating
        emptySymbol={<Star stroke='#4ed8c8'/>}
        fullSymbol={[...Array(5)].map(() => <Star fill='#4ed8c8' stroke='#4ed8c8'/>)}
        initialRating={initialRating}
        onChange={value => handleRatingUpdate(value)}
      />
    </div>
  );
}

export default RatingInput;
