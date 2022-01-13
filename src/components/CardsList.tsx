import Card from "./Card";

type Props = {
  hotels: Array<any>;
}

const CardsList: React.FC<Props> = (props) => {
  const listOfCards = props.hotels.map(hotel => <Card {...hotel} key={hotel.id}/>);
  return (
    <>
      {listOfCards}
    </>
  );
}

export default CardsList;
