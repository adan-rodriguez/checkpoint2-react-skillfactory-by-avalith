import EpisodesCard from "./EpisodesCard";
import GenderCard from "./GenderCard";
import ImageCard from "./ImageCard";
import NameCard from "./NameCard";
import OriginLocationCard from "./OriginLocationCard";
import SpeciesCard from "./SpeciesCard";
import StatusCard from "./StatusCard";
import TypeCard from "./TypeCard";

const Card = ({
  image,
  name,
  status,
  species,
  type,
  gender,
  origin,
  episode,
}) => {
  return (
    <div className="card">
      <ImageCard image={image} name={name} />
      <div>
        <NameCard name={name} />
        <StatusCard status={status} />
        <SpeciesCard species={species} />
        <TypeCard type={type} />
        <GenderCard gender={gender} />
        <OriginLocationCard origin={origin.name} />
        <EpisodesCard episode={episode.length} />
      </div>
    </div>
  );
};

export default Card;
