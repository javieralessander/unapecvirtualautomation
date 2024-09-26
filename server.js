const express = require("express");
const app = express();
const port = 3000;

// Define una ruta básica
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Escucha en el puerto 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
