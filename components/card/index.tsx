import './index.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { children } = props;
  return <>
    <div id='card'>
      {children}
    </div>
  </>
}

export default Card;