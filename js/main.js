import { validarTelefonoInput } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
const input = document.getElementById('telefono');
const btn = document.getElementById('validarBtn');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', () => {
    const numero = input.value.trim();

    if (validarTelefonoInput(numero)) {
    resultado.textContent = '✅ Número válido';
    resultado.className = 'valido';
    } else {
    resultado.textContent = '❌ Número inválido';
    resultado.className = 'invalido';
    }

    resultado.style.opacity = 0;
    resultado.style.animation = 'none';
    void resultado.offsetWidth;
    resultado.style.animation = 'fadeInResult 0.5s forwards';
});
});
