import './App.css';
import React from 'react';
import {CarContainer} from "./components/CarContainer/CarContainer";
import {UserContainer} from "./components/UserContainer/UserContainer";




const App = () => {
    return (
        <div className={'container'}>
            {/*1. Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users*/}
            <UserContainer/>

            {/*2. Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments*/}

            {/*3. Реалізувати створення, видалення та оновлення машин http://owu.linkpc.net/carsAPI/v1/doc*/}
            {/*<CarContainer/>*/}
        </div>
    );
};

export {App};