import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LogDetail from '../../components/system/log/logDetail';

const LogDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-light">
      <main className="px-4">
        <LogDetail id={id} />
      </main>
    </div>
  );
};

export default LogDetailPage;
