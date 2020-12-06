import React from 'react';
import {NavLink} from "react-router-dom";
import s from './UserItem.module.css';
import PropTypes from 'prop-types';

const UserItem = ({userData}) => {
    return (
        <li className={s.userItem}>
            <NavLink to={`/${userData.login}/`} className={s.link}>
                <img className={s.img} src={userData.avatar_url} width="100" height="100" alt=""/>
                <p>{userData.login}</p>
            </NavLink>
            <a href={userData.html_url} className={s.profileLink} target="_blank">{userData.html_url}</a>
        </li>
    )
}

UserItem.propTypes = {
    userData: PropTypes.object.isRequired,
}

export default UserItem;