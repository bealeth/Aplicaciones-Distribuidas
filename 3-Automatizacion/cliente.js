const axios = require('axios');

let consecutivasAltas = 0;

// Configura tus datos de Telegram
const token = '7309481682:AAFpLZl-G6i-YsoIl2djL3WrL2arqFNcNBs'; 
const chatId = '1578580182'; 

async function verificarTemperatura() {
  try {
    const response = await axios.get('http://localhost:3000/temperatura');
    const temp = response.data.temperatura;
    console.log(`Temperatura actual: ${temp}°C`);

    if (temp > 39) {
      consecutivasAltas++;
      console.log(`Temperatura alta detectada (${consecutivasAltas}/3)`);
    } else {
      consecutivasAltas = 0;
    }

    if (consecutivasAltas >= 3) {
      await enviarNotificacion(temp);
      consecutivasAltas = 0; // reinicia el conteo después de notificar
    }

  } catch (err) {
    console.error('Error al leer temperatura:', err.message);
  }
}

async function enviarNotificacion(temp) {
  const mensaje = `Alerta: temperatura alta (${temp}°C) detectada 3 veces seguidas`;

  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: mensaje
    });
    console.log('Notificación enviada por Telegram');
  } catch (error) {
    console.error('Error al enviar Telegram:', error.response?.data || error.message);
  }
}

// Ejecutar cada 10 segundos (puedes cambiarlo a 30 * 1000 si quieres 30 s)
setInterval(verificarTemperatura, 10 * 1000);
