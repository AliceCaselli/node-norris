const http = require("http");
const fs = require("fs");
const path = require("path");
const phrasePath = path.join(__dirname, "/db", "norrisDB.json");
const dotenv = require("dotenv");
const loadAjaxData = require("./utilities/loadAjaxData");
const loadPhrase = require("./utilities/loadPhrase");
dotenv.config();

let port = process.env.PORT || 8080;


const server = http.createServer((req, res) => {

    let readPhrases = loadPhrase();



    loadAjaxData((value) => {
        let frase;
        if (readPhrases.includes(value)) {
            frase = "Hai trovato un doppione: refresha!";
        } else {
            frase = value;
        }

        const html = [];

        html.push("<ul>");

        html.push(`<li>${frase}</li>`);

        html.push("</ul>");

        readPhrases.push(value);
        //scrivere la frase nel JSON
        try {

            fs.writeFileSync(phrasePath, JSON.stringify(readPhrases));
        } catch (err) {
            console.log(err.message);
        }

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(html.join(""));
    })

    //     const phrases = loadPhrase();

    //     const html = []

    //     html.push("<ul>");

    //     for (const phrase of phrases) {
    //         html.push(`<li>${phrase}</li>`);
    //     }

    //     html.push("</ul>");

    // res.setHeader("Content-Type", "text/html;charset=utf-8");
    // res.end(html.join(""));
    // res.end(loadAjaxData);


});


// const serverAsync = http.createServer((req, res) => {

//     loadAjaxData.loadAjaxData((phrases) => {
//         const html = [];

//         html.push("<ul>");

//         for (const phrase of phrases) {
//             html.push(`<li>${phrase}</li>`);
//         }

//         html.push("</ul>");

//         res.setHeader("Content-Type", "text/html;charset=utf-8");
//         res.end(html.join(""));
//     })
// })


server.listen(port, () => {
    console.log("http://localhost:" + port);
});


