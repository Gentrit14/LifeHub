// src/components/CustomButton.js
import "./CustomButton.scss";

const CustomButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
