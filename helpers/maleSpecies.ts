interface Character {
  species: string;
  gender: string;
}

export const maleSpecies = (characters: Character[]): string => {
  const speciesMaleCount: Record<string, number> = {};

  characters.forEach((character) => {
    if (character.gender === "Male") {
      const speciesName = character.species;
      speciesMaleCount[speciesName] = (speciesMaleCount[speciesName] || 0) + 1;
    }
  });

  let mostMaleCharacters = 0;
  let mostMaleSpecies: string = "";

  for (const speciesName in speciesMaleCount) {
    if (speciesMaleCount[speciesName] > mostMaleCharacters) {
      mostMaleCharacters = speciesMaleCount[speciesName];
      mostMaleSpecies = speciesName;
    }
  }

  return mostMaleSpecies;
};
