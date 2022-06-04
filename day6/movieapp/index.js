// https://www.omdbapi.com/?i=tt3896198&apikey=6f05b1d2&s=${query}
let container = document.getElementById("container");

async function searchMovies(){
    try{
        let query = document.getElementById("search").value;

         // http://www.omdbapi.com/?apikey=[yourkey]&s=
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6f05b1d2&s=${query}`) 
        let data = await res.json();
        let movies = data.Search;
        console.log(movies);
        if(movies===undefined){
            container.innerHTML = null;
            let img = document.createElement('img');
            img.src = "https://wallpaperaccess.com/full/2267932.png";
            img.style.height="400px";
            img.style.width = "1310px";
            container.append(img);
        }
        else{
            append(movies);
        }
       
    }
    catch(err){
        console.log("err:",err);
    }
   
}
function append(data){
    container.innerHTML = null;
    
    data.forEach(function(el){
        let box = document.createElement("div");
        box.setAttribute("class","movies_div")

        let poster =document.createElement("img");
        poster.src = el.Poster;

        let name = document.createElement("h3");
        name.innerText = el.Title;

        let year = document.createElement("p");
        year.innerText = "Year: "+el.Year;
        
        let type = document.createElement("p");
        type.innerText = "Type: " + el.Type;

        box.append(poster,name,year,type);
        container.append(box);
    });
   
}