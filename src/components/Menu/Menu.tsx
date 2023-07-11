import React from 'react';
import classes from './Menu.module.scss';

const { menu } = classes;

interface MenuProps {
    mouseClose: () => void;  // The type for mouseClose prop
};

const Menu = ({mouseClose}: MenuProps) => {
    return (
        <nav className={menu} onMouseLeave={mouseClose}>
            <span>delete task</span>
        </nav>
    );
};

export default Menu;