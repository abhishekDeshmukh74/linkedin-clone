import { logout } from "./userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { signOut } from 'firebase/auth';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from "./HeaderOption";
import './Header.css';

function Header() {

    const dispatch = useDispatch();

    const logoutHandler = async () => {
        await signOut(auth);
        dispatch(logout());
    };

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="Linkedin Logo"
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption title="Me" onClick={logoutHandler} avatar={true} />
            </div>
        </div>
    )
}

export default Header
