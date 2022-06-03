// aguarda codig oser carregado para injetar script
let interval = window.setInterval(function(){
    //verifica elemento existente 
    if ( document.querySelectorAll('#cms-Header .mdn-Menu-list .mdn-Menu-list-item-link button:not(.cms-toggle-menu-search):not(.cms-target-text--city)').length ) {

        //elementos interadoa no array que se com event click 
        const hrEvent = ['combos', 'movel', 'internet', 'tv', 'fone', 'm2m', 'solucoesdigitais', 'atendimento', 'contrate', 'minhaclaro'];

        // seleção e concatenação com array e elementos de disparo
        document.querySelectorAll('#cms-Header .mdn-Menu-list .mdn-Menu-list-item-link button:not(.cms-General-toggle-submenu.gtm-element-event.access-collapse):not(.mdn-Button.mdn-Button--global.mdn-Button--sm.cms-Menu-subMenu-action.gtm-element-event.cms-gtm-cortain)').forEach(function(e){
            e.addEventListener(click, function(d){
                hj('event', `heatmenu${hrEvent[e]}`);
              console.log(hotjar);

            });
        });
    };

    //limpa espera
    clearInterval(interval);
}, 200);

// commit