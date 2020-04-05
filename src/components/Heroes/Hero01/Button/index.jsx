import React from 'react';
import style from './style.module.css';

const Button = (props) => {
    let buttonClassNames = '';
    if (props.textColor) {
        buttonClassNames += ' ';
        buttonClassNames += props.textColor == 'primary' ? style.textColorPrimary : style.textColorLight;
    }
    if (props.borderColor) {
        buttonClassNames += ' ';
        buttonClassNames += props.textColor == 'primary' ? style.textColorPrimary : style.textColorLight;
    }

    return (
        <button className={buttonClassNames}>{props.text}</button>
    );
}

export default Button;