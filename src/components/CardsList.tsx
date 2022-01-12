import Card from "./Card";

type Props = {
  hotels: Array<any>;
}

const  CardsList = (props: Props) => {
  const listOfCards = props.hotels.map(hotel => <Card {...hotel} key={hotel.id}/>);
  return (
    <>
      {listOfCards}
    </>
  );
}

export default CardsList;
