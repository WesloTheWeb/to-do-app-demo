import React from 'react';
import classes from './Modal.module.scss';

const { container, modalActions, editSection } = classes;

const Modal = ({ }) => {
    return (
        <form className={container}>
            <h4>Change Tasks</h4>
            <p>To change this selected task name fill out the form below or discard changes</p>
            <section className={editSection}>
                <label>New Task Name</label>
                <input placeholder='Change Task Name' />
            </section>
            <div className={modalActions}>
                <button>Discard Changes</button>
                <button>Apply Changes</button>
            </div>
        </form>
    );
};

export default Modal;