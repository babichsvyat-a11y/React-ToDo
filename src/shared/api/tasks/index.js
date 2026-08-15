<<<<<<< HEAD
import localAPI from "./local";
import serverAPI from "./server";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const tasksAPI = isLocal ? localAPI : serverAPI;
=======
const URL = "http://localhost:3001/tasks";

const headers = {
  "Content-Type": "aplication/json",
};

const tasksAPI = {
  getAll: () => {
    return fetch(URL).then((response) => response.json());
  },

  getById: (id) => {
    return fetch(`${URL}/${id}`).then((response) => response.json());
  },

  add: (task) => {
    return fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(task),
    }).then((response) => response.json());
  },

  delete: (id) => {
    return fetch(`${URL}/${id}`, { method: "DELETE" });
  },

  deleteAll: (tasks) => {
    return Promise.all(tasks.map(({ id }) => tasksAPI.delete(id)));
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isDone }),
    });
  },
};
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7

export default tasksAPI;
