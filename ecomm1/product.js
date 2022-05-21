let ProductData = JSON.parse(localStorage.getItem("Products"));
console.log(ProductData);

let length = ProductData.length;
console.log(length);

document.getElementById("counter").innerText = `Total Items: ${length}`;

ProductData.map(function(el,index){
    let container = document.getElementById("container");

    let product = document.createElement("div");
    product.setAttribute("class","product");

    let title = document.createElement("h4");
    title.innerText = el.name;

    let category = document.createElement("p");
    category.innerText = "Category: " + el.category;
    
    let poster = document.createElement("img");
    poster.src = el.image;

    let gender = document.createElement("p");
    gender.innerText = "Ideal for: " + el.gender;

    let price = document.createElement("h5");
    price.innerText = "INR " + el.price;

    let Removebtn = document.createElement("button");
    Removebtn.innerText = "Remove";
    Removebtn.id = "remove";
    Removebtn.addEventListener("click",function(){
        remove(el,index)
    });

    let Soldbtn = document.createElement("button");
    Soldbtn.innerText = "Sold";
    Soldbtn.setAttribute("id","sold");
    if(el.sold == "true"){
        Soldbtn.style.backgroundColor = "Red";
    }
    else{
        Soldbtn.style.backgroundColor = "Green";
    }

    product.append(poster,title,category,gender,price,Soldbtn,Removebtn);
    container.append(product);

});

function remove(el,index){
    console.log(el,index);
    ProductData.splice(index,1);

    localStorage.setItem("Products",JSON.stringify(ProductData));
    window.location.reload();
}