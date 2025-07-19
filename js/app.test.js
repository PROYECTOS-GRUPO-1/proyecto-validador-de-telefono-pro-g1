import { validarTelefonoInput } from './validar.js';

test('Número válido: +51 987654321', () => {
expect(validarTelefonoInput('+51 987654321')).toBe(true);
});

test('Número inválido: 123', () => {
expect(validarTelefonoInput('123')).toBe(false);
});

test('Número inválido sin +: 987654321', () => {
expect(validarTelefonoInput('987654321')).toBe(false);
});
