export const getTopXters = (arr: { name: string }[]): string[] => {
  const nameFrequency: Record<string, number> = {};
  arr.forEach((obj) => {
    const name = obj.name;
    nameFrequency[name] = (nameFrequency[name] || 0) + 1;
  });

  const nameFrequencyArray = Object.entries(nameFrequency);
  nameFrequencyArray.sort((a, b) => b[1] - a[1]);
  const mostCommonNames = nameFrequencyArray.slice(0, 3).map((pair) => pair[0]);

  return mostCommonNames;
};
