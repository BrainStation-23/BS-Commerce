import { FC } from 'react';

const StrokePrimaryDarkPrimary: FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return <div className="mr-3 mt-1 stroke-primary dark:stroke-dark_primary">{icon}</div>;
};

export default StrokePrimaryDarkPrimary;
