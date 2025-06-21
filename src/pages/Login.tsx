// Types
import type { ActionButton } from "../app-types/ui-types/ActionButton";
import type { Field } from "../app-types/ui-types/Field";

// Components
import RegistrationFormComponent from "../components/ui/RegistrationFormComponent";

export default function Login() {

    const loginFormFields: Field[] = [
        {
            id: 1,
            label: "Username",
            fullWidth: true,
            shape: "standard",
            type: "text"
        },
        {
            id: 2,
            label: "Password",
            fullWidth: true,
            shape: "standard",
            type: "password"
        }
    ];

    const actionButtons: ActionButton[] = [
        {
            id: 1,
            actionName: "Sign-Up",
            link: "",
            shape: "outlined"
        },
        {
            id: 2,
            actionName: "Login",
            link: "",
            shape: "contained",
        }
    ]

    return <>
        <RegistrationFormComponent
            type="login"
            title="Login"
            fields={loginFormFields}
            buttons={actionButtons}
        />
    </>
}
