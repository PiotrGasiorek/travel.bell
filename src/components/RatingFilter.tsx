import { useAppSelector } from "../app/hooks";
import RatingInput from "./RatingInput";

const RatingFilter:React.FC = () => {
  const { rating } = useAppSelector(state => state.search);
  return (
    <fieldset className='rating-filter' title={`Hotels with ${rating} stars and below`}>
      <label className='rating-filter__label' htmlFor="rating">
        <span className="rating-filter__label__header">
          Rating
        </span>  
      </label>
      <RatingInput/>
    </fieldset>
  );
}

export default RatingFilter;
