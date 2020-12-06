import React from 'react';
import {connect} from "react-redux";
import UserList from "../components/UserList/UserList";
import UserItem from "../components/UserItem/UserItem";
import PropTypes from 'prop-types';

const UserListContainer = ({userList, isFetching}) => {
    const userItemList = userList.map(userData=>(
            <UserItem key={userData.id} userData={userData} />
        )
    );
    return <UserList userItemList={userItemList} isFetching={isFetching}/>
}

UserListContainer.propTypes = {
    userList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
const mapStateToProps = store => {
    return {
        userList: store.users.userList,
        isFetching: store.users.isFetching,
    }
};

export default connect(mapStateToProps)(UserListContainer);