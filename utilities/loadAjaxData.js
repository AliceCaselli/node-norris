
// Sfruttando l’api https://api.chucknorris.io/jokes/random creare un applicazione che scarica una battuta random, la aggiunge ad un file json norrisDb.json e la mostra all’utente.
function loadAjaxData(onSuccess) {
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            onSuccess(data.value);
        });
}

module.exports = loadAjaxData;