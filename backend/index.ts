import express from 'express';
import cors from 'cors';

const app = express(); //Crea la aplicación Express
const PORT = 5000; // El puerto donde va a escuchar el servidor
//en el frontend va a buscar el API en http://localhost:5000

app.use(cors());
app.use(express.json());

//el servidor empieza a escuchar solicitudes
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});