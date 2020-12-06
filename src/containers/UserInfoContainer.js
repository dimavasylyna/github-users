import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import {getUserInfo} from "../redux/actions/userInfoAction";
import UserInfo from "../components/UserInfo/UserInfo";
import PropTypes from 'prop-types';

const UserInfoContainer = ({getUserInfo, user, isFetching}) => {
    const {userName} = useParams();

    useEffect(() => {
        getUserInfo(userName);
    }, [])

    return <UserInfo user={user} isFetching={isFetching}/>
}

UserInfoContainer.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = store => {
    return {
        user: store.userInfo.user,
        isFetching: store.userInfo.isFetching,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (userName) => dispatch(getUserInfo(userName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);