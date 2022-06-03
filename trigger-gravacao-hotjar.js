document.querySelectorAll('SELECIONA TODOS ELEMENTOS DE UM PARENTELEMENT ):not(.DESCARTA ELEMENTOS FORA DO ALVO)').forEach(function(e){
    e.addEventListener(click, function(d){
        //TRIGGER-HOTJAR
        hj('event', `heatmenu${hrEvent[e]}`);
        //TESTE NO CONSOLE
      console.log(hotjar);
    });
});