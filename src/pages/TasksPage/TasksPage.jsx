import Todo from "@/widgets/Todo";
import { TasksProvider } from "@/enteties/todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default TasksPage;
