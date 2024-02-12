import "./seachbarpers.css";

const SearchBarPers = ({ search, setSearch }) => {
  return (
    <div>
      <form className="input">
        <input
          type="text"
          value={search}
          placeholder="Rechercher des Personnages"
          onChange={(event) => {
            console.log(event);
            setSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBarPers;
