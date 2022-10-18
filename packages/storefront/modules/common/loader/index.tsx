import { BeatLoader } from 'react-spinners';
const Loading: React.FC = () => {
  return (
    <div className="my-20 flex flex-wrap content-center justify-center">
      <BeatLoader color="#16A34A" margin={32} size={32} />
    </div>
  );
};

export default Loading;
