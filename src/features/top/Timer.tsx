import { css } from "@emotion/react";

const Timer = () => {

  return (
    <main css={timer}>
      <div>00:10:05</div>
    </main>
  );
}

export default Timer;

const timer = css`
  display: flex;
  justify-content: center;

  font-size: 100px;
`
