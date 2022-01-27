//Capitura os dados do form

var btnCodifica = document.querySelector("#btn-codifica");

var btnDecodifica = document.querySelector("#btn-decodifica")

var btnCopiar = document.querySelector("#btn-copiar")

var arrayTexto = []


//Evento para Codificar
btnCodifica.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-codifica")
    var textoDigitado = form.getcode.value;

    if (textoDigitado == '') {
        alert("Campo vazio, digite um texto!")
    } else {

        for (var i = 0; i < textoDigitado.length; i++) {
            arrayTexto.push(textoDigitado[i]);
        }

        var textoCodificado = codifica(arrayTexto);

        form.getdecode.value = textoCodificado;

        form.getcode.value = ''

    }
});

//Evento Decodificar
btnDecodifica.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(arrayTexto)
    var form = document.querySelector("#form-codifica");
    var textoParaDecodificar = deCodifica(arrayTexto);
    //console.log(textoParaDecodificar)
    form.getdecode.value = textoParaDecodificar;
    //form.getdecode.value = ''
    arrayTexto.splice(0, arrayTexto.length)

})

//Evento copia texto do input getdecode
btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var textoCopiado = document.getElementById("getdecode")
    if (textoCopiado.value == '') {
        alert("O campo selecionado esta vazio!");
    } else {
        copiaTexto(textoCopiado);
    }
})

//Função copia texto

function copiaTexto(texto) {

    var form = document.querySelector("#form-codifica")
    texto.select();
    texto.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(texto.value);
    alert("Texto copiado!");
    form.getdecode.value = '';
    form.getcode = onfocus();
}

//Função codifica 
const codifica = (array) => {
    var arrayCode = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'i' ||
            array[i] == 'e' ||
            array[i] == 'o' ||
            array[i] == 'u' ||
            array[i] == 'a') {
            arrayCode.push(array[i].replace('i', 'imes').replace('e', '&').replace('o', 'ober').replace('u', 'ufat').replace('a', 'ai'))
        } else {
            arrayCode.push(array[i])
        }
    }
    console.log(arrayCode)
    return arrayCode.join('')
}

//Função para decodificar o texto. 
const deCodifica = (array) => {
    var arrayDecode = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'ai' ||
            array[i] == '&' ||
            array[i] == 'ober' ||
            array[i] == 'ufat' ||
            array[i] == 'imes') {
            arrayDecode.push(array[i].replace('ai', 'a').replace('&', 'e').replace('ober', 'o').replace('ufat', 'u').replace('imes', 'i'))
        } else {
            arrayDecode.push(array[i])
        }
    }
    return arrayDecode.join('')
}







