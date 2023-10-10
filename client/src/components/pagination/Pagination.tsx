import React, { FC } from 'react';
import s from "./Pagination.module.css"

interface PaginationProps {
    gatData: (number: number) => void,
    currentPage: number,
    lastPage: number,
}

const Pagination: FC<PaginationProps> = ({ gatData, currentPage, lastPage }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  if (lastPage <= 10) {
    return (
      <div>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={number === currentPage ? s.activePage : s.pageNumber}
            onClick={() => gatData(number)}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }

  const visiblePageNumbers = [];
  if (currentPage <= 3) {
    visiblePageNumbers.push(...pageNumbers.slice(0, 3));
    visiblePageNumbers.push('...');
    visiblePageNumbers.push(...pageNumbers.slice(-3));
  } else if (currentPage >= lastPage - 2) {
    visiblePageNumbers.push(...pageNumbers.slice(0, 3));
    visiblePageNumbers.push('...');
    visiblePageNumbers.push(...pageNumbers.slice(-3));
  } else {
    visiblePageNumbers.push(...pageNumbers.slice(0, 3));
    visiblePageNumbers.push('...');
    visiblePageNumbers.push(...pageNumbers.slice(currentPage - 1, currentPage + 2));
    visiblePageNumbers.push('...');
    visiblePageNumbers.push(...pageNumbers.slice(-3));
  }

  return (
    <div>
      {visiblePageNumbers.map((number) => {
        if (number === '...') {
          return <span key={number}>{number}</span>;
        } else {
          return (
            <button
              key={number}
              className={number === currentPage ? s.activePage : s.pageNumber}
              onClick={() => gatData(Number(number))}
            >
              {number}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
