function ShowSelected(){
    if(selectors[0].attiva){
        estensioni.forEach(estensione => {
            estensione.card.style.display = "flex";
        });
    }

    if(selectors[1].attiva){
        estensioni.forEach(estensione =>{
            if(estensione.attiva){
                estensione.card.style.display = "flex";
            }
            else{
                estensione.card.style.display = "none";
            }
        });
    }


    if(selectors[2].attiva){
        estensioni.forEach(estensione =>{
            if(estensione.attiva){
                estensione.card.style.display = "none";
            }
            else{
                estensione.card.style.display = "flex";
            }
        });
    }

    Update();
}