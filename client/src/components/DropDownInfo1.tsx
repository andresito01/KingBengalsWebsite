import react from 'react';
import DropDownStyle from "./styles/DropDownInfo.module.css";

type DropDownProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const DropDownInfo: React.FC<DropDownProps> = ({isOpen, onClose}) => {

    if(!isOpen) return null
    return(
        <div>
            <div className={DropDownStyle.dropdownInfo}>
                <p>Lineage: ...</p>
                <p>Status: ...</p>
                <p>Attitude: ...</p>
                <p>Pattern: ...</p>
                <p>History: ...</p>
            </div>
        </div>
    )
}
export default DropDownInfo;