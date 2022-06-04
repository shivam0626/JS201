//const url = "https://reqres.in/api/users";

// fetch(url).then(function(res){
//    return res.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })

// async function getData(){
//     try{
//         let res = await fetch(url);
//         let users = await res.json();
//         console.log(users.data);
//         append(users.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getData();

// function append(data){
//     let container = document.getElementById("container");
//     data.forEach(function(el){
//         let img = document.createElement("img");
//         img.src = el.avatar;

//         let h2 = document.createElement("h2");
//         h2.innerText = el.first_name;

//         let p = document.createElement("p");
//         p.innerText = el.email;

//         let div = document.createElement("div");

//         div.append(img,h2,p);
//         container.append(div);
//     })
// };
//const url = "https://fakestoreapi.com/products";

async function getData(){
    try{
        let res = await fetch('https://fakestoreapi.com/products');
        let products = await res.json();
        console.log(products);
        append(products);
    }
    catch(err){
        console.log(err);
    }
}

function append(data){
        let container = document.getElementById("container");
        data.forEach(function(el){
            let img = document.createElement("img");
            img.src = el.image;
    
            let h2 = document.createElement("h2");
            h2.innerText = el.title;
    
            let p = document.createElement("p");
            p.innerText = el.description;
    
            let div = document.createElement("div");
    
            div.append(img,h2,p);
            container.append(div);
        })
    };