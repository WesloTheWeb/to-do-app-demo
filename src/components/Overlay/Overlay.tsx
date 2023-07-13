import React from 'react';
import classes from './Overlay.module.scss';

const { overlay } = classes;

interface OverlayProps {
    closeOverlay: () => void;
};

const Overlay = ({ closeOverlay }: OverlayProps) => {

    return (
        <div className={overlay} />
    );
};

export default Overlay;