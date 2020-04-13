import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.css';
import '../../../../assets/font/Inter/inter.css';

let cx = classNames.bind(style);

const Button = (props) => {
    let className = cx({
        btn: true,
        btnPrimary: props.color === 'primary' && !props.fill,
        btnFillBlack: props.color === 'black' && props.fill
    });

    return (
        <button className={className}>{props.text}</button>
    );
}

export default Button;