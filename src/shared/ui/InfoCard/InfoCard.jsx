import "./InfoCard.scss"
import EditIcon from "../../assets/EditIcon";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useEditableData } from "../../hooks/useEditableData";

export default function InfoCard({data, title, editAble, className = ''}) {

    const {
        localData,
        activeEdit,
        enableEdit,
        disableEdit,
        updateFieldByIndex,
        discardChanges
    } = useEditableData(data);

    if (!data) return null;

    const editLocalData = (index, value) => {
        updateFieldByIndex(index, 'value', value);
    }

    const applyChanges = () => {
        disableEdit();
    }

    const cancelChanges = () => {
        discardChanges();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const ToolBar = () => {
        if(editAble && !activeEdit){
            return (
                <div className="tool-bar">
                    <Button className="transparent" onClick={enableEdit} ariaLabel="edit">
                        <EditIcon/>
                    </Button>
                </div>
            )
        } else if(editAble && activeEdit){
            return (
                <div className="tool-bar">
                    <Button className="transparent" onClick={applyChanges} ariaLabel="Apply changes">
                        Apply
                    </Button>
                    <Button className="transparent" onClick={cancelChanges} ariaLabel="Cancel changes">
                        Cancel
                    </Button>
                </div>
            )
        }
        return null
    }

    return (
        <>
            {activeEdit ? (
                <div className={`info-card__list ${className}`}>
                    <form  onSubmit={handleSubmit}>

                        <div className="header">
                            <h2>{title}</h2>
                            <ToolBar/>
                        </div>
                        {localData.map((row, index) => (
                            <div className="info-card__row" key={index}>
                                <dt className="info-card__term">{row.label}</dt>
                                <Input value={row.value} classList="edit" onChange={(e) => editLocalData(index, e.currentTarget.value)} />
                            </div>
                        ))}
                    </form>
                </div>

                ) :
                (
                    <div className={`info-card__list ${className}`}>
                        <div className="header">
                            <h2>{title}</h2>
                            <ToolBar/>
                        </div>
                        <dl >
                            {localData.map((row, index) => (
                                <div className="info-card__row" key={index}>
                                    <dt className="info-card__term">{row.label}</dt>
                                    <dd className="info-card__desc">{row.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                )}
        </>
    );
};
