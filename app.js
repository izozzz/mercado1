const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"));

app.listen(3001, ()=>{
    console.log("Servidor levantado");
})

app.get("/",(req, res) => {
    res.sendFile(path.join("C:/Users/Nerox/Desktop/DH Ejercicios/clase 1102/views/home.html"))
}
)