import { css } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { editTitle } from '../../utils/editTitle';
import { timeStrToSeconds, timStrToNumbers } from '../../utils/calcTime';
import SelectTasks from "./SelectTasks";
import SelectTimes from "./SelectTimes";
import SelectVolume from "./SelectVolume";
import Timer from "./Timer"

const TopContainer = () => {
  const [leftTime, setLeftTime] = useState<number>(0);

  const [started, setStarted] = useState<boolean>(false);
  const [stopped, setStopped] = useState<boolean>(false);
  const stopRef = useRef(stopped);
  stopRef.current = stopped;

  useEffect(() => {
    if (started && !stopped && leftTime > 0) {
      countDownTime(leftTime);
    }
  }, [stopped]);
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 's') {
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
    
    setLeftTime(seconds);

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

  const selectTimer = useCallback((time: string) => {
    if (started) {
      return;
    }
    setStarted(true);
    setLeftTime(timeStrToSeconds(time));
    setStopped(true);
  }, [started, timeStrToSeconds, setLeftTime, setStarted, setStopped]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
      <div css={upSide}>
        <Timer
          stopped={stopped}
          leftTime={leftTime}
        />
        <div style={{
          marginBottom: '16px',
          width: '250px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {started && (
            <button css={timerButton} onClick={() => {
              setStopped((current) => !current);
            }}>
              {stopped ? 'Timer Start' : 'Timer Stop'}
            </button>
          )}
          {started && (
            <button css={timerButton} onClick={() => {
              const result = window.confirm("タイマーをリセットしますか？");
              if (!result) {
                return;
              }
              setStopped(true);
              setStarted(false);
              setLeftTime(0);
            }}>
              Timer Reset
            </button>
          )}
        </div>
        <SelectVolume />
      </div>
      <div style={{ display: 'flex', flexGrow: 1, paddingLeft: '12px' }}>
        <div css={leftSide}>
          <div style={{ flexGrow: 1 }}>
            <SelectTasks
              onSelectTask={(task: Task) => {
                selectTimer(task.defaultTime);
              }}
            />
          </div>
        </div>
        <div>
          <SelectTimes startTimer={selectTimer}/>
        </div>
      </div>
    </div>
  );
};

const upSide = css`
  height: 225px;
  flex-grow: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

`

const leftSide = css`
  width: 400px;
  display: flex;
  flex-direction: column;
`

const timerButton = css`
  border: none;
  width: 120px;
  padding: 8px;

  font-size: 16px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export default TopContainer;