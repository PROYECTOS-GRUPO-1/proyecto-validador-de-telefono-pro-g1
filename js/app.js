function validarTelefonoInput(numero) {
  const regex = /^\+(\d{1,4})[\s-]?\d{6,14}$/;
  return regex.test(numero);
}

const codigosPais = {
  '51': 'Perú 🇵🇪',
  '1': 'EE. UU. / Canadá 🇺🇸🇨🇦',
  '34': 'España 🇪🇸',
  '55': 'Brasil 🇧🇷',
  '54': 'Argentina 🇦🇷',
  '57': 'Colombia 🇨🇴',
  '52': 'México 🇲🇽',
  '44': 'Reino Unido 🇬🇧',
  '49': 'Alemania 🇩🇪',
};

function obtenerPais(numero) {
  const match = numero.match(/^\+(\d{1,4})/);
  if (match) {
    const codigo = match[1];
    return codigosPais[codigo] || 'País desconocido 🌍';
  }
  return '';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('telefono');
  const btn = document.getElementById('validarBtn');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', () => {
    const numero = input.value.trim();

    if (validarTelefonoInput(numero)) {
      const pais = obtenerPais(numero);
      resultado.textContent = `✅ Número válido — ${pais}`;
      resultado.className = 'valido';
    } else {
      resultado.textContent = '❌ Número inválido';
      resultado.className = 'invalido';
    }

    // Reaplicar animación
    resultado.style.opacity = 0;
    resultado.style.animation = 'none';
    void resultado.offsetWidth;
    resultado.style.animation = 'fadeInResult 0.5s forwards';
  });
});
