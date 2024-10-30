const api = "/";

async function gerarChave() {
    try {
        const response = await fetch(api + "random-key");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Erro ao buscar chave:", error);
    }
}

function updateHtml() {
    let numbers = document.getElementById("numeroschave");
    let stars = document.getElementById("estrelaschave");

    gerarChave().then(json => {
        if (json) {
            numbers.innerHTML = json.numeros.join(", ");
            stars.innerHTML = json.estrelas.join(", ");
        }
    });
}

window.addEventListener('load', updateHtml);
