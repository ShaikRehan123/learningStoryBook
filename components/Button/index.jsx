// import "./style.css";
import PropTypes from "prop-types";
function Button({ label, onClick, backgroundColor, secondary }) {
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        ...(!secondary && {
          backgroundColor,
          border: "none",
          borderRadius: "4px",
          color: "white",
          fontSize: "16px",
          padding: "12px 24px",
          textDecoration: "none",
          transition: "background-color 0.2s",
          outline: "none",
        }),
        ...(secondary && {
          borderRadius: "4px",
          color: "white",
          fontSize: "16px",
          padding: "12px 24px",
          textDecoration: "none",
          transition: "background-color 0.2s",
          outline: "none",
          backgroundColor: "white",
          color: "black",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: backgroundColor,
        }),
      }}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  secondary: PropTypes.bool,
};
