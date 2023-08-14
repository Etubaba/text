import { apiData } from "@/data";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(201).json({ data: apiData });
}
