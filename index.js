const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/students.route"))

mongoose.connect('mongodb+srv://adlan:begaev@cluster0.uhqp6.mongodb.net/akatsuki?retryWrites=true&w=majority')
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
  console.log(`Сервер запущен успешно http://localhost:4000`)
})