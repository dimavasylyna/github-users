import React from 'react';
import {Link} from 'react-router-dom';
import Loader from "../Loader/Loader";
import s from './UserInfo.module.css';
import PropTypes from 'prop-types';

const UserInfo = ({user, isFetching}) => {
    const toShow = isFetching
        ? <Loader />
        : (
            <div className={s.userCard}>
                <div className={s.imgContainer}>
                    <img src={user.avatar_url} alt=""/>
                </div>
                <div className={s.info}>
                    <div className={s.infoRow}>
                        <div className={s.title}>Name:</div>
                        <div className={s.desc}>{user.name}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Followers:</div>
                        <div className={s.desc}>{user.followers}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Following:</div>
                        <div className={s.desc}>{user.following}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Created at:</div>
                        <div className={s.desc}>{user.created_at}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Company:</div>
                        <div className={s.desc}>{user.company}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Email:</div>
                        <div className={s.desc}>
                            {user.email && <a href={`mailto:${user.email}`}>{user.email}</a>}
                        </div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Loaction:</div>
                        <div className={s.desc}>{user.location}</div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Blog:</div>
                        <div className={s.desc}>
                            <a href={user.blog}>{user.blog}</a>
                        </div>
                    </div>
                    <div className={s.infoRow}>
                        <div className={s.title}>Bio:</div>
                        <div className={s.desc}>{user.bio}</div>
                    </div>
                </div>
            </div>
        )
    return (
        <div className={s.userInfo}>
            <Link to='/' className={s.back}>Back</Link>
            {toShow}
        </div>
    )
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

export default UserInfo;