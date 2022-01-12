import logo from '../logo.svg';

type Props = {
  className: string;
}

function Logo(props: Props) {
  return (
    <img className={props.className} src={logo} alt='travel.bell logo'/>
  );
}

export default Logo;
