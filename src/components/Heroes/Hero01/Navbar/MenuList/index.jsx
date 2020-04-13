import React from 'react';
import style from './style.module.css';

const MenuList = (props) => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <a href="#" className={style.link}>Menu item</a>
            </li>
            <li className={style.item}>
                <a href="#" className={style.link}>Menu item</a>
            </li>
            <li className={style.item}>
                <a href="#" className={style.link}>Menu item</a>
            </li>
            <li className={style.item}>
                <a href="#" className={style.link}>Menu item</a>
            </li>
        </ul>
    );
}

export default MenuList;