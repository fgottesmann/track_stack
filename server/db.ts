import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "trackstack");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export async function trackstack(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export async function readSingle(single) {
  const trackName = await getCollection("tracks");
  return await trackName.findOne({ track: single });
}

export function closeDB() {
  client.close();
}
