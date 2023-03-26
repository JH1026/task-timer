import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { editTitle } from '../../utils/editTitle';
import SelectTasks from "./SelectTasks";
import SelectTimes from "./SelectTimes";
import SelectVolume from "./SelectVolume";
import Timer from "./Timer"

const TopContainer = () => {
  const [leftTime, setLeftTme] = useState<number>(0);
  const [stopped, setStopped] = useState<boolean>(false);
  const stopRef = useRef(stopped);
  stopRef.current = stopped;

  useEffect(() => {
    if (!stopped && leftTime > 0) {
      countDownTime(leftTime);
    }
  }, [stopped]);
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setStopped((current) => {
        return !current;
      });
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
  }, []);

  const countDownTime = (seconds: number) => {
    if (stopRef.current) {
      return;
    }
    
    setLeftTme(seconds);

    if (seconds > 0) {
      setTimeout(() => {
        countDownTime(seconds - 1);
      }, 1000);
  
      return;
    }
    
    setTimeout(() => {
      alert("時間になりました！");
    }, 10);
  }

  const startTimer = (time: string) => {
    if (leftTime > 0) {
      return;
    }
    const [h, m, s] = time.split(":").map(item => Number(item));
    countDownTime(h*60*60+m*60+s);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
      <div css={upSide}>
        <Timer stopped={stopped} leftTime={leftTime} />
        <SelectVolume />
      </div>
      <div style={{ display: 'flex', flexGrow: 1, paddingLeft: '12px' }}>
        <div css={leftSide}>
          <div style={{ flexGrow: 1 }}>
            <SelectTasks />
          </div>
        </div>
        <div>
          <SelectTimes startTimer={startTimer}/>
        </div>
      </div>
    </div>
  );
};

const upSide = css`
  height: 200px;
  flex-grow: 0;
`

const leftSide = css`
  width: 400px;
  display: flex;
  flex-direction: column;
`


export default TopContainer;