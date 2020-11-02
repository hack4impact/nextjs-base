import { useRouter } from 'next/router';
import React from 'react';
import SubmitButton from "../../../components/Form/SubmitButton";
import TextField from "../../../components/Form/TextField";
import { TextFieldType } from '../../../components/Form/types';
import FullPageForm from "../../../components/FullPageForm";
import styles from "../auth.module.scss";

export default function SignUpView(): React.ReactElement {
    const router = useRouter();
    const header = (
        <>
        <p> Ready to get started ? Sign up below </p>
        { router.query.error && <p className={styles.alert}> {router.query.error} </p>}
        </>
    )
    return (
        <FullPageForm title="Sign Up" header={header} callbackUrl="/api/users/signup">
            <TextField name="firstName" placeholder="First Name"/>
            <TextField name="lastName" placeholder="Last Name"/>
            <TextField name="username" placeholder="Email address" type={TextFieldType.email} icon="fa-envelope"/>
            <TextField name="password" placeholder="Password" type={TextFieldType.password} icon="fa-lock"/>
            <SubmitButton> Sign Up </SubmitButton>
        </FullPageForm>
    )
}