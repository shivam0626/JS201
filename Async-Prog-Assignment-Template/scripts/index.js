let image_arr = ["https://wallpaperaccess.com/full/13453.jpg","https://wallpaperaccess.com/full/267486.jpg","https://wallpapers-hub.art/wallpaper-images/267490.jpg","https://wallpaper.dog/large/20494158.png","https://wallpapercave.com/wp/wp4110200.jpg"];
//console.log(image_arr);
let i=0;
let images_div = document.getElementById("slideshow");
let image = document.createElement("img");


setInterval(function(){
    if(i===image_arr.length){
        i=0;
    }
    image.src = image_arr[i];
    //console.log(image_arr[i]);
    images_div.append(image);
    i++;

},3000);


function Movies(n,r,p,rt){
    this.name = n;
    this.releaseDate = r;
    this.poster = p;
    this.rating  =rt;
}
let m1 = new Movies("KGF Chapter 2","14-Apr-2022","https://imgshare.info/images/2022/04/14/5a6143e21c641bddefeeb52b9e9f4174.jpg","9.8");
let m2 = new Movies("Attack","01-Apr-2022","https://imgshare.info/images/2022/04/01/924e7004fe691a87a0e537341c96a43a.jpg","7.4");
let m3 = new Movies("Spider-Man No Way Home","05-Jan-2022","https://imgshare.info/images/2022/03/12/6ceef231192c9bb8f0411959646ab2c8.jpg","9.2");
let m4 = new Movies("Bachchhan Pandey","18-Mar-2022","https://imgshare.info/images/2022/04/16/da93a0633feb84a2c0fdb1de33739a60.jpg","7.6");
let m5 = new Movies("Moosa Jatt","01-Oct-2021","https://imgshare.info/images/2021/12/05/dc4fca43bf63292b74efc335ca939d41.jpg","7.7");
let m6 = new Movies("Moonfall","04-Feb-2022","https://imgshare.info/images/2022/02/06/7047d91b9461f813a3cd149a86ca9e85.jpg","5.3");
let m7 = new Movies("American Underdog","25-Dec-2021","https://imgshare.info/images/2022/02/05/c62e08490613baec5d9962fa5261c288.jpg","7.4");
let m8 = new Movies("Catwoman Hunted","01-Feb-2022","https://imgshare.info/images/2022/02/01/7265afd6364210929be8ffc71d7fe5a7.jpg","3.8");
let m9 = new Movies("Ice Age","28-Jan-2022","https://imgshare.info/images/2022/01/30/6463cb1973ee67dec59dd7d7a7d83c20.jpg","4.2");

let Movie_arr = [];
Movie_arr.push(m1,m2,m3,m4,m5,m6,m7,m8,m9);
//console.log(Movie_arr);

localStorage.setItem("movies",JSON.stringify(Movie_arr));


let movie_div = document.getElementById("movies");
window.addEventListener("load",function(){
    display(Movie_arr);
})

function display(Movie_arr){
    Movie_arr.map(function(el){
        let box = document.createElement("div");
        box.setAttribute("id","box");
    
        let name = document. createElement("h4");
        name.innerText = el.name;
        
        let releaseDate = document.createElement("p");
        releaseDate.innerText = "Released on: " +el.releaseDate;
    
        let rating = document.createElement("p");
        rating.innerText  = "IMDb Rating: "+ el.rating + "/10";
    
        let poster = document.createElement("img");
        poster.src  = el.poster;
    
        box.append(poster,name,releaseDate,rating);
        movie_div.append(box);
    
    });
}


function SortLowtoHigh(){

    Movie_arr.sort(function(a,b){
        return a.rating - b.rating;
    });
    
    document.querySelector("#movies").innerHTML ="";
     //console.log(display);
     console.log(Movie_arr);
     display(Movie_arr);
}

function SortHightoLow(){

    Movie_arr.sort(function(a,b){
        return b.rating - a.rating;
    });
    
    document.querySelector("#movies").innerHTML ="";
     //console.log(display);
     console.log(Movie_arr);
     display(Movie_arr);
}