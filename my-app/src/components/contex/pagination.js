import React, { useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination(props) {

  const [page, setPage] = useState(1);
  const [PerPage, setPerPage] = useState(3);
  const indexOfLastItem = page * PerPage ;
  const indexOfFirstItem = indexOfLastItem - PerPage;
  const list = props.list.sort((a, b) => {
    if (a.difficulty > b.difficulty) {
      return 1;
    } else {
      return -1;
    }
  });

  let item = list.slice(indexOfFirstItem, indexOfLastItem);
  const pages = pageNumber => setPage(pageNumber);
  const setItems = numberOfPages => setPerPage(numberOfPages);

  const state = {
    page,
    PerPage,
    setPage,
    setPerPage,
    pages,
    item,
    setItems,
  }
  
  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default Pagination;