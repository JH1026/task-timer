import { css } from "@emotion/react";

type Props = {
  task: Task;
  onSelectTask: (task: Task) => void;
}

const TaskButton = ({
  task,
  onSelectTask
}: Props) => {

  return (
    <button
      onClick={() => {
        onSelectTask(task);
      }} 
      css={ButtonStyle(task.color)}>
      {task.name}
    </button>
  );
}

export default TaskButton;

const ButtonStyle = (color: string) => css`
  border: none;
  background: ${color};

  width: 180px;
  color: white;
  font-size: 20px;
  padding: 4px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`