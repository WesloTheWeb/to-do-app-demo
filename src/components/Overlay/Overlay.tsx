import classes from './Overlay.module.scss';

const { overlay } = classes;

interface OverlayProps {
    closeOverlay: (isVisible: boolean) => void;
};

const Overlay = ({ closeOverlay }: OverlayProps) => {

    const handleClose = () => {
        closeOverlay(false);
    }

    return (
        <div className={overlay} onClick={handleClose} />
    );
};

export default Overlay;