// Constantes para conectar com a API
const URL_BASE_MOVIES = "https://api.themoviedb.org/3/movie"
const URL_IMG = "https://image.tmdb.org/t/p/w500"
const API_KEY = "?api_key=384e699a7a014f9171fafdb3309a3aef"


// Elementos HTML da página

// variáveis
const searchInput = document.querySelector("#search")
const searchContainer = document.querySelector(".search-container")
let popularCarousel = document.querySelector("#populares")
let top_rated = document.querySelector("#top_rated")

function goLeft(id){
    let carousel = document.querySelector(`#${id}`)

    carousel.scrollLeft += 200

    hideCarouselRightButton()
}

function goRight(id){
    let carousel = document.querySelector(`#${id}`)

    carousel.scrollLeft += 200

    hideCarouselRightButton(carousel)
}

function hideCarouselRightButton(carousel){
    if(carousel.scrollLeft === 0){
        carousel.previousElementSibling.style.display = "none"
    }
}


window.addEventListener("scroll", showNavOnScroll)
document.addEventListener("click", hideSearch)

function showSearch(){
    searchContainer.style.border = "1px solid white"  
    searchInput.style.width = '25rem'
}

function hideSearch(event){
    if(!searchContainer.contains(event.target)){
        searchInput.value = ""
        searchContainer.style.border = "none"
        searchInput.style.width = "0"
    }

}










function showNavOnScroll(){
    let navigation = document.querySelector("#navigation")

    if (scrollY > 0){
        navigation.classList.add("scroll")
    }else{
        navigation.classList.remove("scroll")
    }
}























function getMovies(category) {
    const reqAPI = fetch(`${URL_BASE_MOVIES}${category}${API_KEY}`)
        .then(res => res.json())
        .then(data => mostrarPoster(data.results, category))
}

function mostrarPoster(listaFilmes, category) {
    listaFilmes.forEach(filme => {
        let novoPoster = document.createElement('img')
        novoPoster.src = `${URL_IMG}${filme.poster_path}`
        
        if (category === "/popular"){
            popularCarousel.appendChild(novoPoster)
        }
        else if(category === "/top_rated"){
            top_rated.appendChild(novoPoster)
        }

    });
}


getMovies("/popular")
getMovies("/top_rated")