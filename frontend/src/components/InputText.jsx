import "./styles.css"; // Adjust the path as necessary

const InputText = ({name,
    label,
    placeholder,
    type = "text",
    register,
    error
  }) => {
    return (
  <div className="form-field">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <div className="form-input-wrapper">
      <input
        id={name}
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder}
        type={type}
        className="form-input"
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  </div>
);             
};
   
export default InputText;