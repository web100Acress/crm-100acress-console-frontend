export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        componentType: "input" as const,
        required: true,
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        type: "password",
        componentType: "input" as const,
        required: true,
      },
]