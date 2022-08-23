import React from "react";

export interface IPagination {
  labelNext?: string;
  labelPrevious?: string;
  pageItems: number;
  currentPage: number;
  totalPage: number;
}

function Pagination({
  labelNext,
  labelPrevious,
  currentPage,
  pageItems,
  totalPage,
}: IPagination) {
  const totalPageIndex = Math.ceil(totalPage / pageItems);
  const indexPageLayout = [];
  for (let i = 1; i <= totalPageIndex; i++) {
    indexPageLayout.push(i);
  }
  return (
    <div className="flex items-center gap-5">
      <div>
        <button>{labelPrevious}</button>
      </div>
      <div className="gap-5">
        {indexPageLayout.map((pageIndex, index) => {
          return <button className={`border py-1 px-3 mx-2 rounded-full ${currentPage === pageIndex && "bg-red-600 text-white"}`} key={index}>{pageIndex}</button>;
        })}
      </div>
      <div>
        <button>{labelNext}</button>
      </div>
    </div>
  );
}

export default Pagination;
