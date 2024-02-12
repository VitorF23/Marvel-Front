import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Allpersonnages.css";
import SearchBarPers from "../../components/SearchBarPers/SeachBarPers";
import hulk from "../../img/hulk.jpg";
import Pagination from "../../components/PaginationAllPerssonages/Pagination";

const AllPersonnages = () => {
  const [personnages, setPersonnages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--ptd8p9px9d2y.code.run/characters?name=${search}&page=${page}`
        );
        console.log("AllPersonnages=>", response.data);

        setPersonnages(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, page]);

  return isLoading ? (
    <p>📀Loading📀</p>
  ) : (
    <main className="container">
      <SearchBarPers search={search} setSearch={setSearch} />
      <div className="personnages-div">
        {personnages.results.map((list) => (
          <div className="personnages-div-div" key={list._id}>
            <h1>{list.name}</h1>
            {list.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
              <img src={hulk} />
            ) : (
              <img
                src={list.thumbnail.path + "." + list.thumbnail.extension}
                alt={list.title}
                onClick={() => {
                  navigate("/personnages/" + list._id);
                }}
              />
            )}
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} personnages={personnages} />
    </main>
  );
};

export default AllPersonnages;
