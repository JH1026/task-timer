import { useCallback, useState } from "react";
import { useAsync } from "react-use";
import { getAllTask } from "../../utils/storage";
import Title from "../generic/Title";
import { defaultTasks } from "../task/deafultTask";
import TaskButton from "../task/TaskButton";

const notSetTask: Task = {
  color: '#222',
  defaultTime: '00:00:30',
  name: '未選択',
};

type Props = {
  onSelectTask: (task: Task) => void;
}

const SelectTasks = ({
  onSelectTask,
}: Props) => {
  const [selectedTask, selectTask] = useState<Task>();

  const { value: tasks, loading } = useAsync(async () => {
    
    return [...getAllTask(), ...defaultTasks];
  });

  return (
    <>
      <Title>タスク一覧</Title>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        <TaskButton
          selected={!!selectedTask && notSetTask.name === selectedTask.name}
          task={notSetTask}
          onSelectTask={() => {
            selectTask(notSetTask);
            onSelectTask(notSetTask);
          }}
        />
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