import { useAsync } from "react-use";
import Title from "../generic/Title";
import { defaultTasks } from "../task/deafultTask";
import TaskButton from "../task/TaskButton";


const SelectTasks = () => {

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
            <TaskButton key={task.name} task={task} />
          )
        })}
      </div>
    </>
  );
};

export default SelectTasks;