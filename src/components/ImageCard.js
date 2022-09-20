const ImageCard = ({ image, name }) => {
  return <img src={image} alt={name} loading="lazy" />;
};

export default ImageCard;
