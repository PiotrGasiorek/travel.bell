import Rating from 'react-rating';
import { Star } from 'react-feather';
import RoomsList from './RoomsList';

type Props = {
    address1: string
    address2: string
    images: Array<object>,
    name: string,
    rooms: Array<object>,
    starRating: string
}
const Card: React.FC<Props> = (props) => {
  const {
    name,
    address1,
    address2,
    starRating,
    rooms,
    images
  } = props;
  
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__gallery'>
          {/* Carusel Component */}
          <img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          {/* {images[0].url && <img src={images[0].url} alt={images[0].alt}/>} */}
        </div>
        <div className='card__details'>
          <h3 className="card__details__title">{name}</h3>
          <address className="card__details__location">
            <h4 className="card__details__location__title">Address</h4>
            <p className="card__details__location__address">
              {address1}
              <br/>
              {address2}
            </p>
          </address>
          <div className="card__details__rating">
            <h4 className="card__details__rating__title">Rating</h4>
            <Rating
              emptySymbol={<Star stroke='#4ed8c8'/>}
              fullSymbol={[...Array(5)].map(() => <Star fill='#4ed8c8' stroke='#4ed8c8'/>)}
              initialRating={parseFloat(starRating)}
              readonly={true}
              aria-label={`This hotel has ${starRating} stars`}
            />
          </div>
        </div>
      </div>
      <div className='card__body'>
        <RoomsList rooms={rooms}/>
      </div>
    </div>
  );
}

export default Card;