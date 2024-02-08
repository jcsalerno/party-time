const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://jcsalerno:${process.env.DB_PASSWORD}@cluster0.4blf8gn.mongodb.net/`
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
