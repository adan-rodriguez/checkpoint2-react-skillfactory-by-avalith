const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    const results = data.results;

    return results;
  } catch (error) {
    console.error(`Could not get datos: ${error}`);
  }
};

export default getCharacters;
