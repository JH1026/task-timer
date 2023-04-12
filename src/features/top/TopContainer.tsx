import { css } from '@emotion/react';
import alarm from '../../assets/birds.mp3';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { timeStrToSeconds } from '../../utils/calcTime';
import SelectTasks from "./SelectTasks";
import SelectTimes from "./SelectTimes";
import SelectVolume from "./SelectVolume";
import Timer from "./Timer"

const TopContainer = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>();
  
  const [leftTime, setLeftTime] = useState<number>(0);

  const [started, setStarted] = useState<boolean>(false);
  const [stopped, setStopped] = useState<boolean>(false);
  const stopRef = useRef(stopped);
  stopRef.current = stopped;

  useEffect(() => {
    audioRef.current = new Audio(alarm);
    document.addEventListener('keydown', handleKeyDown, false)
  }, []);

  useEffect(() => {
    if (!stopped && leftTime > 0) {
      setStarted(true);
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

    audioRef?.current?.play();
    setStarted(false);
    setTimeout(() => {
      alert("時間になりました！");
    }, 10);
  }

  const selectTimer = useCallback((time: string) => {
    if (started) {
      return;
    }

    audioRef?.current?.pause();
    setLeftTime(timeStrToSeconds(time));
    setStopped(true);
  }, [started, timeStrToSeconds, setLeftTime, setStarted, setStopped]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
      <button onClick={() => navigate('/task-config')} css={config}>
        タスク設定
      </button>
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
          {leftTime > 0 && (
            <button css={timerButton} onClick={() => {
              setStopped((current) => !current);
            }}>
              {stopped ? 'Timer Start' : 'Timer Stop'}
            </button>
          )}
          {leftTime > 0 && (
            <button css={timerButton} onClick={() => {
              const result = window.confirm("タイマーをリセットしますか？");
              if (!result) {
                return;
              }
              audioRef?.current?.pause();
              setStopped(true);
              setStarted(false);
              setLeftTime(0);
            }}>
              Timer Reset
            </button>
          )}
        </div>
        <SelectVolume
          onChangeVolumeSize={(size: number) => {
            if (!audioRef?.current) return; 
            
            audioRef.current.volume = size;
          }}
        />
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

const config = css`
  position: absolute;
  
  background: #999;
  color: #fff;
  border: none;

  width: 150px;
  padding: 4px;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export default TopContainer;