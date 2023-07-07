import React from 'react';
import './App.css';
import {Posts} from "./components/Posts/Posts.js";
import {Launches} from "./components/Launches/Launches";

const App = () => {
    return (
        <div className={'container'}>
            {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
            {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
            {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}

            {/*<h1>Перелік постів</h1>*/}
            {/*<Posts/>*/}

            {/*є API от SpaceX*/}
            {/*https://api.spacexdata.com/v3/launches/*/}
            {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
            {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
            <h1>Перелік запусків</h1>
            <Launches/>

            {/*вивести всіх юзерів з плайсхолдеру*/}
            {/*в кожного юзера має бути кнопка яка буде показувати пости цього юзера*/}

            {/*пости мають виводитись під компонетою Users (в App компоненті)*/}
        </div>
    );
};

export default App;