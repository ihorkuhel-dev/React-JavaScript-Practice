import {useSearchParams} from "react-router-dom";
import "./TabsNav.scss";

export default function TabsNav({ tabs, paramName = 'tab', defaultTab, className = '' }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialTabLabel = defaultTab || (tabs.length > 0 ? tabs[0].label : '');
    const currentTab = searchParams.get(paramName) || initialTabLabel;

    const setTab = (label) => {
        searchParams.set(paramName, label);
        setSearchParams(searchParams);
    }

    return (
        <nav className={`tabs-nav ${className}`}>
            <ul>
                {tabs.map((item) => (
                    <li key={item.id}
                        className={item.label === currentTab ? 'active' : ''}
                        onClick={() => setTab(item.label)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
