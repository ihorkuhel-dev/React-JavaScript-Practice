import "./BurgerMenu.scss"
import Button from "../../../shared/ui/Button/Button";
import {useState} from "react";

import {NAV_LINKS, NAV_BUTTONS} from "../../../shared/config/navigation";
import {NavLink} from "react-router";

export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`hamburger-menu ${isOpen ? "is-open" : ""}`}>

                <Button
                type="button"
                className={`hamburger-menu__toggle ${isOpen ? "is-open" : ""}`}
                onClick={handleMenuClick}
                >

                </Button>

                <nav className="">
                    <ul>
                        {NAV_BUTTONS.concat(NAV_LINKS).map((button) => (

                            <li key={button.path ? `link-${button.id}`: `button-${button.id}`}
                                className={`hamburger-menu__button ${button.id}`}>
                                <Button as={button.path ? NavLink : 'button'}
                                        to={button.path}
                                    >
                                    {button.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </>
    )
}