function validarParametros() {
    const validarNomeSerie = document.getElementById('nomeSerie').value
    const validarTemporadas=document.getElementById('temporadas').value
    const validarProdutora = document.getElementById('produtora').value
    const validarAnoLancamento = document.getElementById('anoLancamento').value
    
    if (validarNomeSerie || validarTemporadas || validarProdutora || validarAnoLancamento) {
        document.getElementById('btnCadastrar').removeAttribute('disabled')
    } else {
        alert("Todos os campos devem ser preenchidos!")
    }
}

document.addEventListener('input', () => {
    validarParametros()
})


//realizar método POST para cadastrar uma nova série,

document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
    e.preventDefault()
    //responsável por chamar a nossa API

    //endpoint da api
    const url = 'https://json-server-vercel-brown.vercel.app/series'

    //capturar os valores do formulário: ???
    const dadosEnviados = {
        "id": null, //valor altoincremental
        "nomeSerie": document.getElementById('nomeSerie').value,
        "temporadas": document.getElementById('temporadas').value,
        "anoLancamento": document.getElementById('anoLancamento').value,
        "produtora": document.getElementById('produtora').value,
    }

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosEnviados)
        })
        
        const resposta = await fetch(url)

        if (resposta.ok) {
            alert("Série foi cadastrada com sucesso!")
        }

        location.reload()

    } catch (error) {
        console.log(`O consumo via POST deu ruim, ${error}`);
    }