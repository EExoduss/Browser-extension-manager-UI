


RemoveBtn.forEach(btn => {
    btn.bottone.addEventListener("click", function(){
        btn.removed = true;
        Update();
    });
});