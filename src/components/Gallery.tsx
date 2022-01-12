import Carousel from './Carousel';

type Props = {
  images: Array<any>,
}

const Gallery: React.FC<Props> = (props) => {
  const isMoreThanOneImage = props.images.length > 1;
  return (
    <>
      {isMoreThanOneImage ? 
        <Carousel images={props.images}/> 
        :
        <img 
          className='card__gallery__img'
          src={props.images[0].url} 
          alt={props.images[0].alt} 
        /> 
      }
    </>
  );
}

export default Gallery;