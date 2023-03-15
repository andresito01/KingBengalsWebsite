import DropDownStyle from "./styles/DropDownInfo.module.css";
import ourcatsdropdownjson from "../json/ourcatsdropdown.json"

type DropDownProps = {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    children?: React.ReactNode;
}

interface Data {
    id: number;
    lineage: string;
    status: string;
    attitude: string;
    pattern: string;
    history: string;
}

const DropDownInfo: React.FC<DropDownProps> = ({isOpen, onClose, id}) => {
    const data: Data | undefined = ourcatsdropdownjson.find(cat => cat.id === id);

    if(!isOpen || !data) return null
    return(
        <div>
            <div className={DropDownStyle.dropdownInfo}>
                <p><u>Lineage:</u> {data.lineage}</p>
                <p><u>Status:</u> {data.status}</p>
                <p><u>Attitude:</u> {data.attitude}</p>
                <p><u>Pattern:</u> {data.pattern}</p>
                <p><u>History:</u> {data.history}</p>
            </div>
        </div>
    )
}
export default DropDownInfo;