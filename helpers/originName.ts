interface Character {
  origin: {
    name: string;
  };
}

export function getUniqueOriginNames(characters: Character[]): string[] {
  const originNamesSet = new Set<string>();

  characters.forEach((character) => {
    const originName = character.origin.name;
    if (originName !== "unknown") {
      originNamesSet.add(originName);
    }
  });

  const uniqueOriginNames = Array.from(originNamesSet);

  return uniqueOriginNames;
}
