import {useSelector} from "react-redux";
import {selectUser} from "../../../../features/user/model/userSlice";
import {NAV_BUTTONS} from "../../../../shared/config/navigation";
import Button from "../../../../shared/ui/Button/Button";
import {useMenuAction} from "../../hooks/useMenuAction";

export default function RightNavPanel() {

    const handleAction = useMenuAction();
    const { user } = useSelector(selectUser);

    const userName = ( user?.name ) ?? 'User'

    return (
        <>
            {NAV_BUTTONS.map((btn) => {
                const Icon = btn.icon;
                return (
                    <li key={btn.id}>
                        <Button className="nav-button"
                                title={btn.label === 'User Profile' ?
                                    userName + " profile" :
                                    btn.label}
                                onClick={() => handleAction(btn.onClick)}
                        >
                            {Icon && <Icon color="var(--accent-color)"/>}
                        </Button>
                    </li>

                );
            })}
        </>
    )
}