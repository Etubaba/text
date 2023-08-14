interface Location {
  name: string;
  url: string;
}

interface Character {
  species: string;
  location: Location;
}

export function findLocationWithMostHumanCharacters(
  characters: Character[]
): string {
  const locationCharacters: Record<string, number> = {};

  characters.forEach((character) => {
    if (character.species === "Human") {
      const locationName = character.location.name;
      locationCharacters[locationName] =
        (locationCharacters[locationName] || 0) + 1;
    }
  });

  let mostHumanCharacters = 0;
  let mostHumanLocation: string = "";

  for (const locationName in locationCharacters) {
    if (locationCharacters[locationName] > mostHumanCharacters) {
      mostHumanCharacters = locationCharacters[locationName];
      mostHumanLocation = locationName;
    }
  }

  return mostHumanLocation;
}
