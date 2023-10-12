import React from 'react';
import s from './Pagination.module.css';

interface PaginationProps {
  gatData: (number: number) => void;
  currentPage: number;
  lastPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ gatData, currentPage, lastPage }) => {
  const pagesToShow = 5; // Количество отображаемых страниц
  const pages = [];

  const getPageNumbers = (start: number, end: number) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };

  if (lastPage <= pagesToShow) {
    pages.push(...getPageNumbers(1, lastPage));
  } else if (currentPage <= Math.ceil(pagesToShow / 2)) {
    pages.push(...getPageNumbers(1, pagesToShow - 2), '...');
    pages.push(lastPage);
  } else if (currentPage >= lastPage - Math.floor(pagesToShow / 2)) {
    pages.push(1, '...');
    pages.push(...getPageNumbers(lastPage - pagesToShow + 3, lastPage));
  } else {
    pages.push(1, '...');
    pages.push(...getPageNumbers(currentPage - 1, currentPage + 1));
    pages.push('...');
    pages.push(lastPage);
  }

  return (
    <div className={s.pagination}>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => {
            if (typeof page === 'number') {
              gatData(page);
            }
          }}
          className={page === currentPage ? s.activePage : s.pageNumber}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
