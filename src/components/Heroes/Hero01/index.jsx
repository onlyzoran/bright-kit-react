import React from 'react';

import style from './style.module.css';

import Button from './Button';

const Hero01 = () => {
    return (
        <div>
            <header>
                header
            </header>
            <div className={style.heroWrapper}>
                <Button text="Buy" textColor="light" buttonColor="black" fillType="outline" />
                <Button text="Demo" textColor="primary" buttonColor="primary" fillType="fill" />
            </div>
        </div>
    );
}

export default Hero01;