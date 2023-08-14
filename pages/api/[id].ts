import { apiData } from "@/data";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  const singleData = apiData.filter((item) => +id === item.id);
  res.status(201).json({ data: singleData });
}
