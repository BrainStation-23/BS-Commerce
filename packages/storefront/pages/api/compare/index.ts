import { NextApiRequest, NextApiResponse } from 'next';

const compareAPI = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST')
        res.status(200).send("Successfully added");
    else if(req.method === 'DELETE')
        res.status(200).send('Successfully deleted');
};

export default compareAPI;
