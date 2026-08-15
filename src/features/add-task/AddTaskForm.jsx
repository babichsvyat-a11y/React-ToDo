import Field from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";
import { useContext, useState } from "react";
import { TaskContext } from "@/enteties/todo";

const AddTaskForm = (props) => {
  const { styles } = props;
<<<<<<< HEAD

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { addTask, newTaskInputRef } = useContext(TaskContext);
=======
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TaskContext);
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7

  const [error, setError] = useState("");

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isNewTaskTitleEmpty) {
<<<<<<< HEAD
      addTask(clearNewTaskTitle, () => setNewTaskTitle(""));
=======
      addTask(clearNewTaskTitle);
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
    }
  };

  const onInput = (event) => {
    const { value } = event.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;
    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "The task cannot be empty" : "");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className="{styles.field}"
        label="New task"
        id="new-task"
        error={error}
        value={newTaskTitle}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
