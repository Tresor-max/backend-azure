const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Bonjour depuis le backend déployé sur Azure !');
});

app.listen(PORT, () => console.log(`Serveur en ligne sur le port ${PORT}`));
