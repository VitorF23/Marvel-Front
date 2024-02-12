import "./searchbarcom.css";

const SearchBarComic = ({ search, setSearch }) => {
  return (
    <div>
      <form className="input">
        <input
          type="text"
          value={search}
          placeholder="Rechercher des Comics"
          onChange={(event) => {
            console.log(event);
            setSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBarComic;
