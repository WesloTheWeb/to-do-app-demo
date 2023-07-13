import React, { useState } from 'react';
import TaskModel from '../../interfaces/task.model';
import classes from './Modal.module.scss';

const { container, modalActions, editSection } = classes;

interface ModalProps {
    discardChanges: (isVisible: boolean) => void;
    onApplyChanges?: (changes: any) => void;
    currentTaskId: string | null;
    currentTask: TaskModel | undefined;
};

const Modal = ({ discardChanges, onApplyChanges, currentTaskId, currentTask }: ModalProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleDiscardChanges = (evnt: React.MouseEvent<HTMLButtonElement>) => {
        evnt.preventDefault();
        discardChanges(false);
    };

    const handleInputChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evnt.target.value);
    };

    const handleApplyChanges = (evnt: React.MouseEvent<HTMLButtonElement>) => {
        evnt.preventDefault();
        if (onApplyChanges && currentTaskId) {
            onApplyChanges({ id: currentTaskId, newTitle: inputValue });
            discardChanges(false);
        }
    };

    return (
        <form className={container}>
            <h4>Change Tasks</h4>
            <p>To change this selected task name fill out the form below or discard changes</p>
            <section className={editSection}>
                <label>New Task Name</label>
                <input
                    onChange={handleInputChange}
                    value={inputValue}
                    placeholder={currentTask ? currentTask.title : 'Change Task Name'}
                />
            </section>
            <div className={modalActions}>
                <button onClick={handleDiscardChanges}>Discard Changes</button>
                <button onClick={handleApplyChanges}>Apply Changes</button>
            </div>
        </form>
    );
};

export default Modal;