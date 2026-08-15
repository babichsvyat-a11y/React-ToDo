<<<<<<< HEAD
import { BASE_URL } from "@/shared/constants";

=======
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
const RouterLink = (props) => {
  const { to, children, ...rest } = props;

  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
<<<<<<< HEAD
    <a href={`${BASE_URL}${to}`} onClick={handleClick} {...rest}>
=======
    <a href={to} onClick={handleClick} {...rest}>
>>>>>>> 3a835a8bf828e8cfe037ee331c4981704d7a61c7
      {children}
    </a>
  );
};

export default RouterLink;
