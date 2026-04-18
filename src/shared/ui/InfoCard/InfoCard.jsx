import "./InfoCard.scss"
import {useEffect, useState} from "react";
import EditIcon from "../../assets/EditIcon";
import Button from "../Button/Button";
import Input from "../Input/Input";


export default function InfoCard({data, title, editAble, className = ''}) {

    if (!data) return null;

    const [activeEdit, setActiveEdit] = useState(false);
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        if (data)
            setLocalData(data.map(item => ({...item})));
    },[data])

    const enableEdit = () => {
        setActiveEdit(true);
    }

    const disableEdit = () => {
        setActiveEdit(false);
    }

    const editLocalData = (id, value) => {
        const newData= [...localData];
        newData[id].value = value;
        setLocalData(newData);
    }

    const applyChanges = () => {
        disableEdit()
    }

    const cancelChanges = () => {
        setLocalData(data)
        disableEdit()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const ToolBar = () => {
        if(editAble && !activeEdit){
            return (
                <div className="tool-bar">
                    <Button className="transparent" onClick={enableEdit}>
                        <EditIcon/>
                    </Button>
                </div>
            )
        } else if(editAble && activeEdit){
            return (
                <div className="tool-bar">
                    <Button className="transparent" onClick={applyChanges}>
                        Apply
                    </Button>
                    <Button className="transparent" onClick={cancelChanges} type="submit">
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
                    <form className={`info-card__list ${className}`} onSubmit={handleSubmit}>

                        <div className="header">
                            <h4>{title}</h4>
                            <ToolBar/>
                        </div>
                        {localData.map((row, index) => (
                            <div className="info-card__row" key={index}>
                                <dt className="info-card__term">{row.label}</dt>
                                <Input value={row.value} classList="edit" onChange={(e) => editLocalData(index, e.currentTarget.value)} />
                            </div>
                        ))}
                    </form>
                ) :
                (
                    <dl className={`info-card__list ${className}`}>
                        <div className="header">
                            <h4>{title}</h4>
                            <ToolBar/>
                        </div>
                        {localData.map((row, index) => (
                            <div className="info-card__row" key={index}>
                                <dt className="info-card__term">{row.label}</dt>
                                <dd className="info-card__desc">{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                )}
        </>
    );
};
