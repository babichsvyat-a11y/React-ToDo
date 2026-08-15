import { memo, useContext } from "react";
import { TaskContext } from "@/enteties/todo";
import RouterLink from "@/shared/ui/RouterLink";

import styles from "./TodoItem.module.scss";
<<<<<<< HEAD
import { highlightCaseInsensitive } from "@/shared/utils/highlight";
=======
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7

const TodoItem = (props) => {
  const { className = "", id, title, isDone } = props;

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    deleteTask,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
<<<<<<< HEAD
    searchQuery,
  } = useContext(TaskContext);

  const highlightedTitle = highlightCaseInsensitive(title, searchQuery);

=======
  } = useContext(TaskContext);

>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
  return (
    <li
      className={`
        ${styles.todoItem}
        ${className}
        ${disappearingTaskId === id ? styles.isDisappearing : ""}
        ${appearingTaskId === id ? styles.isAppearing : ""}
        `}
      ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        checked={isDone}
        onChange={({ target }) => {
          toggleTaskComplete(id, target.checked);
        }}
      />
      <label htmlFor={id} className={`${styles.label} visually-hidden`}>
        {title}
      </label>
<<<<<<< HEAD
      <RouterLink to={`tasks/${id}`} aria-label="Task detail page">
        <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
=======
      <RouterLink to={`/tasks/${id}`} aria-label="Task detail page">
        {title}
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
      </RouterLink>
      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => {
          deleteTask(id);
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default memo(TodoItem);
