function product_append(el){
    let pname = document.createElement("h3");
    pname.innerText= el.pname;
    
    let str = "";
    for(let i = 0; i< pname.innerText.length ; i++){
        if(i <= 25){
            str += pname.innerText[i];
        }else{
            str += "....";
            break;
        } 
    }
    pname.innerText = str;

    let price = document.createElement("p");
    price.innerHTML = el.price;

    let img = document.createElement("img");
    img.src = el.img;

    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerHTML = "₹ Buy Now";
    btn2.innerHTML = "Remove";

    btn2.addEventListener('click', function(){
        remove_from_cart(el);
    })


    let div2 = document.createElement("div");
    div2.append(btn1, btn2);
    div2.setAttribute("id", "box_btn");


    let div = document.createElement("div");
    let box_keeper = document.createElement("div");
    

    div.setAttribute("class", "box");
    div.setAttribute("onclick", "product_info(event)");

    div.append(img,pname,price);
    box_keeper.append(div,div2);

    box_keeper.setAttribute("id", "box_keeper_div");

    document.querySelector("#container").append(box_keeper);
}

let details = JSON.parse(localStorage.getItem('cart_keeper'));
let user_logs = JSON.parse(localStorage.getItem('user_log'));

let user = "user" + user_logs[0][2];

function product_append_master(){

        let count = 0;

        for(let key in details){
            
            if(key == user){
                count++;

                if(details[key].length == 0){
                    count++;
                }
                else{

                    details[key].forEach(el =>{
                        product_append(el);
                    });

                }
              
            }
        
        }
        
        if(count == 0 || count == 2){
            let no_cart = document.querySelector(".no_carts");
            no_cart.style.display = "flex";
        }
    
}

product_append_master();

function remove_from_cart(el){

    let arr;
    
    for(let key in details){
        if(key == user){
            for(let i = 0; i<details[key].length;i++){
                    let obj = details[key][i];

                        if(obj.pname == el.pname){

                                if(obj.price == el.price){

                                    if(obj.img == el.img){
                                        let index = details[key].indexOf(obj);

                                        arr = details[key].filter((el,i) =>{
                                            if(i !== index){
                                                return el;
                                            }
                                        });
                                    }
                                }
                        }

            }

            details[key] = arr;
        }
    } 

    localStorage.setItem('cart_keeper', JSON.stringify(details));
    window.location.reload();
}


function admin_user(){
    let new_pentry = document.querySelector('#product_ent');

    if(checker[0][0] == 'admin@page_admin.com' && checker[0][1] == '@dmin'){
        
        new_pentry.style.display = "block";
    }
    else{
        new_pentry.style.display = "none";
    }
}

admin_user();