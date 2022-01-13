import logo from '../logo.svg';

type Props = {
  className: string;
}

const Logo: React.FC<Props> = (props) => {
  return (
    <img className={props.className} src={logo} alt='travel.bell logo'/>
  );
}

export default Logo;
