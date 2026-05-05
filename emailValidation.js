
const validarEmail = (email)=> {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Ejemplos de uso:
console.log(validarEmail("usuario@dominio.com")); // true
console.log(validarEmail("correo-invalido.com")); // false