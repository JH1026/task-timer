import { css } from "@emotion/react";

type Props = {
  task: Task;
  selected: boolean;
  onSelectTask: (task: Task) => void;
}

const TaskButton = ({
  task,
  selected,
  onSelectTask,
}: Props) => {

  return (
    <button
      onClick={() => {
        onSelectTask(task);
      }} 
      css={ButtonStyle(selected, task.color)}>
      {task.name}
    </button>
  );
}

export default TaskButton;

const ButtonStyle = (selected:boolean, color: string) => css`
  background: ${color};

  width: 180px;
  color: #eee;
  font-size: 20px;
  padding: 4px;

  cursor: pointer;

  box-sizing: border-box;
  border: ${selected ? '2px solid #fff' : 'none'}; 
  :hover {
    opacity: 0.9;
  }
`