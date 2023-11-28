import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set("strictQuery", true);

const options = { 
  // Definir um tempo limite maior para as operações
  socketTimeoutMS: 30000, // Tempo limite da conexão em milissegundos
  connectTimeoutMS: 30000, // Tempo limite de conexão em milissegundos
};

main().catch((err) => console.log());

async function main() {
   await mongoose.connect(`${process.env.MONGO_URL}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    ...options,});

  console.log("Conectado com sucesso!");
}

export default main;

/* ONLY ADD DATA ONE TIME */
// AffiliateStat.insertMany(dataAffiliateStat);
// OverallStat.insertMany(dataOverallStat);
// Product.insertMany(dataProduct);
// ProductStat.insertMany(dataProductStat);
// Transaction.insertMany(dataTransaction);
// User.insertMany(dataUser);
