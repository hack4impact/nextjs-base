import { useRouter } from "next/router";
import { csrfToken } from "next-auth/client"
import FullPageForm from "../../../components/FullPageForm";
import TextField from "../../../components/Form/TextField";
import styles from "../auth.module.scss";
import SubmitButton from "../../../components/Form/SubmitButton";
import { TextFieldType } from "../../../components/Form/types";

export default function LoginView({csrfToken}): React.ReactElement {
    const router = useRouter();
    const header = (
        <>
        <p> Login with your username and password </p>
        {router.query.error && <p className={styles.alert}> {router.query.error} </p>}
        </>
    )
    return (
        <FullPageForm title="Login" callbackUrl="/api/auth/callback/credentials" header={header}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                <TextField name="username" placeholder="Username" icon="fa-envelope"/>
                <TextField type={TextFieldType.password} name="password" placeholder="Password" icon="fa-lock"/>
                <SubmitButton> Sign In </SubmitButton>
        </FullPageForm>
    )
}

LoginView.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}