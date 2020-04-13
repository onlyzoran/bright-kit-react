import React from 'react';
import style from './style.module.css';
import Navbar from './Navbar';
import Button from './Button';
import image from '../../../assets/image/hero_img_01.png';
import emoji from '../../../assets/image/hero_emoji_01.svg';

const Hero01 = () => {
    return (
        <div className={style.wrapper}>
            <Navbar fixed="top" iconPosition="left" />
            <div className={style.inner}>
                <div className={style.col} style={{marginTop: -13}}>
                    <h3 className={style.subTitle}>Short headline</h3>
                    <h1 className={style.title}>Headline makes greater impact.</h1>
                    <p className={style.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    </p>
                    <Button text="Buy" color="black" fill />
                    <Button text="Demo" color="primary"/>
                    <div className={style.flex}>
                        <img src={emoji} className={style.emoji} alt=""/>
                        <small className={style.small}>Taxes may apply</small>
                    </div>
                </div>
                <div className={style.col}>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Hero01;