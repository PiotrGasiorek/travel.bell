import Room from './Room';
import { useAppSelector } from '../app/hooks';

type Props = {
  rooms: Array<any>;
}

const  RoomsList = (props: Props) => {
  const { adults, children } = useAppSelector(state => state.search);
  const filteredRooms = props.rooms
    .filter(room => room.occupancy.maxAdults >= adults.count)
    .filter(room => room.occupancy.maxChildren >= children.count);
  const listOfRooms = filteredRooms.map(room => <Room {...room} key={room.id}/>)
  return (
    <>
      <h4 className='card__body__title'>
        {listOfRooms.length !== 0 ? `Available rooms: ${listOfRooms.length}` : 'Sorry but there are no available rooms with your requirements'}
      </h4>
      {listOfRooms}
    </>
  );
}

export default RoomsList;