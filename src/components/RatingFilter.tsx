import RatingInput from "./RatingInput";

function RatingFilter() {
  return (
    <fieldset className='rating-filter'>
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
