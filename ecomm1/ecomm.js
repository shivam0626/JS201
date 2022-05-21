var productArr = JSON.parse(localStorage.getItem("Products"))||[];

function myFunction(event){
    event.preventDefault();
    let form = document.getElementById("form");

    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.value;

    var pro1 = new products(name,category,image,price,gender,sold);
    // console.log(pro1);
    productArr.push(pro1);
    // console.log(productArr);
    localStorage.setItem("Products",JSON.stringify(productArr));
    window.location.reload();

}

function products(n,c,i,p,g,s){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
    this.sold  = s;
}