import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage} from "../redux/actions/changePage";
import {getUsers} from "../redux/actions/userListAction";
import Pagination from "../components/Pagination/Pagination";
import PropTypes from 'prop-types';

const PaginationContainer = ({perPage, pageCount, changePage, currentPage, getUsers}) => {
    const handlePageClick = (data) => {
        changePage(data.selected + 1);
    }
    useEffect(()=>{
        let since = currentPage * perPage - perPage;
        getUsers(perPage, since);
    }, [currentPage]);

    return <Pagination handlePageClick={handlePageClick} pageCount={pageCount} currentPage={currentPage}/>
}

PaginationContainer.propTypes = {
    perPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = store => {
    return {
        perPage: store.pagination.perPage,
        pageCount: store.pagination.pageCount,
        currentPage: store.pagination.currentPage,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changePage: nextPage => dispatch(changePage(nextPage)),
        getUsers: (perPage, since) => dispatch(getUsers(perPage, since)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);