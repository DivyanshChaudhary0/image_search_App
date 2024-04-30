let main = document.querySelector("#main");
const accesskey = "3jdaS2vVtx7xSoae3enwDiCYaxP7aus9TC0z6-wiaTk";
const form = document.querySelector("form");
const input = document.querySelector("input");
const showMore = document.querySelector(".showMore");
const showMoreBtn = document.querySelector(".showMore button");
const h1 = document.querySelector("#header h1");


let page = 1;

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(input.value);
    main.innerHTML = "";
    searchImages(input.value)
})

showMoreBtn.addEventListener("click",function(e){
    page++;
    searchImages(input.value);
})

h1.addEventListener("click",function(){
    main.innerHTML = "";
    input.value = "";
})

async function searchImages(inputValue){
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accesskey}`;
    const res = await fetch(`${url}`);
    const data = await res.json();
    showMore.style.display = "block";
    data.results.map(function(value){
        let card = document.createElement("div");
        card.classList.add("card");
        let a = document.createElement("a");
        a.href = `${value.links.download}`;
        a.target = "_blank"
        let image = document.createElement("img");
        image.src = `${value.urls.small}`;
        a.appendChild(image);
        let para = document.createElement("p");
        para.innerHTML = `${value.alt_description}`;
        card.appendChild(a);
        card.appendChild(para);
        main.appendChild(card);
    })
}