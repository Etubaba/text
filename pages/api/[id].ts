import { apiData } from "@/data";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  const singleData = apiData.filter((item) => +id === item.id);
  const episodes = apiData.filter((item) => singleData[0].name === item.name);

  const allProps = { ...singleData[0], episodeCount: episodes.length };

  res.status(201).json({ data: allProps });
}
