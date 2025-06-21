interface Field {
  id: number;
  label: string;
  shape: "standard" | "outlined" | "filled";
  fullWidth: boolean;
  type: "password" | "text" | "email";
}

export type { Field };
