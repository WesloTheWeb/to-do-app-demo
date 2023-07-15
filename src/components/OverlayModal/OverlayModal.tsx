import TaskModel from '../../interfaces/task.model';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';

interface OverlayModalProps {
    onOverlayClose: (isVisible: boolean) => void;
    onApplyChanges?: (changes: any) => void;
    currentTaskId: string | null;
    currentTask: TaskModel | undefined;
};

const OverlayModal = ({ onOverlayClose, onApplyChanges, currentTaskId, currentTask }: OverlayModalProps) => {
    return (
        <>
            <Overlay closeOverlay={onOverlayClose} />
            <Modal
                discardChanges={onOverlayClose}
                onApplyChanges={onApplyChanges}
                currentTaskId={currentTaskId}
                currentTask={currentTask}
            />
        </>
    );
};

export default OverlayModal;