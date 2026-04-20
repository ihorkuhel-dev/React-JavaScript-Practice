import React, { memo } from 'react';
import LeftNavPanel from "./LeftNavPanel";
import RightNavPanel from "./RightNavPanel";
import './SideNavigation.scss'

const SideNavigation = memo(function SideNavigation(props) {

    const {type} = props;

    const childrenElement = type === 'navigation-panel' ? <LeftNavPanel/> : <RightNavPanel/>;

    return (
        <nav className={`side-navigation ${type}`}>
            <ul>
                {childrenElement}
            </ul>
        </nav>
    )
});

export default SideNavigation;