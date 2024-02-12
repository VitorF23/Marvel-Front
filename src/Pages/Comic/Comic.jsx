import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./comic.css";
import marvel from "../../img/marvel.jpg";

const Comic = () => {
  const [comic, setComic] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { comicId } = useParams();
  console.log(comicId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--ptd8p9px9d2y.code.run/comic/${comicId}`
        );
        console.log("comic =>", response.data);
        setComic(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [comicId]);

  return isLoading ? (
    <p>📀Loading📀</p>
  ) : (
    <main className="container">
      <div className="comic-div">
        <div className="comic-div-div">
          {comic.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
            <img src={marvel} />
          ) : (
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt={comic.title}
            />
          )}
          <div className="comic-text">
            <h1>{comic.title}</h1>
            <h2>{comic.description}</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Comic;
