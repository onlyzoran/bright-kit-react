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

    let leftColumnClassName = cx({
        halfWidth: props.brandPosition === 'center',
        flexCenter: true
    });

    let centerColumnClassName = cx({

    });

    let rightColumnClassName = cx({
        halfWidth: props.brandPosition === 'center',
        flexCenter: true
    });

    return (
        <div className={className}>
            <div className={leftColumnClassName}>
                { (!props.brandPosition || props.brandPosition === 'left') &&
                    <img src={navbarIcon} alt=""/>
                }
                {props.menuPosition === 'left' &&
                    <MenuList />
                }
                {props.iconPosition === 'left' &&
                    <IconList />
                }
            </div>
            <div className={centerColumnClassName}>
                {props.brandPosition === 'center' &&
                    <img src={navbarIcon} alt=""/>
                }
                {props.menuPosition === 'center' &&
                    <MenuList />
                }
            </div>
            <div className={rightColumnClassName}>
                { (!props.menuPosition || props.menuPosition === 'right') &&
                    <MenuList />
                }
                <IconList />
            </div>
        </div>
    );
}

export default Navbar;