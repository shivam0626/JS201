// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY] HTTP/1.1

const API = "AIzaSyCwksoNWV4yXaM909_kxlcZYtsEDMDJyn8";

const trendingVideos = async() =>{
    try{
        const q = document.getElementById("query").value;

        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=in&key=${API}`
            );
        const {items} = await res.json();
        appendTrending(items);
        // console.log(items)
    }
    catch(err){
        console.log(err);
    }
};

let appendTrending = (data) =>{
    let trending = document.getElementById("trending");

    data.forEach(({id,snippet:{title,description}}) =>{
        let div = document.createElement("div");
        div.setAttribute("id","trendvideos");

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${id}`;
        iframe.width = "280px";
        iframe.height = "180px";
        iframe.allow  = "fullscreen";

        let title1 = document.createElement("h4");
        title1.innerText = title;
        title1.setAttribute("class","title");

        div.append(iframe,title1);
        trending.append(div);


    });
}
trendingVideos();
const SearchVideos = async() =>{
    try{
        const q = document.getElementById("query").value;

        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`
            );
        const {items} = await res.json();
        append(items);
        // console.log(items)
    }
    catch(err){
        console.log(err);
    }
};

const append = (data) => {
    let trending = document.getElementById("trending");
    trending.innerHTML = null;

    let video = JSON.parse(localStorage.getItem("youtubevideo")) || [];

    let results = document.getElementById("results");
    results.innerHTML = null;
    data.forEach(({id:{videoId},snippet:{title,description,thumbnails:{medium:{url}}}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","thumbdiv");

        let thumb = document.createElement("img");
        thumb.src = url;
        thumb.setAttribute("class","thumb");

        let h3 = document.createElement("h4");
        h3.innerText = title;

        div.append(thumb,h3);
        results.append(div);

        let data ={
            title,
            videoId,
            description,
        }

        div.onclick = () =>{
            ShowVideo(data);
            console.log(data);

        } 
    });
};

const ShowVideo = (video) => {
    localStorage.setItem("youtubevideo",JSON.stringify(video));
    window.location.href = "video.html";
};