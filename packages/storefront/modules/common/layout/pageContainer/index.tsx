import { FC } from 'react';
interface Props {
  children: React.ReactNode;
  className?: string;
}

// Gobal container component, used to wrap all components
const PageContainer: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`${className} container mx-auto px-4`}>{children}</div>
  );
};

export default PageContainer;
