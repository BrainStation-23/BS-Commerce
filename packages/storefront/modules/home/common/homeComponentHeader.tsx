import { FC } from 'react';
interface Props {
  heading1?: string;
  heading2?: string;
}

// Gobal container component, used to wrap all components
const HomeComponentHeader: FC<Props> = ({ heading1, heading2 }) => {
  return (
    <div className="mb-6 text-center">
      <p className="font-serif text-lg italic">{heading1}</p>
      <h1 className="text-bold text-4xl ">{heading2}</h1>
    </div>
  );
};

export default HomeComponentHeader;
