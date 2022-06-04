let video = JSON.parse(localStorage.getItem("youtubevideo")) || [];

console.log(video);
let main_div = document.getElementById("append_video");

let {videoId,title,description} = video;

let show_video = document.createElement("div");
show_video.setAttribute("class","video_div");

let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`;
iframe.width = "700px";
iframe.height = "420px";
iframe.allow = "fullscreen";

let name  = document.createElement("h4");
name.innerText =  title;

let des = document.createElement("p");
des.innerText = description;

show_video.append(iframe,name,des);
main_div.append(show_video);


