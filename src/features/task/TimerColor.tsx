
type Props = {
  color: string;
  onClick: () => void;
  selected: boolean;
}

const TimerColor = ({
  color,
  onClick,
  selected
}: Props) => {

  return (
    <div style={{
      border: selected ? '2px solid #fff' : 'none',
      width: '30px',
      height: '30px',
      backgroundColor: color,
      cursor: 'pointer',
      boxSizing: 'border-box',
    }}
    onClick={onClick}
    />
  );
}

export default TimerColor;
