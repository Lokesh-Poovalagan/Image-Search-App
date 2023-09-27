const accesskey = "aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImage(){
    inputData = inputE1.value;
    const url= `http://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`   
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    if(page===1){
        searchResults.innerHTML=""   
    }
    results.map((result) => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alr = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.innerHTML
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++
    if(page>1){
        if(searchResults.innerHTML!=="")
        showMore.style.display="block"
    }

}

formE1.addEventListener("submit",(event) => {
    event.preventDefault()
    page = 1;
    searchImage()
})

showMore.addEventListener("click",(event) => {
    searchImage()
})