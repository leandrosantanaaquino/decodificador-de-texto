let digitar__texto__principal = document.querySelector('.digitar__texto__principal');
let mensagem = document.querySelector('.mensagem');
let botaoCopiar = document.querySelector('.botao__copiar');
let imagemBoneco = document.querySelector('.imagem__boneco');
let mensagemImgBoneco = document.querySelector('.imagem__mensagem__boneco');

// Função para validar o texto
function validarTexto(texto) {
    let regex = /^[a-z\s]+$/; // Expressão regular para permitir apenas letras minúsculas e espaços

    if (!regex.test(texto)) {
        alert("Texto inválido! Apenas letras minúsculas sem acentos e sem caracteres especiais são permitidos.");
        return false;
    }
    return true;
}

function botaoEncriptar() {
    let texto = digitar__texto__principal.value;

    if (validarTexto(texto)) {
        let textoEncriptado = encripitar(texto);
        mensagem.value = textoEncriptado;
        digitar__texto__principal.value = "";

        // Esconde as imagens do boneco e da mensagem
        imagemBoneco.style.display = 'none';
        mensagemImgBoneco.style.display = 'none';
    }
}

function encripitar(encriptacao) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    encriptacao = encriptacao.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (encriptacao.includes(matrizCodigo[i][0])) {
            encriptacao = encriptacao.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return encriptacao;
}

function botaoDesencriptar() {
    let texto = digitar__texto__principal.value;

    if (validarTexto(texto)) {
        let textoDesencriptado = desencripitar(texto);
        mensagem.value = textoDesencriptado;
        digitar__texto__principal.value = "";

        // Esconde as imagens do boneco e da mensagem
        imagemBoneco.style.display = 'none';
        mensagemImgBoneco.style.display = 'none';
    }
}

function desencripitar(desencriptacao) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    desencriptacao = desencriptacao.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (desencriptacao.includes(matrizCodigo[i][1])) {
            desencriptacao = desencriptacao.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return desencriptacao;
}

// Função para copiar o texto e limpar o campo
botaoCopiar.addEventListener('click', function() {
    // Seleciona o texto do textarea
    mensagem.select();
    document.execCommand('copy');

    // Limpa o campo de texto
    mensagem.value = "";

    // Reexibe as imagens do boneco e da mensagem informativa
    imagemBoneco.style.display = 'block';
    mensagemImgBoneco.style.display = 'block';
});

// Adiciona um evento de input ao textarea para mostrar o boneco quando o campo de mensagem estiver vazio
mensagem.addEventListener('input', function() {
    if (mensagem.value === "" && digitar__texto__principal.value === "") {
        imagemBoneco.style.display = 'block';
        mensagemImgBoneco.style.display = 'block';
    }
});
