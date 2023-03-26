import { css } from "@emotion/react";
import Title from "../generic/Title";

type Props = {
  startTimer: (time: string) => void;
}

const SelectTimes = ({
  startTimer
}: Props) => {

  const times = [
    "00:07:30", "00:15:00", "00:20:00", "00:30:00", "00:45:00", "00:40:00", 
    "00:03:00", "00:00:30", "01:00:00", "00:00:05", "00:01:05", "01:00:05",
  ];

  return (
    <>
      <Title>最近使用したタイマー</Title>
      <Title>タイマー 一覧</Title>
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        {times.map((time) => {
          return <button css={timeButton} key={time} onClick={() => startTimer(time)}>{time}</button>
        })}
      </div>
    </>
  );
};

export default SelectTimes;

const timeButton = css`
  border: none;
  width: '200px';
  background: #9DCCE0;
  padding: 8px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);

  :hover {
    opacity: 0.8;
  }
`
