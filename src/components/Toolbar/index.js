import React from "react";
import css from './style.module.css';
import Logo from '../Logo'
import Menu from '../Menu'
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) =>
    <header className={css.Toolbar}>
        {/* <div onClick={props.toggleSideBar}>...</div> */}
        <HamburgerMenu toggleSideBar={props.toggleSideBar} />
        <Logo />
        <nav className={css.HideMenuItem}>
            <Menu />
        </nav>
    </header>

export default Toolbar;