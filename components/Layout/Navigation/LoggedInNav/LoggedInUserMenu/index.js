import Link from "next/link";
import styles from "./LoggedInUserMenu.module.scss";

export default class LoggedInUserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: false
        }
    }

    handleMenuClick = () => {
        this.setState(state => ({dropdownActive: !state.dropdownActive}))
    }
    
    render() {
        return (
            <div className={`navbar-item has-dropdown ${this.state.dropdownActive ? "is-active" : null}`}  onClick={this.handleMenuClick}>
                <div className={styles.menu}>
                    <img src="avatar.png"/>
                    <i className="fas fa-bars"></i>
                </div>

                <div className="navbar-dropdown" style={{borderTop: "none"}}>
                    <Link href="/api/auth/signout">
                        <a className="navbar-item">
                            Logout
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}