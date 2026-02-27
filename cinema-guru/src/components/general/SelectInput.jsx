import "./general.css";

export default function SelectInput({
  label,
  options,
  className,
  value,
  setValue,
}) {
  const handleSelect = (onChange) => {
    setValue(onChange.target.value);
  };

  return (
    <div id="sort-block" className={`${className || ""}`}>
      {label && <label>{label}</label>}

      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}
