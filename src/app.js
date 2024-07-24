import express from "express";

// Importacion de Routers
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

// Configuracion de puerto
const app = express();
const PUERTO = 8080;

//Middleware: aca le digo al servidor que voy a usar formato json
app.use(express.json());


app.use("/", productsRouter);
app.use("/", cartsRouter);

// VINCULA EL SERVIDOR
app.listen(PUERTO, () => {
  console.log(`escuchando en el puerto: http://localhost:${PUERTO}`);
});



// app.use("/api/products", productsRouter)✅
// app.use("/api/carts", cartsRouter)✅

//la ruta raiz get / debera listar los productos de la base
//la ruta raiz get /:pid debera listar el producto con mismo id

// La ruta raíz POST / deberá agregar un nuevo producto con los campos:
// id: String  el id NO se manda desde body
// title:String,
// description:String
// code:String
// price:Number
// status:Boolean
// stock:Number
// category:String
// thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto
// Status es true por defecto.
// Todos los campos son obligatorios, a excepción de thumbnails
