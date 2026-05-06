
const validarEmail = (email) => {
  if (!email || typeof email !== "string") return false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim().toLowerCase());
}

// Ejemplos de uso:
console.log(validarEmail("usuario@dominio.com")); // true
console.log(validarEmail("correo-invalido.com")); // false
console.log(validarEmail("   TEST@MAIL.COM  ")); // true