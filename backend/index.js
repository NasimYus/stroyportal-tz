const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  "Продукт",
  "Шпатлевка",
  "Крепеж",
  "Кровля",
  "Металл и металлические изделия",
  "Общестроительные материалы",
  "Пиломатериалы",
  "Двери",
  "Лестницы",
  "Потолки",
  "Песок",
  "Грунт",
  "Керамзит",
  "Гравий",
  "Торф",
];

function searchProduct(text) {
  return products.filter((product) =>
    product.toLowerCase().includes(text.trim().toLowerCase())
  );
}

app.get("/search", (req, res) => {
  const { search_text } = req.query;
  const filteredProducts = searchProduct(search_text);
  res.json(filteredProducts);
});

app.listen(5000, () => {
  console.log("work");
});
