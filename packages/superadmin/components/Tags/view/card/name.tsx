import { FC } from 'react';
import SingleView from './singleView';
import Link from 'next/link';
import { Tag } from '@bs-commerce/models'';
interface Props {
  tags: Tag;
}
const TagViewCard: FC<Props> = ({ tags }) => {
  return (
    <>
      <div className="content-header clearfix mt-3">
        <h1 className="float-start">
          View Tag details
          <span className="fs-5 p-3">
            <Link href={'/tags'}>
              <a className="text-decoration-none">
                <i className="bi bi-arrow-left-circle-fill p-2" />
                Back to Tag list
              </a>
            </Link>
          </span>
        </h1>
      </div>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center  ps-2 pt-2">
            <i className="bi bi-meta col-1" style={{ fontSize: '25px' }} />
            <div className="fs-5 col px-3 text-start">Tag Info</div>
          </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView
              label="Tag Name"
              value={tags.name}
              toolkitMessage="toolkitMessage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TagViewCard;
