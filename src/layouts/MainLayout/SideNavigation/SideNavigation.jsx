import LeftNavPanel from "./LeftNavPanel";
import RightNavPanel from "./RightNavPanel";

export default function SideNavigation(props) {

    const {type} = props;

    const childrenElement = type === 'navigation-panel' ? <LeftNavPanel/> : <RightNavPanel/>;

    return (
        <nav className={`"side-navigation" ${type}`}>
            {type}
            {childrenElement}
        </nav>
    )
};