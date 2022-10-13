import { FC } from 'react';

const FillPrimaryDarkPrimary: FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return <div className="fill-primary dark:fill-dark_primary">{icon}</div>;
};

export default FillPrimaryDarkPrimary;
