import { useEffect, useState } from "react";
// import TaskPage from "@/pages/TaskPage";

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
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
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
