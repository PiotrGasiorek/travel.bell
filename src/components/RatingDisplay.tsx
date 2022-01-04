import { Star } from 'react-feather';
import Rating from 'react-rating';

function RatingDisplay() {
  const handleRatingUpdate = (e: number) => {
    console.log(e);
  }

  return (
    <div id='rating'>
      <Rating
        emptySymbol={<Star stroke='#4ed8c8'/>}
        fullSymbol={[1,2,3,4,5].map(() => <Star fill='#4ed8c8' stroke='#4ed8c8'/>)}
        initialRating={4}
        onChange={e => handleRatingUpdate(e)}
      />
    </div>
  );
}

export default RatingDisplay;
