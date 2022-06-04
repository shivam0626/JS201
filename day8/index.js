// https://api.themoviedb.org/3/search/movie?api_key=fb1b7badb04b086df9d0465c1620f3b9&language=en-US&page=1&query=thor
let movies_div = document.getElementById('movies');

async function searchMovies(query){
    try{
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=6f05b1d2&s=${query}`;
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.results);
        return data.Search;
    }
    catch(err){
        console.log(err);
    }
}
function appendMovies(movies){

    movies_div.innerHTML =null;

    if(movies===undefined){
        return false;
    }
    movies.forEach(function(el){
        let p = document.createElement('p');
        p.innerText = el.Title;
       
        p.addEventListener("click",function(){
            showMoviesDetails(el);
        });
        movies_div.append(p);
    });
}

async function main(){
    let query = document.getElementById("query").value;

    let response = searchMovies(query); // returning a promise
    let data = await response;
    console.log(data);

    appendMovies(data);
}

let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func();
    },delay);
}

let movie_details = document.getElementById("movies_div");

function showMoviesDetails(el){
    
  movie_details.innerHTML=null;

    let poster =document.createElement("img");
    poster.src = el.Poster;

    let name = document.createElement("h3");
    name.innerText = el.Title;

    let year = document.createElement("p");
    year.innerText = "Release date: "+el.Year;
    
    let type = document.createElement("p");
    type.innerText = "Ratings: " + el.Type;

    movie_details.append(poster,name,year,type);
    // .append(box);
}
