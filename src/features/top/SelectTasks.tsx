import { useCallback, useState } from "react";
import { useAsync } from "react-use";
import Title from "../generic/Title";
import { defaultTasks } from "../task/deafultTask";
import TaskButton from "../task/TaskButton";

type Props = {
  onSelectTask: (task: Task) => void;
}

const SelectTasks = ({
  onSelectTask,
}: Props) => {
  const [selectedTask, selectTask] = useState<Task>();

  const { value: tasks, loading } = useAsync(async () => {
    
    return defaultTasks;
  });

  return (
    <>
      <Title link="/tasks">Tasks</Title>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        {tasks?.map((task) => {
          return (
            <TaskButton
              selected={!!selectedTask && task.name === selectedTask.name}
              key={task.name}
              task={task}
              onSelectTask={() => {
                selectTask(task);
                onSelectTask(task);
              }}
            />
          )
        })}
      </div>
    </>
  );
};

export default SelectTasks;