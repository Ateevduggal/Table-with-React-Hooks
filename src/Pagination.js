import React from "react";

const Pagination = ({ number, setNumber, tableData, postPerPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(tableData.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };

  const Prev = () => {
    if (number !== 1) {
      //to restrict going lower than page 1
      setNumber(number - 1);
    } else {
      setNumber(number);
    }
  };

  const Next = () => {
    if (number < 3) {
      //to restrict going above page 3 as it the last page of the app
      setNumber(number + 1);
    } else {
      alert("No further pages");
    }
  };

  return (
    <>
      <div className="my-3 text-center">
        <button
          className="px-3 py-1 mx-3 text-center btn-success"
          onClick={Prev}
        >
          Previous
        </button>

        {pageNumber.map((Elem) => {
          return (
            <>
              <button
                key={Elem.id}
                className="px-3 py-1 mx-3 text-center btn-outline-success"
                onClick={() => ChangePage(Elem)}
              >
                {Elem}
              </button>
            </>
          );
        })}
        <button
          className="px-3 py-1 mx-3 text-center btn-success"
          onClick={Next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
