import { css } from "@emotion/react";
import Title from "../generic/Title";

type Props = {
  startTimer: (time: string) => void;
}

const SelectTimes = ({
  startTimer
}: Props) => {

  const times = [
    "00:00:05", "00:01:05", "01:00:05",
  ]

  return (
    <>
      <Title>Frequently Used</Title>
      <Title>Timer List</Title>
      <div>
        {times.map((time) => {
          return <button key={time} onClick={() => startTimer(time)}>{time}</button>
        })}
      </div>
    </>
  );
};

export default SelectTimes;

const timeButton = css`
  
`
