import { css } from "@emotion/react";
import { editTitle } from "../../utils/editTitle";

type Props = {
  leftTime: number;
  stopped: boolean;
}

const timeFormat = (num: number) => {
  return ( '00' + num ). slice( -2 );
}

const Timer = ({
  leftTime,
  stopped,
}: Props) => {

  const h = Math.floor(leftTime/3600);
  const m = Math.floor((leftTime - h*3600)/60);
  const s = leftTime - h*3600 - m*60;

  const displayTime = `${timeFormat(h)}:${timeFormat(m)}:${timeFormat(s)}`;

  if (stopped) {
    editTitle("Stopped At " + displayTime);
  } else {
    editTitle(displayTime);
  }

  return (
    <main css={timer}>
      <div style={{
        color: stopped ? 'red' : 'white',
      }}>
        {displayTime}
      </div>
    </main>
  );
}

export default Timer;

const timer = css`
  display: flex;
  justify-content: center;

  font-size: 100px;
`
