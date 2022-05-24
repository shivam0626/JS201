
    let data = JSON.parse(localStorage.getItem("students")) ||[];
    let container = document.getElementById("container");
    data.forEach(function(el,index){
        //console.log(el);
        let div = document.createElement("div");
        div.setAttribute("id","box");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("p");
        name.innerText = "Name: " + el.name;

        let course = document.createElement("p");
        course.innerText = "Course: " + el.course;

        let batch = document.createElement("p");
        batch.innerText = "Batch: " + el.batch;

        let unit = document.createElement("p");
        unit.innerText = "Unit: " + el.unit;
        
        let btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.addEventListener("click",function(){
            remove(el,index);
        })

        div.append(image,name,course,batch,unit,btn);
        container.append(div);
    })
   
function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) ||[];
    let obj={};

    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 0;
        }
        
    }
    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;
    }
    //console.log(obj);

    let box = document.getElementById("batch_info");
    for(key in obj){
        let b_name = document.createElement("div");
        b_name.innerText = `${key}-${obj[key]} |`;

        box.append(b_name);
    }
   
}
let remData = [];
function remove(el,index){
    //console.log(el,index);
    let removed = data.splice(index,1);
    remData.push(removed);

    localStorage.setItem("students",JSON.stringify(data));
    localStorage.setItem("trash",JSON.stringify(remData));
    window.location.reload();
}

calculate();

