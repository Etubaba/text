type ItemType = {
  name: string;
  image: string;
  status: string;
  id: number;
};

type location = {
  name: string;
};

type characterType = {
  name: string;
  image: string;
  status: string;
  id: number;
  species: string;
  created: string;
  gender: string;
  location: location;
  episodeCount: number;
};
