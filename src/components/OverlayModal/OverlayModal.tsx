import React, { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';

interface OverlayModalProps {
    onModalClose: () => void;
    onOverlayClose: (isVisible: boolean) => void;
    onApplyChanges?: (changes: any) => void;
};

const OverlayModal = ({ onOverlayClose }: OverlayModalProps) => {
    return (
        <>
            <Overlay closeOverlay={onOverlayClose} />
            <Modal discardChanges={onOverlayClose} />
        </>
    );
};

export default OverlayModal;