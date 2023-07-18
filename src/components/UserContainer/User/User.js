import React from 'react';
import styles from '../../../styles/Element.module.css'


const User = ({user}) => {
    const {id, name, username, email, address:{city}} = user;
    return (
        <div className={styles.elementWrap}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {User};