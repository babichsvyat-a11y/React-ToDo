import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

export const TaskContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
<<<<<<< HEAD
=======
    newTaskTitle,
    setNewTaskTitle,
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
<<<<<<< HEAD
=======
      newTaskTitle,
      setNewTaskTitle,
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    }),
    [
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
<<<<<<< HEAD
=======
      newTaskTitle,
      setNewTaskTitle,
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
