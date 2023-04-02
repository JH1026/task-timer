
const storageKey = {
  allTask: 'allTask',
}

export const initStorage = () => {
  localStorage.getItem(storageKey.allTask)
    ?? localStorage.setItem(storageKey.allTask, JSON.stringify([]));
};

export const getAllTask = (): Task[] => {
  const allTaskJSON = localStorage.getItem(storageKey.allTask);

  if (allTaskJSON == null) {
    return [];
  }

  return JSON.parse(allTaskJSON) as Task[];
}

export const addTask = (
  taskName: string,
  timeStr: string,
  timerColor: string
) => {
  const allTasks = getAllTask();

  const setData = JSON.stringify([
    {
      name: taskName,
      defaultTime: timeStr,
      color: timerColor,
    },
    ...allTasks
  ]);
  localStorage.setItem(
    storageKey.allTask,
    setData,
  );
};

export const deleteTask = (taskName: string) => {
  const allTasks = getAllTask();

  localStorage.setItem(
    storageKey.allTask,
    JSON.stringify(
      allTasks.filter((item) => item.name !== taskName)
    )
  );

}