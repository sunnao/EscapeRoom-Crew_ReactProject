// import React, { useState } from 'react';
// import  Pagination from 'react-js-pagination';
// import 'tailwindcss/dist/base.css';
// import 'tailwindcss/dist/components.css';

// function Paging() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalItems = 100;

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Fetch data for the new page here
//   };

//   return (
//     <Pagination
//       totalItemsCount={totalItems}
//       activePage={currentPage}
//       onChange={handlePageChange}
//       itemClass="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-l"
//       linkClass="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r"
//       hideDisabled
//       hideNavigation
//       prevPageText="Prev"
//       nextPageText="Next"
//       firstPageText="First"
//       lastPageText="Last"
//     />
//   );
// }

// export default Paging;

import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleClick = (e, page) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            {currentPage > 1 && (
              <a
                href='#'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                onClick={(e) => handleClick(e, currentPage - 1)}>
                이전 페이지
              </a>
            )}
            {currentPage < totalPages && (
              <a
                href='#'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
                onClick={(e) => handleClick(e, currentPage + 1)}>
                다음 페이지
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Pagination;
