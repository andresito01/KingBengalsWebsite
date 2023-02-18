import React from "react";
import '../pages/styles/OurCats.css';
//import OurCats from "../pages/OurCats";
    
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
    if(!isOpen) return null
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="closeBtn">
                    <button onClick={onClose}> X </button>
                </div>
                <div className="title">
                    <h1>Female Cat Name</h1>
                </div>
                <div className="body">
                    <p>Here will be some more info about the cat...</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;