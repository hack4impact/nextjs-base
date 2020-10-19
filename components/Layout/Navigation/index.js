import { useSession } from "next-auth/client";
import Logo from "../../Logo";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import styles from "./navigation.module.scss";

export default function Navigation() {
    const [session, useLoading] = useSession();
    return(
        <nav className={`navbar ${styles.navigation}`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <Logo/>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="MainNavbar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                {
                    session ? LoggedInNav() : LoggedOutNav()
                }
        </nav>
    )
}