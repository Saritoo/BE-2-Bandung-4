const express = require("express");
const app = express();
const port = 3000; // Port
// Endpoint untuk mendapatkan daftar tour
app.get("/tours", (req, res) => {
  const tours = [
    {
      id: 1,
      name: "Gunung Bromo",
      description: "Ikon alam Indonesia yang menakjubkan...",
    },
    {
      id: 2,
      name: "Nusa Penida",
      description:
        "Pulau yang menakjubkan di Indonesia dengan pantai-pantai eksotis...",
    },
    {
      id: 3,
      name: "Kawah Ijen",
      description:
        "Tempat yang luar biasa dengan danau asam biru terbesar di dunia serta fenomena api biru...",
    },
    {
      id: 4,
      name: "Candi Borobudur",
      description:
        "Keajaiban arsitektur Buddha di Indonesia, dengan struktur monumental yang menakjubkan...",
    },
  ];

  res.json(tours);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
