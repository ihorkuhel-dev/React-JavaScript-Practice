import "./HamburgerMenu.scss"
import React, {useEffect, useRef, useState, memo} from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router";
import {selectUser} from "../../../../features/user/model/userSlice";

import {NAV_BUTTONS, NAV_LINKS} from "../../../../shared/config/navigation";
import Button from "../../../../shared/ui/Button/Button";
import {useMenuAction} from "../../hooks/useMenuAction";

const HamburgerMenu = memo(function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { user } = useSelector(selectUser);

    const userName = ( user?.name ) ?? 'User'

    const handleAction = useMenuAction();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target))
                setIsOpen(false);
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape')
                setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen]);

    const handleMenuClick = (actionName) => {
        setIsOpen(!isOpen);
        if (actionName)
            handleAction(actionName);
    };

    return (
            <div ref={menuRef} className={`hamburger-menu ${isOpen ? "is-open" : ""}`}>

                <Button
                type="button"
                className={`hamburger-menu__toggle ${isOpen ? "is-open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                ariaLabel="Toggle Menu"
                >
                    <span className="toggle-line"/>
                    <span className="toggle-line"/>
                    <span className="toggle-line"/>
                </Button>

                <nav>
                    <ul>
                        {NAV_LINKS.concat(NAV_BUTTONS).map((button) => {
                            const Icon = button.icon;
                            return (
                            <li key={button.path ? `link-${button.id}`: `button-${button.id}`}
                                className={`hamburger-menu__button ${button.id}`}>
                                <Button as={button.path ? NavLink : 'button'}
                                        to={button.path}
                                        onClick={() => handleMenuClick(button.onClick)}
                                        className="mobile-menu-button"
                                    >
                                    {Icon && <Icon aria-hidden="true" color="white"/>}
                                    {button.label === "User Profile" ? userName : button.label}
                                </Button>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
    )
});

export default HamburgerMenu;