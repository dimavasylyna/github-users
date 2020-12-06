import React from 'react';
import ReactPaginate from "react-paginate";
import './Pagination.css';
import PropTypes from 'prop-types';

const Pagination = ({handlePageClick, pageCount, currentPage}) => {
    return <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                initialPage={currentPage - 1}
            />
}

Pagination.propTypes = {
    handlePageClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
}
export default Pagination;