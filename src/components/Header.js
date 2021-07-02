import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClick, showAdd }) => {
  const addOrCloseButton = () => {
    const color = !showAdd ? "green" : "red";
    const text = !showAdd ? "Add" : "Close";
    return <Button color={color} text={text} onClick={onClick} />;
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      {addOrCloseButton()}
    </header>
  );
};

Header.defaultProps = {
  title: "Default Task Header",
};

Header.prototype = {
  title: PropTypes.string,
};

export default Header;
