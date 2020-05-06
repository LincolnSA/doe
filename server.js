const express = require('express');
const app = express();

//habilitar body do formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurar o servidor para configurar arquivos estáticos na pasta public
app.use(express.static('public'));

//configurando a template engine
const nunjucks = require('nunjucks');
nunjucks.configure("./", {
    express: app,
    noCache: true
})

const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "A+"
    },
    {
        name: "Mayk Brito",
        blood: "O+"
    }
];

//configurar a apresentação da página
app.get("/", (req, res) => {
    return res.render('index.html', { donors });
});

app.post("/", (req, res) => {
    const { name, email, blood } = req.body;

    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.");
    }

    let newDonor = { name, email, blood }
    donors.push(newDonor);

    return res.redirect("/");

});

//ligando o servidor na porta 3000
app.listen(3000, () => console.log("Servidor On http://localhost:3000"));