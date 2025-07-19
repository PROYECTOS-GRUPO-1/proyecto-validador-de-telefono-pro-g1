export function validarTelefonoInput(numero) {
const regex = /^\+\d{1,4}[\s-]?\d{6,14}$/;
return regex.test(numero);
}
