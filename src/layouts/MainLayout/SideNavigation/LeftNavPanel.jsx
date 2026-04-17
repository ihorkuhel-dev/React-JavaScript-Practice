import {NavLink} from "react-router";

import {NAV_LINKS} from "../../../shared/config/navigation";
import {RectangleIcon} from "../../../shared/assets/RectangleIcon";
import Button from "../../../shared/ui/Button/Button";


export default function LeftNavPanel() {


    return (
        <>
            <li>
                <Button className='expand-button' aria-label="Свернуть/Развернуть меню"> <RectangleIcon/> </Button>
            </li>
            {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                    <li key={link.id}>
                        <NavLink className="nav-button" to={link.path} aria-label={link.label} title={link.label}>
                            {Icon && <Icon aria-hidden="true"/>}
                        </NavLink>
                    </li>

                );
            })}
        </>
    )
}