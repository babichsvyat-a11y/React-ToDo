// const username = "Aleksandr";
// const isLoggedIn = true;
// const tasks = ["Love cats", "Take the cofe", "Play with friends"];

import Router from "@/app/routing";
import TaskPage from "@/pages/TaskPage";
import TasksPage from "@/pages/TasksPage";
import "./styles";

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Page not found</div>,
  };
  return <Router routes={routes} />;
};

export default App;

{
  /* <h1 className="title">To Do List</h1>
      <ul>
        {tasks.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul> */
}

{
  /* {isLoggedIn && <p>Hi, {username}</p>}
      <p>{isLoggedIn ? `Hi, ${username}!` : "Please log in"}</p>
      {isLoggedIn ? <p>Hi, {username}!</p> : <button>log in</button>} */
}
{
  /* 
      <h1 className="title">To Do List</h1>
      <p style={{ color: "red", fontWeight: 700 }}>Hi, {username}</p>
      <p>Hi, {1 + 1}</p>
      <p>Hi, {username.toUpperCase()}</p>
      <p>Hi, {new Date().toLocaleDateString()}</p>
      <hr />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" required={true} /> */
}
