import { NextApiRequest, NextApiResponse } from 'next';

const customerRegisterSendOtpAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phone } = req.body;

  if(email) {
    res.status(200).send({ data: { message: "1234" }})
  } else if(phone) {
    res.status(200).send({ data: { message: "1234" }})
  }
};

export default customerRegisterSendOtpAPI;