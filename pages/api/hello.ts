// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, trackstack } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const list = await trackstack("tracks");
    res.status(200).json(list);
  }
);
