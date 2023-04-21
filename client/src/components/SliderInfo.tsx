import SliderStyle from "./styles/SliderInfo.module.css";

type SliderProps = {
  isOpen: boolean;
  onClose: () => void;
  parent: parentFormat;
  children?: React.ReactNode;
};

/******* Parent structure ***********/
interface parentFormat {
  id: string;
  name: string;
  sex: string;
  picture: string;
  attitude: string;
  status: string;
  pattern: string;
  lineage: string;
  history: string;
}

const SliderInfo: React.FC<SliderProps> = ({ isOpen, onClose, parent }) => {

  if (!isOpen || !parent) return null;
  return (
    <div key={parent.id}>
      <div className={SliderStyle.sliderInfo}>
        <p><u>Lineage:</u></p><p>{parent.lineage}</p>
        <p><u>Status:</u></p><p>{parent.status}</p>
        <p><u>Attitude:</u></p><p>{parent.attitude}</p>
        <p><u>Pattern:</u></p><p>{parent.pattern}</p>
        <p><u>History:</u></p><p>{parent.history}</p>
      </div>
    </div>
  );
};
export default SliderInfo;
