import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import tasksAPI from "@/shared/api/tasks";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL": {
      return Array.isArray(action.tasks) ? action.tasks : state;
    }
    case "ADD": {
      return [...state, action.task];
    }
    case "TOGGLE_COMPLETE": {
      const { id, isDone } = action;

      return state.map((task) => {
        return task.id === id ? { ...task, isDone } : task;
      });
    }
    case "DELETE": {
      return state.filter((task) => task.id !== action.id);
    }
    case "DELETE_ALL": {
      return [];
    }
    default: {
      return state;
    }
  }
};

const useTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

<<<<<<< HEAD
=======
  const [newTaskTitle, setNewTaskTitle] = useState("");
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
  const [searchQuery, setSearchQuery] = useState("");
  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setAppearingTaskId] = useState(null);

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure, you want to delete all?");
    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => dispatch({ type: "DELETE_ALL" }));
    }
  }, [tasks]);

  const deleteTask = useCallback((taskId) => {
    tasksAPI.delete(taskId).then(() => {
      setDisappearingTaskId(taskId);
      setTimeout(() => {
        dispatch({ type: "DELETE", id: taskId });
        setDisappearingTaskId(null);
      }, 400);
    });
  }, []);

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    tasksAPI.toggleComplete(taskId, isDone).then(() => {
      dispatch({ type: "TOGGLE_COMPLETE", id: taskId, isDone });
    });
  }, []);

<<<<<<< HEAD
  const addTask = useCallback((title, callbackAfterAdding) => {
=======
  const addTask = useCallback((title) => {
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
    // const newTaskTitle = newTaskInputRef.current.value;

    const newTask = {
      title,
      isDone: false,
    };
    tasksAPI.add(newTask).then((addedTask) => {
      dispatch({ type: "ADD", task: addedTask });
<<<<<<< HEAD
      callbackAfterAdding();
=======
      setNewTaskTitle("");
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
      // newTaskInputRef.current.value = "";
      setSearchQuery("");
      newTaskInputRef.current.focus();

      setAppearingTaskId(addedTask.id);
      setTimeout(() => {
        setAppearingTaskId(null);
      }, 400);
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();

    tasksAPI
      .getAll()
      .then((serverTasks) => dispatch({ type: "SET_ALL", tasks: serverTasks }));
  }, []);

  // const renderCount = useRef(0);
  // useEffect(() => {
  //   renderCount.current++;
  //   console.log(
  //     `Compoment Todo has been rendering ${renderCount.current} times`,
  //   );
  // });

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
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
  };
};

export default useTasks;
