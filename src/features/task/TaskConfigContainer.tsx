import { css } from "@emotion/react";
import Title from "../generic/Title";
import { defaultTasks } from "./deafultTask";
import TaskButton from "./TaskButton";

const TaskConfigContainer = () => {

  return (
    <main css={centering}>
      <section>
        タスク追加
        <input type="text" />
        <input type="text" />
      </section>

      <Title>
        デフォルトのタスク
      </Title>
      <div>
      {defaultTasks.map((task) => {
        return (
          <div>
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
    </main>
  );
}

export default TaskConfigContainer;

const centering = css`
  display: flex;
  justify-content: center;
`