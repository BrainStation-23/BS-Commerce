import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userAPI } from '../../../APIs';
import TagViewCard from './card/name';
const ViewSingleTag: FC = () => {
  const router = useRouter();
  const [tags, setTags] = useState<any>();
  const id = '' + `${router.query.id}`;
  const getSingleTag = async () => {
    const res = await userAPI.getSingleTag(id);
    res?.data ? setTags(res.data) : '';
  };
  useEffect(() => {
    getSingleTag();
  }, []);
  return (
    <>
      <div className="bg-light px-5">
        <main>{tags ? <TagViewCard tags={tags} /> : 'No Tags Found'}</main>
      </div>
    </>
  );
};

export default ViewSingleTag;
