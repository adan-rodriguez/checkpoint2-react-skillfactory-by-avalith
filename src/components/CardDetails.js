import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import getCharacters from "../services/rickandmortyapi";

const CardDetails = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  const set = async () => {
    const results = await getCharacters();
    const resultFilter = results.filter((result) => result.id === Number(id));
    setCharacter(resultFilter);
  };

  useEffect(() => {
    set();
  }, [id]);

  return (
    <>
      {character.map((character, index) => {
        return (
          <main key={index} className="main-carddetails">
            <Card
              name={character.name}
              status={character.status}
              species={character.species}
              type={character.type}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              episode={character.episode}
            />
          </main>
        );
      })}
    </>
  );
};

export default CardDetails;
