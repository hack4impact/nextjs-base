import LoggedInUserMenu from "./LoggedInUserMenu";

export default function LoggedInNav() {
    return (
        <div id="MainNavbar" className="navbar-menu">
            <div className="navbar-end">
                    <LoggedInUserMenu/>
            </div>
        </div>
    )
}