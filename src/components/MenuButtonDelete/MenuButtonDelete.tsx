import React from 'react';
import classes from './MenuButtonDelete.module.scss';

const { deleteBtnProperties } = classes;

interface MenuButtonDeleteProps {
    id: string;
    onDelete: (id: string) => void;  // add onDelete prop
}

const MenuButtonDelete = ({ onDelete, id }: MenuButtonDeleteProps) => {
    return (
        <span
            className={deleteBtnProperties}
            onClick={() => onDelete(id)}>
            Delete Task
        </span>
    );
};

export default MenuButtonDelete;