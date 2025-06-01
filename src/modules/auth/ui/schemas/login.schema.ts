export const formSchema = {
  email: [
    {
      required: true,
      message: "Por favor ingresa un correo electrónico válido",
    },
    {
      type: "email",
      message: "El correo electrónico no es válido",
    },
  ],
  password: [
    {
      required: true,
      message: "Por favor ingresa una contraseña válida",
    },
    {
      min: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
    },
    {
      max: 20,
      message: "La contraseña no puede tener más de 20 caracteres",
    },
    {
      pattern: /[@$!%*?&]/,
      message:
        "La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)",
    },
    {
      pattern: /[A-Z]/,
      message: "La contraseña debe contener al menos una letra mayúscula",
    },
    {
      pattern: /[a-z]/,
      message: "La contraseña debe contener al menos una letra minúscula",
    },
    {
      pattern: /\d/,
      message: "La contraseña debe contener al menos un número",
    },
  ],
};
