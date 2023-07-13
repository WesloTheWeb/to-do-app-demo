import React, { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';

interface OverlayModalProps {
    onModalClose: () => void;
    onApplyChanges?: (changes: any) => void;
};

const OverlayModal = ({onModalClose}: OverlayModalProps) => {
    return (
        <>
            <Overlay closeOverlay={onModalClose} />
            <Modal  />
        </>
    );
};

export default OverlayModal;