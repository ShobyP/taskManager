import PropTypes from "prop-types";
import Button from "./Button";

const onClick = () => {
  console.log("click");
};

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototype = {
  title: PropTypes.string,
};

// Css in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
