import {NavLink} from "react-router";
import {RectangleIcon} from "../../../../shared/assets/RectangleIcon";

import {NAV_LINKS} from "../../../../shared/config/navigation";
import Button from "../../../../shared/ui/Button/Button";


export default function LeftNavPanel() {
    return (
        <>
            <li>
                <Button className='expand-button' ariaLabel="Expand menu"> <RectangleIcon/> </Button>
            </li>
            {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                    <li key={link.id}>
                        <Button className="nav-button"
                                as={NavLink}
                                to={link.path}
                                aria-label={link.label}
                                title={link.label}>
                            {Icon && <Icon aria-hidden="true" color="white" />}
                        </Button>
                    </li>

                );
            })}
        </>
    )
}