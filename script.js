const priceListItem = document.querySelectorAll(".price-list");

const webDevPage = document.querySelector(".web-dev-page");
const webTemplatesPage = document.querySelector(".web-templates-page");
const uiPage = document.querySelector(".ui-page");
const webPage = document.querySelector(".web-page");
const logoPage = document.querySelector(".logo-page");
const brandingPage = document.querySelector(".branding-page");
const brandingPageGroup = document.querySelector(".branding-group");
const webDevPageGroup = document.querySelector(".web-dev-group");
const webTemplatesPageGroup = document.querySelector(".web-templates-group");
const uiPageGroup = document.querySelector(".ui-group");
const logoPageGroup = document.querySelector(".logo-group");



priceListItem.forEach(a => {

    a.addEventListener('click', (e) =>{
        e.preventDefault();


        const orderBtn = document.querySelector(".order-btn");
        const priceOptionHighlight = document.querySelector(".price-hightlight");

        console.log(`button: ${orderBtn}`);

        orderBtn.classList.toggle("show");
        priceOptionHighlight.classList.toggle("show");
        a.classList.toggle('show-shadow');

        console.log(`button classes: ${orderBtn.classList}`);

    });
    
});

webDevPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "0%";
    uiPageGroup.style.left = "100%";
    logoPageGroup.style.left = "100%";
    webTemplatesPageGroup.style.left = "100%";
    brandingPageGroup.style.left = "100%";

    if(webDevPageGroup.style.left == "0%"){
        webDevPage.style.backgroundColor = "gold";
        brandingPage.style.backgroundColor = "transparent";
        logoPage.style.backgroundColor = "transparent";
        uiPage.style.backgroundColor = "transparent";
        webTemplatesPage.style.backgroundColor = "transparent";
        uiPage.style.color = "black";
        webTemplatesPage.style.color = "black";
        logoPage.style.color = "black";
        brandingPage.style.color = "black";
        webDevPage.style.color = "white";
    }
});

webTemplatesPage.addEventListener('click', (a) =>{
    a.preventDefault();
    webDevPageGroup.style.left = "100%";
    uiPageGroup.style.left = "100%";
    logoPageGroup.style.left = "100%";
    brandingPageGroup.style.left = "100%";
    webTemplatesPageGroup.style.left = "0%";

    if(webTemplatesPageGroup.style.left == "0%"){
        webTemplatesPage.style.backgroundColor = "gold";
        brandingPage.style.backgroundColor = "transparent";
        logoPage.style.backgroundColor = "transparent";
        uiPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        uiPage.style.color = "black";
        webTemplatesPage.style.color = "white";
        logoPage.style.color = "black";
        brandingPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

uiPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    webTemplatesPageGroup.style.left = "100%";
    logoPageGroup.style.left = "100%";
    brandingPageGroup.style.left = "100%";
    uiPageGroup.style.left = "0%";

    if(uiPageGroup.style.left == "0%"){
        uiPage.style.backgroundColor = "gold";
        brandingPage.style.backgroundColor = "transparent";
        logoPage.style.backgroundColor = "transparent";
        webTemplatesPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        uiPage.style.color = "white";
        webTemplatesPage.style.color = "black";
        logoPage.style.color = "black";
        brandingPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

logoPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    webTemplatesPageGroup.style.left = "100%";
    uiPageGroup.style.left = "100%";
    brandingPageGroup.style.left = "100%";
    logoPageGroup.style.left = "0%";

    if(logoPageGroup.style.left == "0%"){
        logoPage.style.backgroundColor = "gold";
        brandingPage.style.backgroundColor = "transparent";
        uiPage.style.backgroundColor = "transparent";
        webTemplatesPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        logoPage.style.color = "white";
        webTemplatesPage.style.color = "black";
        uiPage.style.color = "black";
        brandingPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

brandingPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    webTemplatesPageGroup.style.left = "100%";
    uiPageGroup.style.left = "100%";
    logoPageGroup.style.left = "100%";
    brandingPageGroup.style.left = "0%";

    if(brandingPageGroup.style.left == "0%"){
        brandingPage.style.backgroundColor = "gold";
        logoPage.style.backgroundColor = "transparent";
        uiPage.style.backgroundColor = "transparent";
        webTemplatesPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        logoPage.style.color = "black";
        webTemplatesPage.style.color = "black";
        uiPage.style.color = "black";
        brandingPage.style.color = "white";
        webDevPage.style.color = "black";
    }
});


