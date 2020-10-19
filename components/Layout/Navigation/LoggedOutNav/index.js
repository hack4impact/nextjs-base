import Link from "next/link";

export default function LoggedOutNav() {
    return (
        <div id="MainNavbar" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link href="/auth/signup">
                            <a className="button is-primary">
                                <strong> Sign Up </strong>
                            </a>
                        </Link>
                        <Link href="/auth/login">
                            <a className="button is-light">
                                Log In
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}