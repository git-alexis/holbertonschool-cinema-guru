import "./general.css";

export default function SearchBar({ title, setTitle }) {
  const handleInput = (onChange) => {
    setTitle(onChange.target.value);
  };

  return (
    <input
      type="text"
      className=""
      placeholder="Search Movies"
      value={title}
      onChange={handleInput}
    />
  );
}
