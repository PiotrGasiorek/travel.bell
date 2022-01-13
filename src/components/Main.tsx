import CardsList from './CardsList';
import Message from './Message';
import Form from './Form';
import { useAppSelector } from '../app/hooks';

function Main() {
  const { results, rating } = useAppSelector(state => state.search);
  const filteredHotels = results.filter(hotel => hotel.starRating <= rating);  
  const isDataFromApiAvailable = results.length !== 0;
  const noHotelsAvailable = filteredHotels.length === 0;
  return (
    <main className='main'>
      <Form/>
      {(noHotelsAvailable && isDataFromApiAvailable) && 
        <Message text='Sorry we could not find any hotels which would fit your requirements'/>
      }
      <CardsList hotels={filteredHotels}/>
    </main>
  );
}

export default Main;
