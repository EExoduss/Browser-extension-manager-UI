const themeBtn = document.getElementById("js-theme");
const themeImg = document.querySelector(".selector-theme");

const header = document.getElementById("js-head-app");

const card = document.querySelectorAll(".card");

const selectorType = document.querySelectorAll(".selector-type");


let darkMode = false;

themeBtn.addEventListener("click", () => {

    if (darkMode){
        darkMode = false;
    }
    else{
        darkMode = true;
    }


    if(darkMode){
        themeImg.src = "/assets/images/icon-sun.svg";
    }
    else{
        themeImg.src = "/assets/images/icon-moon.svg";
    }

    themeBtn.classList.toggle("dark-mode");
    

    document.body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");

    card.forEach(element => {
        element.classList.toggle("dark-mode");
    });

    selectorType.forEach(element=>{
        element.classList.toggle("dark-mode");
    })

    Update();
});