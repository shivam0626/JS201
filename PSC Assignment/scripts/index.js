function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web ${b}`;
}

function storeData(e){
    e.preventDefault();
    let form = document.getElementById("student_data");
    let name = form.name.value;
    let course  = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(name,course,unit,image,batch)

    let data = JSON.parse(localStorage.getItem("students")) ||[];

    data.push(s1);

    localStorage.setItem("students",JSON.stringify(data));
    window.location.reload();

    console.log(s1);
}
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
    console.log(obj);

    let box = document.getElementById("batch_info");
    for(key in obj){
        let b_name = document.createElement("div");
        b_name.innerText = `${key}-${obj[key]} |`;

        box.append(b_name);
    }
   
}
calculate();