import Room from './Room';
import { AlertTriangle } from 'react-feather';
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
  const areRoomsAvailable = listOfRooms.length !== 0;
  return (
    <>
      <h4 className='card__body__title'>
        {areRoomsAvailable ? 
          `Available rooms: ${listOfRooms.length}` 
          : <><AlertTriangle className='card__body__title__icon'/>Sorry but there are no rooms available with your requirements</>}
      </h4>
      {listOfRooms}
    </>
  );
}

export default RoomsList;