import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Allcomic.css";

import marvel from "../../img/marvel.jpg";
import SearchBarComic from "../../components/SearchBarCom/SearchBarCom";
import PaginationAllComics from "../../components/PaginationAllComics/PaginationAllComics";

const AllComic = () => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--ptd8p9px9d2y.code.run/comics?title=${search}&page=${page}`
        );
        console.log("data=>", response.data);
        setComics(response.data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.log("🚨catch = comics🚨", error.response);
      }
    };
    fetchData();
  }, [search, page]);

  return isLoading ? (
    <p>📀Loading📀</p>
  ) : (
    <main className="container">
      <SearchBarComic search={search} setSearch={setSearch} />
      <div className="comics">
        {comics.map((comic, index) => {
          return (
            <div className="comics-div-div" key={index}>
              <h1>{comic.title}</h1>
              {comic.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <img src={marvel} />
              ) : (
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                  onClick={() => {
                    navigate("/comic/" + comic._id);
                  }}
                />
              )}
              <div className="comics-description">
                {comic.description ? (
                  <p>{comic.description.substr(0, 110)}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <PaginationAllComics page={page} setPage={setPage} comics={comics} />
    </main>
  );
};

export default AllComic;
