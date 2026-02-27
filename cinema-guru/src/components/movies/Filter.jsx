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
    "Action","Drama","Comedy","Biography",
    "Romance","Thriller","War","History",
    "Sport","Sci-Fi","Documentary","Crime","Fantasy"
  ];

  return (
    <div id="home-filter">

      <div>
        <SearchBar
          title={title}
          setTitle={setTitle}
        />

        <div>
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
              "default",
              "latest",
              "oldest",
              "highestrated",
              "lowestrated"
            ]}
            value={sort}
            setValue={setSort}
          />
        </div>
      </div>

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
