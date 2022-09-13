import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../services/rickandmortyapi";
import ImageCard from "./ImageCard";
import NameCard from "./NameCard";

const CardsContainer = () => {
  const [characters, setCharacters] = useState([]);

  const set = async () => {
    const results = await getCharacters();
    setCharacters(results);
  };

  useEffect(() => {
    set();
  }, []);

  return (
    <main className="fetch-rickandmortyAPI">
      {characters.map((character, index) => {
        return (
          <Link key={index} to={`/rickandmorty/${character.id}`}>
            <ImageCard image={character.image} />
            <NameCard name={character.name} />
          </Link>
        );
      })}
    </main>
  );
};

export default CardsContainer;
