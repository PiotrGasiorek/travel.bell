import RatingDisplay from "./RatingDisplay";

function RatingFilter() {
  return (
    <fieldset className='rating-filter'>
      <label className='rating-filter__label' htmlFor="rating">
        <span className="rating-filter__label__header">
          Rating
        </span>  
      </label>
      <RatingDisplay/>
    </fieldset>
  );
}

export default RatingFilter;
