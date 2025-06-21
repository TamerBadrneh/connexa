// Components
import RegistrationFormComponent from "../components/ui/RegistrationFormComponent";

// Types
import type { ActionButton } from "../app-types/ui-types/ActionButton";
import type { Field } from "../app-types/ui-types/Field";

export default function Signup() {
    const signupFormFields: Field[] = [
        {
            id: 1,
            fullWidth: true,
            shape: "standard",
            label: "Name",
            type: "text"
        },
        {
            id: 2,
            fullWidth: true,
            shape: "standard",
            label: "Username",
            type: "text"
        },
        {
            id: 3,
            fullWidth: true,
            shape: "standard",
            label: "Email",
            type: "email"
        },
        {
            id: 4,
            fullWidth: true,
            shape: "standard",
            label: "Password",
            type: "password"
        },
        {
            id: 5,
            fullWidth: true,
            shape: "standard",
            label: "Confirm Password",
            type: "password"
        },
    ];

    const actionButtons: ActionButton[] = [
        {
            id: 1,
            actionName: "Login",
            link: "",
            shape: "outlined",
        },
        {
            id: 2,
            actionName: "Sign-Up",
            link: "",
            shape: "contained"
        },
    ]

    return <>
        <RegistrationFormComponent
            type="sign-up"
            title="Create New Account"
            fields={signupFormFields}
            buttons={actionButtons}
        />
    </>
}
