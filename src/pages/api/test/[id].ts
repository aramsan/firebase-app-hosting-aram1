//import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
//import { redirect } from "next/navigation";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log("api", id);
  res.redirect(`/id/${id}`);
}