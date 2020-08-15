//SERVIDOR
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

//CONFIGURAR NUNJUCKS (TEMPLATE ENGINE)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR
server
    //RECEBER OS DADOS DO req.body
    .use(express.urlencoded({
        extended: true
    }))
    //CONFIGURAR ARQUIVOS ESTATICOS - CSS, SCRIPTS, IMAGES
    .use(express.static("public"))
    //ROTAS DA APLICAÇÃO
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //START DO SERVIDOR
    .listen(5500)