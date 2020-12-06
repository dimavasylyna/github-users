import React from 'react';
import Loader from "../Loader/Loader";
import s from './UserList.module.css';
import PropTypes from 'prop-types';

const UserList = ({userItemList, isFetching}) => {

    return (
        isFetching
            ? <Loader />
            : <ul className={s.userList}>{userItemList}</ul>
    )
}
UserList.propTypes = {
    userItemList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

export default UserList