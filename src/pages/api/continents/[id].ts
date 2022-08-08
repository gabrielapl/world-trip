// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import continents from '../../../../db/continents.json';
import citys from '../../../../db/citys.json';
import { Continent } from '../../../dtos/Continent';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Continent>
) { 

  const { id } = req.query;

  const continent = continents.filter(continent => continent.id === id);
  const citysFormatted = citys.filter(city => city.continentID == id);

  const data = {
    ...continent[0],
    citys: citysFormatted
  }

  res.status(200).json(data);
}
