import { css } from "@emotion/react";
import { useAsyncRetry } from "react-use";
import { useState } from "react";
import Title from "../generic/Title";
import { defaultTasks } from "./deafultTask";
import TaskButton from "./TaskButton";
import { addTask, deleteTask, getAllTask } from "../../utils/storage";
import TimerColor from "./TimerColor";

const colors = [
  "#000","#f00","#0f0","#aaf",
  "#990","#0ff","#f0f","#999",
]

const TaskConfigContainer = () => {
  const [selectedColor, setColor] = useState<string>("#000");
  const [taskName, setTaskName] = useState<string>("");
  const [timeStr, settimeStr] = useState<string>("");

  const { retry, value: inputtedTasks } = useAsyncRetry(async () => {
    return getAllTask() ?? [];
  }, []);

  return (
    <main css={mainContainer}>
      <div css={container}>
        <section>
          <div style={{ marginTop: '16px' }}>タスク名</div>
          <input type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)} />
          <div>タイマーの時間</div>
          <input type="text"
            value={timeStr}
            onChange={(e) => settimeStr(e.target.value)} />
          <div>タイマーの色</div>
          <div style={{
            display: 'flex',
            gap: '6px',
            margin: '4px 0px 12px 0px',
          }}>
            {colors.map((color) => {
              return (
                <TimerColor
                  key={color}
                  onClick={() => {
                    setColor(color);
                  }}
                  selected={color === selectedColor}
                  color={color} />
              )
            })}
          </div>
          <button onClick={() => {
            const allTasks = getAllTask();
            if (getAllTask().length > 10) {
              alert("タスクを１０以上登録できません。");
              return;
            }

            if (taskName === "") {
              alert("タスク名を入力してください");
              return;
            }

            if (allTasks.find((item) => item.name === taskName)) {
              alert("既に同名のタスク名があります");
              return;
            }

            if (timeStr.match(/(^[0-9]{6}$|^[0-9]{2}:[0-9]{2}:[0-9]{2}$)/) === null) {
              alert("数値6桁またはXX:XX:XXの形式で入力してください");
              return;
            }
            
            addTask(
              taskName,
              timeStr.length <= 6 ? timeStr.match(/[0-9]{2}/g)?.join(":") ?? "" : timeStr,
              selectedColor,
            );

            retry();
          }}>
            タスク追加
          </button>
        </section>

        <Title>追加したタスク</Title>
        {inputtedTasks?.map((task) => {
          return (
            <div style={{ display: 'flex', marginBottom: '4px' }}>
              <div key={task.name}>
                <TaskButton
                  selected={false}
                  task={task}
                />
                {' '}
                {task.defaultTime}
              </div>
              <button
                style={{ marginLeft: '12px' }}
                onClick={() => {
                  const result = window.confirm(`タスク"${task.name}"を削除しますか？`)
                  if (!result) return;

                  deleteTask(task.name);
                  retry();
                }}
              >
                削除
              </button>
            </div>
          );
        })}

        <Title>デフォルトのタスク</Title>
        <div>
        {defaultTasks.map((task) => {
          return (
            <div key={task.name} style={{  marginBottom: '4px' }}>
              <TaskButton
                selected={false}
                task={task}
              />
              {' '}
              {task.defaultTime}
            </div>
          );
        })}
        </div>
      </div>
    </main>
  );
}

export default TaskConfigContainer;

const mainContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const container = css`
  width: 400px;

`;
