const express = require("express");
const morgan = require("morgan"); //middleware application logger
const nunjucks = require("nunjucks");

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan("tiny"));

app.use(express.static("./public"));

let tweetsDeEjemplo = [
  { id: 1, name: "juan", content: "este es un tweeettt de juan" },
  { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
  { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.get("/", function (req, res) {
  res.render("index", { tweets: tweetsDeEjemplo });
});

// app.get("/stylesheets/style.css", function (req, res) {
//   res.sendFile(__dirname + "/public/stylesheets/style.css");
// });

app.listen(3000, function () {
  console.log("Estas escuhando en el puerto 3000");
});

// const express = require("express");
// const app = express();
// const morgan = require("morgan");
// const fs = require("fs");
// const path = require("path"); //The path module provides utilities for working with file and directory paths.
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   { flags: "a" }
// );
// const nunjucks = require("nunjucks");

// function checkAuth(req, res, next) {
//   const id = req.params.id;
//   const user = users[id];

//   if (user.admin === true) {
//     next();
//   } else {
//     res.send("Error no pasas!!");
//   }
// }

// app.use("/", function (req, res, next) {
//   console.log("Este es el Middleware de loggeo");
//   next();
// });

// app.use("/special/", function (req, res, next) {
//   console.log("Este es el Middleware especial");
//   next();
// });

// app.use("/special/subpath", function (req, res, next) {
//   console.log("Este es el Middleware subpath");
//   next();
// });

// app.use(function (req, res, next) {
//   const data = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
//   res.render("index", { title: "Hall of Fame", personas: data });
//   // next();
// });

// app.use(morgan("combined", { stream: accessLogStream }));

// app.get("/", function (req, res) {
//   //   console.log("Hola");
//   res.send("Estoy en el home");
// });

// app.get("/otro", function (req, res) {
//   //   console.log("Hola");
//   res.send("Hola");
// });

// app.use(morgan("tiny"));

// app.set("view engine", "html"); // hace que res.render funcione con archivos html
// app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
// nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

// app.listen(3000, function () {
//   console.log("Servidor corriendo en el puerto 3000");
// });
