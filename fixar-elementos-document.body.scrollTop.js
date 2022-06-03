//Codigo para fixar elemento(flutuante) na pagina - uma vez que o seletor de estilo "sticky" está obsoleto.
/*
 Cod para fixar elemento na tela (flutuante) e parar/stop quando Scroll chegar onde elemento foi inserido.
 */
//Função para reconhecimento do tamanho do "Scroll" do dispositivo.
function handleScroll(elemId) { // declaração da função handleScroll
    window.addEventListener('scroll', function () { // adição de evente de scroll com callBack 
        elem = document.getElementById(elemId);  // captura o elemento pelo ID- seletor pode ser alterado para "querySelector" ´para buscar pela "class"
        let body = document.body; // seleciona o elemento "Body"
        let doc = document.documentElement; //  seleciona o elemento "Document" - HTML
        let scrollTela = (body.scrollHeight - doc.clientHeight); // "scrollHeigth" pega o tamanho do scroll do dispositivo e "clientHeight" pega a altura max do dispositivo 
        let val = (doc.scrollTop); // passa o tamanho do "scroll" do top ao ponto de rolagem para outra variavel;
        let margin = 180; // margim limit para parada, está referenciada com "Bottom"  
        var pY = document.body.scrollTop + document.documentElement.scrollTop; // igual a variavel "val", pode ser usada para mais de uma medida entre dispositivos - como left, heith

        if ((val) < (scrollTela - margin)) { // faz a comparação do scroll com tamanho da dela e retira o tamnho da margem bottom
            elem.style.position = 'fixed' // caso seja menor que o limite da margem, mantem fixo (flutuante) na pagina
        }
        else { elem.style.position = 'static' }// caso seja = ou >, deixa o elemnto static no local onde ele foi inserido na pagina
        elem.style.bottom = elem.style.left = 0; // adiciona style ao elemento e deixa static
    });
};

window.onscroll = function () { handleScroll('cro-section') }; // chama a função. Deve ser acrescentado o ID (ou class) para ser chamada na função como parametro - "elemId"
handleScroll(`cro-section`); // executa a função com ID elemento.

//commit