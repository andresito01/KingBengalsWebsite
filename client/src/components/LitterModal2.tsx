import React from "react";
import LitterModalCSS from './styles/LitterModal.module.css';
    
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const ModalLitter2: React.FC<ModalProps> = ({isOpen, onClose}) => {
    const fontSizeParagraph = {fontSize: '20px'};

    if(!isOpen) return null
    return (
        <div className={LitterModalCSS.modalBackground}>
            <div className={LitterModalCSS.modalContainer}>
                <div className={LitterModalCSS.closeBtn}>
                    <button onClick={onClose}> X </button>
                </div>
                <div className={LitterModalCSS.title}>
                    <h1>Kittens for Sale!</h1>
                    <p style={fontSizeParagraph}><b>Date of Birth:</b> November 12, 2022</p>
                    <p style={fontSizeParagraph}><b>Approximate Go Home Date:</b> March 2, 2023</p>
                </div>
                <div className={LitterModalCSS.litterImg}>
                    <img alt="litterImg1" src={require("../images/Litter2.png")}/>
                </div>
                <div className={LitterModalCSS.litterMom}>
                    <img alt="litterMom" src={require("../images/Placeholder.png")}/>
                </div>
                <div className={LitterModalCSS.litterDad}>
                    <img alt="litterDad" src={require("../images/Placeholder.png")}/>
                </div>
                <div className={LitterModalCSS.momAndDadText}>MOM & DAD</div>
                <div className={LitterModalCSS.kitten1}>
                    <img alt='kitten1' src={require("../images/pattern.jpg")}/>
                </div>
                <div className={LitterModalCSS.kitten2}>
                    <img alt='kitten2' src={require("../images/pattern.jpg")}/>
                </div>
                <div className={LitterModalCSS.kitten3}>
                    <img alt='kitten3' src={require("../images/pattern.jpg")}/>
                </div>
                <div className={LitterModalCSS.kittenInfo1}>
                    <p><b>Color:</b> Carmel/Tan</p>
                    <p><b>Pattern:</b> Spotted</p>
                    <p><b>Sex:</b> Male</p>
                    <p><b>Status:</b> Available</p>
                </div>
                <div className={LitterModalCSS.kittenInfo2}>
                    <p><b>Color:</b> Brown/Tan</p>
                    <p><b>Pattern:</b> Spotted</p>
                    <p><b>Sex:</b> Female</p>
                    <p><b>Status:</b> Reserved</p>
                </div>
                <div className={LitterModalCSS.kittenInfo3}>
                    <p><b>Color:</b> Carmel/Black</p>
                    <p><b>Pattern:</b> Marble</p>
                    <p><b>Sex:</b> Male</p>
                    <p><b>Status:</b> Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default ModalLitter2;