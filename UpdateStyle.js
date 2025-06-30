function Update(){

    selectors.forEach(selettore =>{
        if(selettore.attiva){
            if(darkMode){ //attivo, darkmode
                selettore.btn.style.backgroundColor = "var(--Red-500)";
                selettore.btn.style.color = "var(--Neutral-800)";
            }
            else{ //attivo, light mode
                selettore.btn.style.backgroundColor = "var(--Red-500)";
                selettore.btn.style.color = "var(--Neutral-0)";
            }
        }
        else{
            if(darkMode){ //disattivo, darkmode
                selettore.btn.style.backgroundColor = "var(--Neutral-700)";
                selettore.btn.style.color = "var(--Neutral-0)";
            }
            else{ //disattivo, lightmode
            selettore.btn.style.backgroundColor = "var(--Neutral-0)";
                selettore.btn.style.color = "black";
            }
        }
    });


    RemoveBtn.forEach(btn => {
        if(btn.removed){
            btn.riferimento.style.display = "none";
        }

    });
    
    
}