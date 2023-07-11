import React from 'react';
import classes from './Menu.module.scss';
import MenuButtonOptions from '../MenuButtonOptions/MenuButtonOptions';

const { menu } = classes;

interface MenuProps {
    mouseClose: () => void;  // The type for mouseClose prop
    onDelete: (id: string) => void;  // add onDelete prop
    id: string;              // id of the task to be deleted
};

const Menu = ({ mouseClose, onDelete, id }: MenuProps) => {
    return (
        <nav className={menu} onMouseLeave={mouseClose}>
            <MenuButtonOptions
                onDelete={onDelete}
                id={id}
            />
        </nav>
    );
};

export default Menu;