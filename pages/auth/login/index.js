import Head from "next/head"
import Logo from "../../../components/Logo"
import { useRouter } from "next/router";
import { csrfToken } from "next-auth/client"
import styles from "./login.module.scss"

export default function LoginView({csrfToken}) {
    const router = useRouter();
    return (
        <>
        <Head>
            <title> Login  </title>
        </Head>
        <form method="post" action="/api/auth/callback/credentials" className={styles.customContainer}>
            <div className={styles.loginForm}>
                <a href="/"><Logo/></a>
                <p> Login with your username and password </p>
                {router.query.error && <p style={{color: "red"}}> {router.query.error} </p>}
                <div style={{marginTop: "1rem"}}>
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Username"
                        name="username"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="password" 
                        placeholder="Password" 
                        name="password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button type="submit"> Sign In </button>
            </div>
        </div>
        </form>
        </>
    )
}

LoginView.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}