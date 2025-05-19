const priceListItem = document.querySelectorAll(".price-list");
const allLinks = [...document.getElementsByTagName("a")]; //converts to array so the forEach method can be used on it.

const webDevPage = document.querySelector(".web-dev-page");
const landingPage = document.querySelector(".landing-page");
const copywritingPage = document.querySelector(".copywriting-page");
const webPage = document.querySelector(".web-page");
const contentWritingPage = document.querySelector(".content-writing-page");
const webCopyPage = document.querySelector(".web-copy-page");
const webCopyPageGroup = document.querySelector(".web-copy-group");
const webDevPageGroup = document.querySelector(".web-dev-group");
const landingPageGroup = document.querySelector(".landing-group");
const copywritingPageGroup = document.querySelector(".copywriting-group");
const contentWritingPageGroup = document.querySelector(".content-writing-group");
const contactItemName = document.querySelectorAll(".item-name");

console.log(allLinks);

allLinks.forEach(a => {
    a.addEventListener('click', (e) =>{
        if (a.getAttribute("href") === "#"){
            e.preventDefault();
        }
        // This event listener targets all links in the document and prevents the default jump for anchor tags set to href="#".
    });
});
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
    copywritingPageGroup.style.left = "100%";
    contentWritingPageGroup.style.left = "100%";
    landingPageGroup.style.left = "100%";
    webCopyPageGroup.style.left = "100%";

    if(webDevPageGroup.style.left == "0%"){
        webDevPage.style.backgroundColor = "gold";
        webCopyPage.style.backgroundColor = "transparent";
        contentWritingPage.style.backgroundColor = "transparent";
        copywritingPage.style.backgroundColor = "transparent";
        landingPage.style.backgroundColor = "transparent";
        copywritingPage.style.color = "black";
        landingPage.style.color = "black";
        contentWritingPage.style.color = "black";
        webCopyPage.style.color = "black";
        webDevPage.style.color = "white";
    }
});

landingPage.addEventListener('click', (a) =>{
    a.preventDefault();
    webDevPageGroup.style.left = "100%";
    copywritingPageGroup.style.left = "100%";
    contentWritingPageGroup.style.left = "100%";
    webCopyPageGroup.style.left = "100%";
    landingPageGroup.style.left = "0%";

    if(landingPageGroup.style.left == "0%"){
        landingPage.style.backgroundColor = "gold";
        webCopyPage.style.backgroundColor = "transparent";
        contentWritingPage.style.backgroundColor = "transparent";
        copywritingPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        copywritingPage.style.color = "black";
        landingPage.style.color = "white";
        contentWritingPage.style.color = "black";
        webCopyPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

copywritingPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    landingPageGroup.style.left = "100%";
    contentWritingPageGroup.style.left = "100%";
    webCopyPageGroup.style.left = "100%";
    copywritingPageGroup.style.left = "0%";

    if(copywritingPageGroup.style.left == "0%"){
        copywritingPage.style.backgroundColor = "gold";
        webCopyPage.style.backgroundColor = "transparent";
        contentWritingPage.style.backgroundColor = "transparent";
        landingPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        copywritingPage.style.color = "white";
        landingPage.style.color = "black";
        contentWritingPage.style.color = "black";
        webCopyPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

contentWritingPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    landingPageGroup.style.left = "100%";
    copywritingPageGroup.style.left = "100%";
    webCopyPageGroup.style.left = "100%";
    contentWritingPageGroup.style.left = "0%";

    if(contentWritingPageGroup.style.left == "0%"){
        contentWritingPage.style.backgroundColor = "gold";
        webCopyPage.style.backgroundColor = "transparent";
        copywritingPage.style.backgroundColor = "transparent";
        landingPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        contentWritingPage.style.color = "white";
        landingPage.style.color = "black";
        copywritingPage.style.color = "black";
        webCopyPage.style.color = "black";
        webDevPage.style.color = "black";
    }
});

webCopyPage.addEventListener('click', (e) =>{
    e.preventDefault();
    webDevPageGroup.style.left = "100%";
    landingPageGroup.style.left = "100%";
    copywritingPageGroup.style.left = "100%";
    contentWritingPageGroup.style.left = "100%";
    webCopyPageGroup.style.left = "0%";

    if(webCopyPageGroup.style.left == "0%"){
        webCopyPage.style.backgroundColor = "gold";
        contentWritingPage.style.backgroundColor = "transparent";
        copywritingPage.style.backgroundColor = "transparent";
        landingPage.style.backgroundColor = "transparent";
        webDevPage.style.backgroundColor = "transparent";
        contentWritingPage.style.color = "black";
        landingPage.style.color = "black";
        copywritingPage.style.color = "black";
        webCopyPage.style.color = "white";
        webDevPage.style.color = "black";
    }
});


