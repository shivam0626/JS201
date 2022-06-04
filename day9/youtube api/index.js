// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]';

const API_key = "AIzaSyCwksoNWV4yXaM909_kxlcZYtsEDMDJyn8";

const getData =async() =>{
    try{
        let q = document.getElementById("query").value;

        let res  = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API_key}`);
        let {items} = await res.json();
        console.log(items);
        appendData(items);
       
        
    }
    catch(err){
        console.log(err);
    }
}

const appendData = (data) =>{
    let show_vidoes = document.getElementById("append_videos");
    // show_vidoes.innerHTML = null;
    data.forEach(({id:{videoId},snippet:{title}}) =>{
        let div = document.createElement("div");

        let iframe  = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.height ="60%";
        iframe.width = "110%";
        iframe.allow = "fullscreen";

        let name = document.createElement("h4");
        name.innerText = title;

        div.append(iframe,title);
        show_vidoes.append(div);
    })
    
}