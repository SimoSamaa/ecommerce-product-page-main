document.querySelectorAll("img").forEach((a) => a.setAttribute("loading", "lazy"));
// nav bar list
const listes = document.querySelectorAll(".listes li");

listes.forEach((myListes) => {
    myListes.onclick = function () {
        listes.forEach(myListes => myListes.classList.remove("border-bottom"));
        myListes.classList.add("border-bottom");
    };
});

// end-bar shop
const shop = document.querySelector(".shop"),
    cart = document.querySelector(".cart");

document.addEventListener("DOMContentLoaded", () => {

    const open = () => {
        shop.classList.add("active-shop");
        cart.classList.add("active-cart");
    };

    const close = () => {
        shop.classList.remove("active-shop");
        cart.classList.remove("active-cart");
    };

    shop.onclick = () => {
        if (!cart.classList.contains("active-cart")) {
            open();
        } else close();
    };

    document.body.onclick = (e) => {
        let a = shop.contains(e.target);
        let b = cart.contains(e.target);

        if (!a && !b) {
            close();
        };
    };
});

// close-nav-bar
const closeNav = document.querySelector(".listes");

function closeNavbar() {

    closeNav.classList.remove("menu-list");

    backDrop.remove();

};

// open-nav-bar
let backDrop = document.createElement("div");

function openNavbar() {

    closeNav.classList.add("menu-list");

    backDrop.className = "back-drop";
    document.body.appendChild(backDrop);

};

// close backdrop
backDrop.addEventListener("click", () => {

    backDrop.remove();

    closeNav.classList.remove("menu-list");

});

//change slection img
const secondaryImg = document.querySelectorAll(".secondary-img .secondary"),
    secondaryImage = document.querySelectorAll(".secondary img"),
    mainImg = document.querySelector(".main-img img");

secondaryImg.forEach((secImg) => {
    secImg.onclick = function () {
        secondaryImg.forEach((secImg) => secImg.classList.remove("active-img"));
        secImg.classList.add("active-img");
    };
});

secondaryImage.forEach((secOpacity) => {
    secOpacity.onclick = function () {
        secondaryImage.forEach((secOpacity) => secOpacity.classList.remove("img-opacity"));
        secOpacity.classList.add("img-opacity");

        // img change to next
        mainImg.src = secOpacity.src;
    };
});

// main image light box
const mainImg2 = document.querySelectorAll(".main-img img");

let lightBox = document.createElement("div"),
    i = 0,
    currentImg = [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg"
    ];

lightBox.className = "light-box";

mainImg2.forEach((mainImgLightBox) => {

    mainImgLightBox.addEventListener("click", () => {

        document.body.appendChild(lightBox);
        lightBox.innerHTML =
            `<div class="ligth-box__container">
                <div class="close-light-box">
                    <svg fill="currentColor" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="ligth-box__main-img">
                    <button class="btn btn-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <img src="${mainImgLightBox.src}" id="main-img" type="image/jpeg"></img>
                    <button class="btn btn-next">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                    </button>
                </div>
                <div class="light-box__img-second">
                    <div class="light-box__border"><img class="light-box__opacity" src="img/image-product-1.jpg" type="image/jpeg"></div>
                    <div><img src="img/image-product-2.jpg" type="image/jpeg"></div>
                    <div><img src="img/image-product-3.jpg" type="image/jpeg"></div>
                    <div><img src="img/image-product-4.jpg" type="image/jpeg"></div>
                </div>
            </div>`;

        let lightMain = document.querySelector(".ligth-box__main-img #main-img"),
            closeLightBox = document.querySelector(".close-light-box"),
            lightBoxImgSecond = document.querySelectorAll(".light-box__img-second > div img"),
            lightBoxDivSecond = document.querySelectorAll(".light-box__img-second > div"),
            lightBox__btnPrev = document.querySelector(".btn-prev"),
            lightBox__btnNext = document.querySelector(".btn-next");

        // close light box
        lightBox.onclick = function () {
            lightBox.remove();
        };

        closeLightBox.onclick = function () {
            lightBox.remove();
        }

        document.querySelector(".ligth-box__container").onclick = function (e) {
            e.stopPropagation();
        };

        // click change style images
        lightBoxImgSecond.forEach((lightBoxImgOpacity) => {
            lightBoxImgOpacity.addEventListener("click", () => {
                lightBoxImgSecond.forEach((lightBoxImgOpacity) => lightBoxImgOpacity.classList.remove("light-box__opacity"));
                lightBoxImgOpacity.classList.add("light-box__opacity");

                // click change main image
                lightMain.src = lightBoxImgOpacity.src;

            });
        });

        lightBoxDivSecond.forEach((lightBoxDivBorder) => {
            lightBoxDivBorder.addEventListener("click", () => {
                lightBoxDivSecond.forEach((lightBoxDivBorder) => lightBoxDivBorder.classList.remove("light-box__border"));
                lightBoxDivBorder.classList.add("light-box__border");
            });
        });

        // button prev and next
        function buttonNext() {
            if (i >= currentImg.length - 1) i = -1;
            i++;
            return setImages();
        };
        lightBox__btnNext.addEventListener("click", buttonNext);

        function buttonPrev() {
            if (i <= 0) i = currentImg.length;
            --i;
            return setImages();
        };
        lightBox__btnPrev.addEventListener("click", buttonPrev);


        function setImages() {
            lightMain.setAttribute("src", "img/" + currentImg[i]);
        };

        window.onkeydown = (e) => {
            if (e.key === "ArrowRight") {
                return buttonNext();
            } else if (e.key === "ArrowLeft") {
                return buttonPrev();
            };
        };
    });
});

