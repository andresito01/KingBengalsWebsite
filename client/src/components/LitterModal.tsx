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
    // Info for button containers
    litterName: string; totalKittens: string;
    availableKittens: string; soldKittens: string;
    // Litter and Parents
    birthDate: string; pickupDate: string; litterPicture: string;
    momPicture: string; dadPicture: string;
    kittens: [{id: number, kittenName: string, kittenPicture: string, kittenColor: string, 
              kittenPattern: string, kittenSex: string, kittenStatus: string}];
}

//Export jsonData to LitterUpdates.tsx so parent photos and litter status
//can be displayed on the page rather than the modal
export const jsonData = litterupdatesmodaljson as Data[];

const ModalLitter1: React.FC<ModalProps> = ({isOpen, onClose, id}) => {
    const data: Data | undefined = litterupdatesmodaljson.find(obj => obj.id === id) as Data | undefined;

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
                        <img src={data.kittens.find(obj => obj.id === 1)?.kittenPicture} alt='kitten1'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kittens.find(obj => obj.id === 2)?.kittenPicture} alt='kitten2'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kittens.find(obj => obj.id === 3)?.kittenPicture} alt='kitten3'/>
                    </div>
                    <div className={LitterModalCSS.kittenPicture}>
                        <img src={data.kittens.find(obj => obj.id === 4)?.kittenPicture} alt='kitten4'/>
                    </div>
                    
                    {/* Kitten Info */}
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kittens.find(obj => obj.id === 1)?.kittenColor}</p>
                        <p><b>Pattern:</b> {data.kittens.find(obj => obj.id === 1)?.kittenPattern}</p>
                        <p><b>Sex:</b> {data.kittens.find(obj => obj.id === 1)?.kittenSex}</p>
                        <p><b>Status:</b> {data.kittens.find(obj => obj.id === 1)?.kittenStatus}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kittens.find(obj => obj.id === 2)?.kittenColor}</p>
                        <p><b>Pattern:</b> {data.kittens.find(obj => obj.id === 2)?.kittenPattern}</p>
                        <p><b>Sex:</b> {data.kittens.find(obj => obj.id === 2)?.kittenSex}</p>
                        <p><b>Status:</b> {data.kittens.find(obj => obj.id === 2)?.kittenStatus}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kittens.find(obj => obj.id === 3)?.kittenColor}</p>
                        <p><b>Pattern:</b> {data.kittens.find(obj => obj.id === 3)?.kittenPattern}</p>
                        <p><b>Sex:</b> {data.kittens.find(obj => obj.id === 3)?.kittenSex}</p>
                        <p><b>Status:</b> {data.kittens.find(obj => obj.id === 3)?.kittenStatus}</p>
                    </div>
                    <div className={LitterModalCSS.kittenInfo}>
                        <p><b>Color:</b> {data.kittens.find(obj => obj.id === 4)?.kittenColor}</p>
                        <p><b>Pattern:</b> {data.kittens.find(obj => obj.id === 4)?.kittenPattern}</p>
                        <p><b>Sex:</b> {data.kittens.find(obj => obj.id === 4)?.kittenSex}</p>
                        <p><b>Status:</b> {data.kittens.find(obj => obj.id === 4)?.kittenStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLitter1;