import SliderStyle from "./styles/SliderInfo.module.css";
import ourcatssliderjson from "../json/ourcatsslider.json"

type SliderProps = {
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

const SliderInfo: React.FC<SliderProps> = ({isOpen, onClose, id}) => {
    const data: Data | undefined = ourcatssliderjson.find(cat => cat.id === id);

    if(!isOpen || !data) return null
    return(
        <div>
            <div className={SliderStyle.sliderInfo}>
                <p><u>Lineage:</u></p>
                <p>{data.lineage}</p>
                <p><u>Status:</u></p>
                <p>{data.status}</p>
                <p><u>Attitude:</u></p>
                <p>{data.attitude}</p>
                <p><u>Pattern:</u></p>
                <p>{data.pattern}</p>
                <p><u>History:</u></p>
                <p>{data.history}</p>
            </div>
        </div>
    )
}
export default SliderInfo;