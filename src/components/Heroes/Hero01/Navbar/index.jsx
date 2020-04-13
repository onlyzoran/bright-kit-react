import React from 'react';
import MenuList from './MenuList';
import IconList from './IconList';
import classNames from 'classnames/bind';
import style from './style.module.css';
import navbarIcon from '../../../../assets/image/navbar_icon.svg';

let cx = classNames.bind(style);

const Navbar = (props) => {
    let className = cx({
        navbar: true,
        fixedTop: props.fixed === 'top',
        fixedBottom: props.fixed === 'bottom'
    });

    return (
        <div className={className}>
            <img src={navbarIcon} alt=""/>
            <div className={style.flexCenter}>
                <MenuList />
                <IconList />
            </div>
        </div>
    );
}

export default Navbar;