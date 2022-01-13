import { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { ChevronLeft } from 'react-feather';


type Props = {
  images: Array<any>,
}

const Carousel: React.FC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (value: number) => {
    let newIndex = value;
    if (newIndex < 0) {
      newIndex = props.images.length - 1;
    } else if (newIndex >= props.images.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  const listOfImages = props.images.map((img, index) => {
    return (
      <img 
        src={img.url} 
        alt={img.alt} 
        id={index.toString()}
        className={`carousel__content__img ${activeIndex === index ? 'carousel__content__img--active' : ''}`}
      />
    )
  })

  return (
    <div className='carousel'>
      <div 
        className='carousel__content'
      >
        {listOfImages}
      </div>
      <div className='carousel__controlers'>
        <button
          className='carousel__controlers__btn'
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <ChevronLeft size='40px'/>
        </button>
        <button
          className='carousel__controlers__btn'
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <ChevronRight size='40px'/>
        </button>
      </div>
    </div>
  );
}

export default Carousel;