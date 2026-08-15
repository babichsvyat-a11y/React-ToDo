import { useEffect, useState } from "react";
<<<<<<< HEAD
import { BASE_URL } from "@/shared/constants";
// import TaskPage from "@/pages/TaskPage";

const getCurrentPath = () => {
  const pathname = window.location.pathname;

  return pathname.startsWith(BASE_URL)
    ? pathname.slice(BASE_URL.length - 1) || "/"
    : pathname;
};

=======
// import TaskPage from "@/pages/TaskPage";

>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
const matchPath = (path, route) => {
  const pathParts = path.split("/");
  const routePaths = route.split("/");

  if (pathParts.length !== routePaths.length) {
    return null;
  }

  const params = {};
  for (let i = 0; i < routePaths.length; i++) {
    if (routePaths[i].startsWith(":")) {
      const paramName = routePaths[i].slice(1);

      params[paramName] = pathParts[i];
    } else if (routePaths[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
};

export const useRoute = () => {
<<<<<<< HEAD
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setPath(getCurrentPath());
=======
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return path;
};
const Router = (props) => {
  const { routes } = props;
  const path = useRoute();

  for (const route in routes) {
    const params = matchPath(path, route);

    if (params) {
      const Page = routes[route];
      return <Page params={params} />;
    }
  }
  const NotFound = routes["*"];

  return <NotFound />;
  //   if (path.startsWith("/tasks/")) {
  //     const id = path.replace("/tasks/", "");
  //     const TaskPage = routes["/tasks/:id"];

  //     return <TaskPage params={{ id }} />;
  //   }

  //   return <Page />;
};

export default Router;
