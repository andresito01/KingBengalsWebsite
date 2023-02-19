import React from "react";
import './styles/Modal.css';
    
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const ModalFemale1: React.FC<ModalProps> = ({isOpen, onClose}) => {
    if(!isOpen) return null
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="closeBtn">
                    <button onClick={onClose}> X </button>
                </div>
                <div className="title">
                    <h1>Female1 Cat Name</h1>
                </div>
                <div className="body">
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

export default ModalFemale1;