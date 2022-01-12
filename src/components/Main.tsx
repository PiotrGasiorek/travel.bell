import CardsList from './CardsList';
import Form from './Form';
import { useAppSelector } from '../app/hooks';


function Main() {
  const { results, rating } = useAppSelector(state => state.search);
  const filteredHotels = results.filter(hotel => hotel.starRating <= rating);  
  return (
    <main className='main'>
      <Form/>
      {filteredHotels.length === 0 && 'Sorry we could not find any hotels which would fit your requirements'}
      <CardsList hotels={filteredHotels}/>
    </main>
  );
}

export default Main;
