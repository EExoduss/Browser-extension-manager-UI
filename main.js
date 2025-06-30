

estensioni.forEach(estensione => {
    estensione.el.addEventListener("click", function() {
        estensione.attiva = this.checked;
        console.log(estensione.nome + "," + estensione.attiva);
    });
});







selectors.forEach(selettore => {
    selettore.el.addEventListener("click", function(){
        selettore.attiva = true;
        console.log(selettore.tipo + "," + selettore.attiva);

        selectors.forEach(altro => {
            if (altro !== selettore) {
                altro.el.checked = false;
                altro.attiva = false;
            }
        });

        Update(); 

        ShowSelected();
    });

    
});

Update(); 

//Adesso devo fare la visualizzazione delle cose filtrate