//add product to cart
const inputNumber = document.querySelector("input[type='number']"),
    inputContent = document.querySelector(".input-content"),
    btnMinus = document.querySelector(".btn-minus"),
    btnPlus = document.querySelector(".btn-plus"),
    btnAddcart = document.querySelector(".btn-check-out"),
    price = document.querySelector(".price strong bold");

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
});

inputContent.addEventListener("click", () => {
    inputContent.style.outline =
        "solid 3px var(--orange)"
})

let num = 1;

btnPlus.addEventListener("click", () => {
    inputValue = inputNumber.value = ++num;
    price.textContent = parseInt(inputValue * 125);
});

btnMinus.addEventListener("click", () => {
    if (inputNumber.value > 1) {
        inputNumber.value = --num;
        price.textContent = parseInt(price.textContent - 125);
    } else alert("please increas the number");
});

let numOfPr = 0;

function addItems() {
    let productAdd = document.createElement("div"),
        shop = document.querySelector(".shop");
    productAdd.className = "product-add";

    document.querySelector(".cart-content").prepend(productAdd);
    document.documentElement.style.setProperty("--mess", "string");
    for (let i = 0; i <= numOfPr; i++) {
        productAdd.innerHTML =
            `<div class="product-box">
                <div class="product-box-img">
                    <img src="img/image-product-1.jpg" type="image/jpeg"></img>
                </div>
                <div class="product-box-content">
                    <p>autumn limited</p>
                    <div>$125.00 &times
                        <span>${inputNumber.value}</span> 
                        <span>
                            <strong style="color:var(--black);">${price.textContent}.00<strong>
                        <span>
                    </div>
                </div>
                <div class="delete-product-add">
                    <svg width="14" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"></path>
                        </defs>
                    <use fill-rule="nonzero" xlink:href="#a"></use>
                    </svg>
                </div>
            </div>`;

        productAdd.id = `add-${i + 1}`;
        document.querySelector(".delete-product-add").onclick = (e) => {
            productAdd.remove();
            e.stopPropagation();

            let shopNum = shop.dataset.numproduct = --numOfPr;

            if (shopNum == 0) {
                btnAddcart.style.display = "none";
                document.documentElement.style.setProperty("--mess", "");
            };
        };
    };

    shop.dataset.numproduct = ++numOfPr;
    document.documentElement.style.setProperty("--false", "visible");

    btnAddcart.style.display = "block";
};

btnAddcart.style.cssText =
    "box-shadow:none; width:100%; height:56px; display:none; align-self: flex-end;";

function btnNext() {
    if (i >= currentImg.length - 1) i = -1;
    i++;
    return setImg();
}
document.querySelector(".button-next").addEventListener("click", btnNext);

function btnPrev() {
    if (i <= 0) i = currentImg.length;
    --i;
    return setImg();
}
document.querySelector(".button-prev").addEventListener("click", btnPrev);

function setImg() {
    mainImg.setAttribute("src", "img/" + currentImg[i]);
};