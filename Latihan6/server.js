const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * Fungsi Konversi Suhu Dinamis
 * Mendukung 16 kombinasi: C, F, R, K
 */
function convertTemperature(value, from, to) {
  // 1. Konversi dari satuan asal ke Celcius terlebih dahulu (sebagai basis)
  let celsius;
  switch (from) {
    case 'C':
      celsius = value;
      break;
    case 'F':
      celsius = (value - 32) * (5 / 9);
      break;
    case 'R':
      celsius = value * (5 / 4);
      break;
    case 'K':
      celsius = value - 273.15;
      break;
    default:
      throw new Error(`Satuan asal '${from}' tidak valid. Gunakan C, F, R, atau K.`);
  }

  // 2. Konversi dari Celcius ke satuan tujuan
  let result;
  switch (to) {
    case 'C':
      result = celsius;
      break;
    case 'F':
      result = (celsius * 9 / 5) + 32;
      break;
    case 'R':
      result = celsius * (4 / 5);
      break;
    case 'K':
      result = celsius + 273.15;
      break;
    default:
      throw new Error(`Satuan tujuan '${to}' tidak valid. Gunakan C, F, R, atau K.`);
  }

  return Number(result.toFixed(2)); // Bulatkan 2 angka di belakang koma
}

// Endpoint Dinamis
app.post('/api/convert-temperature', (req, res) => {
  const { value, from, to } = req.body;

  // 1. Validasi keberadaan parameter
  if (value === undefined || !from || !to) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameter value, from, dan to wajib diisi.'
    });
  }

  // 2. Format satuan menjadi uppercase (misal: 'c' -> 'C')
  const unitFrom = String(from).toUpperCase();
  const unitTo = String(to).toUpperCase();

  // 3. Konversi input nilai (termasuk string "12") menjadi Float/Number
  const numericValue = parseFloat(value);

  // 4. Cek apakah hasil parsing valid (menangani input seperti "Acelcius")
  if (isNaN(numericValue)) {
    return res.status(400).json({
      status: 'error',
      message: `Nilai '${value}' tidak valid. Harus berupa angka!`
    });
  }

  try {
    const convertedResult = convertTemperature(numericValue, unitFrom, unitTo);

    return res.status(200).json({
      status: 'success',
      data: {
        original_value: numericValue,
        from_unit: unitFrom,
        to_unit: unitTo,
        result: convertedResult
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});