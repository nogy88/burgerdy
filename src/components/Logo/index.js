import React from 'react';
import css from './style.module.css';
import srcImage from '../../assets/images/burger-logo.png'

const Logo = (props) => (
    <div className={css.Logo}>
        <img src={srcImage} alt='' />
    </div>
)

export default Logo;