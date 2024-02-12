import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./comicCharacterId.css";

const ComicCharacterId = () => {
  const [comicsCharacter, setComicsCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(comicsCharacter);

  const navigate = useNavigate();
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--ptd8p9px9d2y.code.run/comics/${characterId}`
        );
        console.log("data", response.data);
        setComicsCharacter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <main className="main-comicsCharacter">
      <div className="comicsCharacter">
        {comicsCharacter.comics.map((comics) => {
          console.log(comics);
          return (
            <div
              className="comicsCharacter-div"
              onClick={() => {
                navigate("/comic/" + comics._id);
              }}
            >
              <button>{comics.title}</button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ComicCharacterId;
