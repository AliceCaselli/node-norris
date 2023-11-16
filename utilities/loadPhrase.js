const fs = require("fs");
const path = require("path");
const phrasePath = path.join(__dirname, "../db", "norrisDB.json");

function loadPhrase() {

    try {
        const phrases = fs.readFileSync(phrasePath, "utf-8");
        return JSON.parse(phrases);
    } catch (err) {
        console.log(err.message);
        return [];

    }
}

module.exports = loadPhrase;