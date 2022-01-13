type Props = {
  text: string,
}

const Message: React.FC<Props> = (props) => {
  return (
    <>
      <p className='message'>{props.text}</p>
    </>
  );
}

export default Message;