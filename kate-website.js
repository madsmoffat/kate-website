

 //let link = //link needs to be not the text but the property of the links. the number before the txt string"//
 //let pageNum =//the same as link...i think somethin linke that//
 //let delayInMilliseconds=
 let pageDiv = document.getElementById("page");
 let disclaimer = document.getElementById("disclaimer-btn");
 let main = document.getElementById("main-btn");
 let credits = document.getElementById("credits-btn");
 let title = document.getElementById("title-btn");
 

function displayCredits() {
    document.getElementById("title-page").style.display="none";
    document.getElementById("disclaimer").style.display="none";
    document.getElementById("main-body").style.display="none";
    document.getElementById("credits").style.display="block";

    title.addEventListener("click",displayTitle);
    main.addEventListener("click",displayMain);
};

function displayMain() {
    document.getElementById("title-page").style.display="none";
    document.getElementById("disclaimer").style.display="none";
    document.getElementById("main-body").style.display="block";
    document.getElementById("credits").style.display="none";

    credits.addEventListener("click", displayCredits);
    

};

function displayDisclaimer() {
    document.getElementById("title-page").style.display="none";
    document.getElementById("disclaimer").style.display="block";
    document.getElementById("main-body").style.display="none";
    document.getElementById("credits").style.display="none";

    main.addEventListener("click", displayMain);
    title.addEventListener("click", displayTitle);
    credits.addEventListener("click", displayCredits);

};

function displayTitle() {
    document.getElementById("title-page").style.display="block";
    document.getElementById("disclaimer").style.display="none";
    document.getElementById("main-body").style.display="none";
    document.getElementById("credits").style.display="none";
    
    disclaimer.addEventListener("click",displayDisclaimer);
};

displayTitle();
