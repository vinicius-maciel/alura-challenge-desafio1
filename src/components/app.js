document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('textArea');
    const btnCriptografar = document.querySelector('.botao_criptografar');
    const btnDescriptografar = document.querySelector('.botao_descriptografar');
    const btnCopiar = document.querySelector('.botao_copiar');
    const resultadoTitulo = document.getElementById('resultadoTitulo');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const homeImage = document.querySelector('.descricao_subtitulo_home-imagem');

    if (!textArea || !btnCriptografar || !btnDescriptografar || !resultadoTitulo || !resultadoTexto || !homeImage) {
        console.error('Um ou mais elementos não foram encontrados no DOM.');
        return;
    }

    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    }

    function criptografar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function descriptografar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function mostrarResultado(texto) {
        // Esconde o título padrão e a imagem
        resultadoTitulo.classList.add('invisivel');
        homeImage.classList.add('invisivel');
        btnCopiar.style.display = 'flex';
        
        // Exibe o texto resultante
        resultadoTexto.classList.add('resultado-exibido'); // Aplica a classe de estilo para o texto resultante
        resultadoTexto.textContent = texto; // Atualiza o texto
    }

    function esconderResultado() {
        // Esconde o texto resultante
        resultadoTexto.classList.remove('resultado-exibido');
        
        // Exibe o título padrão e a imagem
        resultadoTitulo.classList.remove('invisivel');
        homeImage.classList.remove('invisivel');
        btnCopiar.style.display = 'none';
    }

    btnCriptografar.addEventListener('click', function(e) {
        e.preventDefault();
        const texto = textArea.value;
        if (texto) {
            if (validarTexto(texto)) {
                esconderResultado(); 
                const textoCriptografado = criptografar(texto);
                mostrarResultado(textoCriptografado); 
                console.log('Texto criptografado com sucesso!');
            } else {
                alert('O texto deve conter apenas letras minúsculas e espaços.');
            }
        }
    });

    btnDescriptografar.addEventListener('click', function(e) {
        e.preventDefault();
        const texto = textArea.value;
        if (texto) {
            if (validarTexto(texto)) {
                esconderResultado(); 
                const textoDescriptografado = descriptografar(texto);
                mostrarResultado(textoDescriptografado); 
                console.log('Texto descriptografado com sucesso!');
            } else {
                alert('O texto deve conter apenas letras minúsculas e espaços.');
            }
        }
    });

        function copiarTexto() {
        const textoParaCopiar = resultadoTexto.textContent;
        navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            console.log('Texto copiado com sucesso!');
            alert('Texto copiado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    }

    btnCopiar.addEventListener('click', function(e) {
        e.preventDefault();
        copiarTexto();
    });
});
