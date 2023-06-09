import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PagePagination = ({ data, take, setSkip }) => {
  let items = [];
  const onMoreData = (e) => {
    setSkip((Number(e.target.text) - 1) * take);
  };
  const numberOfPages = Math.ceil(data?.length / take);

  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item onClick={onMoreData} key={number}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {data?.length > take ? (
        <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PagePagination;
