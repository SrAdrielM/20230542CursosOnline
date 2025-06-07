import './styles.css';

const Button = ({ type = "button", onClick, text, variant = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;
