import type { ActionButton } from "../ui-types/ActionButton";
import type { Field } from "../ui-types/Field";

interface RegistrationFormProps {
  type: "login" | "sign-up";
  title: string;
  fields: Field[];
  buttons: ActionButton[];
}

export type { RegistrationFormProps };
