import type { NextPage } from 'next';
import LogPage from '../../components/system/log';

const Log: NextPage = () => {
  return (
    <div className="bg-light">
      <main className="px-4">
        <LogPage />
      </main>
    </div>
  );
};

export default Log;
