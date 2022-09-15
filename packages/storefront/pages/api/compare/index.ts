import { NextApiRequest, NextApiResponse } from 'next';
import { compareList } from '../../../mock/compare'

const compareAPI = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        res.status(200).send({data: {data: compareList}});
    }
    if(req.method === 'POST')
        res.status(200).send({data: {data: compareList}});
    else if(req.method === 'DELETE')
        res.status(200).send('Successfully deleted');
};

export default compareAPI;
