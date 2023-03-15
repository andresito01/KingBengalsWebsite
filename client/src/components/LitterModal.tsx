import React from "react";
import LitterModalCSS from './styles/LitterModal.module.css';
import litterupdatesmodaljson from '../json/litterupdatesmodal.json';
    
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    children?: React.ReactNode;
}

interface Data {
    // Condensed view to not waste space (change back if preferred)
    id: number;
    // Litter and Parents
    birthDate: string; pickupDate: string; litterPicture: string;
    momPicture: string; dadPicture: string;
    // Kitten 1
    kitten1Picture: string; kitten1Color: string; kitten1Pattern: string; 
    kitten1Sex: string; kitten1Status: string;
    // Kitten 2
    kitten2Picture: string; kitten2Color: string; kitten2Pattern: string; 
    kitten2Sex: string; kitten2Status: string;
    // Kitten 3
    kitten3Picture: string; kitten3Color: string; kitten3Pattern: string; 
    kitten3Sex: string; kitten3Status: string;
    // Kitten 4
    kitten4Picture: string; kitten4Color: string; kitten4Pattern: string; 
    kitten4Sex: string; kitten4Status: string;
}

const ModalLitter1: React.FC<ModalProps> = ({isOpen, onClose, id}) => {
    const data: Data | undefined = litterupdatesmodaljson.find(kitten => kitten.id === id);

    if(!isOpen || !data) return null
    return (
        <div className={LitterModalCSS.modalBackground}>
            <div className={LitterModalCSS.modalContainer}>
                <div className={LitterModalCSS.closeBtn}>
                    <button onClick={onClose}> X </button>
                </div>
                <div className={LitterModalCSS.title}>
                    <h1>Kittens for Sale!</h1>
                    <p><b>Date of Birth:</b> {data.birthDate}</p>
                    <p><b>Approximate Go Home Date:</b> {data.pickupDate}</p>
                </div>
                
                {/* Litter picture and both of the Parents */}
                <div className={LitterModalCSS.gridLitterandParents}>
                    <div className={LitterModalCSS.litterImg}>
                        <img src={data.litterPicture} alt="litterPicture"/>
                    </div>
                    <div className={LitterModalCSS.litterParent}>
                        <div className={LitterModalCSS.litterParentPicture}>
                            <img src={data.momPicture} alt="litterMom"/>
                        </div>
                        <div className={LitterModalCSS.momAndDadText}>MOM</div>
                    </div>
                    <div className={LitterModalCSS.litterParent}>
                        <div className={LitterModalCSS.litterParentPicture}>
                            <img src={data.dadPicture} alt="litterDad"/>
                        </div>
                        <div className={LitterModalCSS.momAndDadText}>DAD</div>
                    </div>
                </div>

                {/* Individual Kitten Pictures and Info */}
                <div className={LitterModalCSS.kittenContainer}>
                    {/* Kitten Pictures */}
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kitten1Picture} alt='kitten1'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kitten2Picture} alt='kitten2'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kitten3Picture} alt='kitten3'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kitten4Picture} alt='kitten4'/>
                    </div>
                    
                    {/* Kitten Info */}
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kitten1Color}</p>
                        <p><b>Pattern:</b> {data.kitten1Pattern}</p>
                        <p><b>Sex:</b> {data.kitten1Sex}</p>
                        <p><b>Status:</b> {data.kitten1Status}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kitten2Color}</p>
                        <p><b>Pattern:</b> {data.kitten2Pattern}</p>
                        <p><b>Sex:</b> {data.kitten2Sex}</p>
                        <p><b>Status:</b> {data.kitten2Status}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kitten3Color}</p>
                        <p><b>Pattern:</b> {data.kitten3Pattern}</p>
                        <p><b>Sex:</b> {data.kitten3Sex}</p>
                        <p><b>Status:</b> {data.kitten3Status}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kitten4Color}</p>
                        <p><b>Pattern:</b> {data.kitten4Pattern}</p>
                        <p><b>Sex:</b> {data.kitten4Sex}</p>
                        <p><b>Status:</b> {data.kitten4Status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLitter1;