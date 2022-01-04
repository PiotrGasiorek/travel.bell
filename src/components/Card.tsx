function Card() {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__carusel'>
          Carusel
        </div>
        <div className='card__details'>
          <h3 className="card__details__title">Card header</h3>
          <address className="card__details__address">
            Address
          </address>
        </div>
      </div>
      <div className='card__body'>
        <div className='room'>
          <div className='room__header'>
            <h4 className="room__header__title">
              Room name
            </h4>
            <div className="room__header__slots">
              <p className="room__header__slots__category">
                Adults: 3
              </p>
              <p className="room__header__slots__category">
                Children: 0
              </p>
            </div>
          </div>
          <p className='room__body'>
            Room description
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;