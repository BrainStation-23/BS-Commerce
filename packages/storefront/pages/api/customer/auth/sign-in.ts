import { NextApiRequest, NextApiResponse } from 'next';

const cutomerLoginAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const token = 'abc';
  const { email, phone, password } = req.body;

  if(email) {
    if(email === 'user@email.com' && password === '123456') {
        res.status(200).json({ data: {token} });
    } else {
        res.status(401).send("Invalid Credentials");
    }
  } else if(phone) {
    if(phone === '01711111111' && password === '123456') {
        res.status(200).json({ data: {token} });
    } else {
        res.status(401).send("Invalid Credentials");
    }
  }
};

export default cutomerLoginAPI;