// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import continents from '../../../../db/continents.json';
import { Continent } from '../../../dtos/Continent';

type Props = {
  id: string;
  name: string;
  banner: string;
  description: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Props[]>
) { 

  res.status(200).json(continents);
}
