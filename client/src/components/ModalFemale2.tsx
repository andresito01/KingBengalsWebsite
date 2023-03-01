import React from "react";
import ModalCSS from './styles/Modal.module.css';
    
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const ModalFemale2: React.FC<ModalProps> = ({isOpen, onClose}) => {
    if(!isOpen) return null
    return (
        <div className={ModalCSS.modalBackground}>
            <div className={ModalCSS.modalContainer}>
                <div className={ModalCSS.closeBtn}>
                    <button onClick={onClose}> X </button>
                </div>
                <div className={ModalCSS.title}>
                    <h1>Female2 Cat Name</h1>
                </div>
                <div className={ModalCSS.body}>
                    <p>Lineage: ...</p>
                    <p>Status: ...</p>
                    <p>Attitude: ...</p>
                    <p>Pattern: ...</p>
                    <p>History: ...</p>
                </div>
            </div>
        </div>
    );
}

export default ModalFemale2;