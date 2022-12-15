import { FC } from 'react';

const ShippingDetails: FC<{ title: string; body: string }> = ({
  title,
  body,
}) => {
  return (
    <div>
      <h3 className="mb-1 text-base md:mb-2">{title}</h3>
      <p className="text-sm 2xl:text-base">{body}</p>
    </div>
  );
};

export default ShippingDetails;
