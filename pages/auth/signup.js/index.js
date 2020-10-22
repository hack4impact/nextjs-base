import React from 'react';
import SubmitButton from "../../../components/Form/SubmitButton";
import TextField from "../../../components/Form/TextField";
import FullPageForm from "../../../components/FullPageForm";

export default function SignUpView() {
    const header = (
        <p> Ready to get started ? Sign up below </p>
    )
    return (
        <FullPageForm title="Signup" header={header}>
            <TextField name="firstName" placeholder="First Name"/>
            <TextField name="lastName" placeholder="Last Name"/>
            <TextField name="email" placeholder="Email address" type="email" icon="fa-envelope"/>
            <TextField name="password" placeholder="Password" icon="fa-lock"/>
            <SubmitButton> Sign Up </SubmitButton>
        </FullPageForm>
    )
}