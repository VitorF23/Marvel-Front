import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./personnages.css";
import ComicCharacterId from "../ComicCharacterID/ComicCharacterId";

const Personnages = () => {
  const [personnages, setPersonnages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-back--ptd8p9px9d2y.code.run/characters/${characterId}`
      );
      console.log(response.data);
      setPersonnages(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <main className="container">
      <div className="personnage-div">
        <img
          src={
            personnages.thumbnail.path + "." + personnages.thumbnail.extension
          }
          alt={personnages.title}
        />

        <div className="personnage-text">
          <h1>{personnages.name}</h1>
          <h2>{personnages.description}</h2>
          <div className="personnage-text-span">
            <span>🔽Comics🔽</span>
          </div>
          <ComicCharacterId />
        </div>
      </div>
    </main>
  );
};

export default Personnages;
