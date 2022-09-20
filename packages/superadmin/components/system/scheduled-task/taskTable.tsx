import { useEffect, useMemo, useState } from 'react';
import scheduledTaskData from '../../../data/scheduledTask.json';
import Pagination from '../../global/pagination';
import Table from './table';

const TaskTable = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return scheduledTaskData['scheduledTask']?.slice(
      firstPageIndex,
      lastPageIndex
    );
  }, [currentPage, PageSize, scheduledTaskData['scheduledTask']]);

  const paginatedData = paginateData(scheduledTaskData['scheduledTask']);

  useEffect(() => {
    paginateData(scheduledTaskData['scheduledTask']);
  }, [pageCount]);

  return (
    <>
      <Table items={currentTableData} />
      <div className="">
        {scheduledTaskData['scheduledTask']?.length > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalCount={scheduledTaskData['scheduledTask'].length}
            pageSize={PageSize}
            setCurrentPage={setCurrentPage}
            setPageSize={setPageSize}
          />
        ) : null}
      </div>
    </>
  );
};
export default TaskTable;
