import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

export default function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const genreList = [
    "action","drama","comedy","biography",
    "romance","thriller","war","history",
    "sport","sci-fi","documentary","crime","fantasy"
  ];

  return (
    <div>

      <SearchBar
        title={title}
        setTitle={setTitle}
      />

      <Input
        label="Min Date:"
        type="number"
        value={minYear}
        setValue={setMinYear}
      />

      <Input
        label="Max Date:"
        type="number"
        value={maxYear}
        setValue={setMaxYear}
      />

      <SelectInput
        label="Sort:"
        options={[
          "latest",
          "oldest",
          "highestrated",
          "lowestrated"
        ]}
        value={sort}
        setValue={setSort}
      />

      <ul>
        {genreList.map((g) => (
          <Tag
            key={g}
            genre={g}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>

    </div>
  );
}
