import { apiData } from "@/data";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(201).json({ data: apiData });
}

[
  {
    species: "Animal",

    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
  },
  {
    species: "Human",

    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
  },
  {
    species: "Human",

    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
  },
  {
    species: "Animal",

    location: {
      name: "Abuja",
      url: "https://rickandmortyapi.com/api/location/3",
    },
  },
];
