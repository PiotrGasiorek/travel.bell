type Props = {
  id: string,
  longDescription: string,
  name: string,
  occupancy: {
    maxAdults: number, 
    maxChildren: number
  },
  bedConfiguration: string,
  disabledAccess: boolean,
  facilities: Array<any>,
  images: Array<any>,
}

const Room: React.FC<Props> = (props) => {
  const {
    id,
    longDescription,
    name,
    occupancy,
  } = props;
  return (
    <>
      <div className='room' key={id}>
        <div className='room__header'>
          <h5 className="room__header__title">
            {name}
          </h5>
          <div className="room__header__slots">
            <p className="room__header__slots__category">
              Adults: {occupancy.maxAdults}
            </p>
            <p className="room__header__slots__category">
              Children: {occupancy.maxChildren}
            </p>
          </div>
        </div>
        <div className='room__body'>
          <p>
            {longDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Room;