import React from "react";
import "../../styles/pagination.css"; // Import the custom CSS file

function Pagination({ page, setPage }) {
  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${page === 1 ? "disabled" : ""}`}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pagination-text">Page {page}</span>
      <button
        className="pagination-button"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
