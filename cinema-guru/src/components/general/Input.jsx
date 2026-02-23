import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (onChange) => {
    setValue(onChange.target.value);
  };

  return (
    <div className={`${className || ""}`}>
      {label && <label>{label}</label>}

      <div className="input-container">
        {icon && <FontAwesomeIcon icon={icon} />}

        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}
