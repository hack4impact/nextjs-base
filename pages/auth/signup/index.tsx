import React from 'react';
import SubmitButton from "../../../components/Form/SubmitButton";
import TextField from "../../../components/Form/TextField";
import { TextFieldType } from '../../../components/Form/types';
import FullPageForm from "../../../components/FullPageForm";

export default function SignUpView(): React.ReactElement {
    const header = (
        <p> Ready to get started ? Sign up below </p>
    )
    return (
        <FullPageForm title="Hello" header={header} callbackUrl="/fakeUrl">
            <TextField name="firstName" placeholder="First Name"/>
            <TextField name="lastName" placeholder="Last Name"/>
            <TextField name="email" placeholder="Email address" type={TextFieldType.email} icon="fa-envelope"/>
            <TextField name="password" placeholder="Password" icon="fa-lock"/>
            <SubmitButton> Sign Up </SubmitButton>
        </FullPageForm>
    )
}