import {ClientListIcon} from "../assets/ClientListIcon";
import {CertificateIcon} from "../assets/CertificateIcon";
import {DashboardIcon} from "../assets/DashboardIcon";
import {SettingsIcon} from "../assets/SettingsIcon";
import {InfoIcon} from "../assets/InfoIcon";
import {LogOutIcon} from "../assets/LogOutIcon";
import {UserIcon} from "../assets/UserIcon";

export const NAV_LINKS = [
    {
        id: 1,
        path: '/client-list',
        label: 'Client List',
        icon: ClientListIcon,
    },
    {
        id: 2,
        path: '/certificate-card',
        label: 'Certificate',
        icon: CertificateIcon,
    },
    {
        id: 3,
        path: '/',
        label: 'Dashboard',
        icon: DashboardIcon,
    }
];
export const NAV_BUTTONS = [
    {
        id: 1,
        onClick: 'openUserProfile',
        label: 'User Profile',
        icon: UserIcon
    },
    {
        id: 2,
        onClick: 'openSettings',
        label: 'Open Settings',
        icon: SettingsIcon,
    },
    {
        id: 3,
        onClick: 'openInfo',
        label: 'Information',
        icon: InfoIcon,
    },
    {
        id: 4,
        onClick: 'logOut',
        label: 'Log out',
        icon: LogOutIcon,
    },
]