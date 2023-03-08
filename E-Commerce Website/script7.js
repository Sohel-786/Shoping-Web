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
    price.innerHTML = '<span>₹ </span>' + el.price;

    let img = document.createElement("img");
    img.src = el.img;

    let div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("onclick", "product_info(event)");

    div.append(img,pname,price);

    document.querySelector("#container").append(div);

    let heading = document.querySelector('#heading_top');
    heading.innerHTML = el.p_cat;

    let title = document.querySelector('title');
    let str2 = "";

        for(let i =0; i<el.p_cat.length; i++){

            if(i == 0){
                str2 = el.p_cat[i].toUpperCase();
            }
            else{
                str2 += el.p_cat[i];
            } 
        }

    title.innerHTML  = str2;
}

function product_append_master(){
    let details = JSON.parse(localStorage.getItem('show_category'));

    details.forEach(el => {
        product_append(el);
    });
}

product_append_master();


function admin_user(){
    let new_pentry = document.querySelector('#product_ent');

    if(checker == null || checker.length == 0){

    }
    else{
        if(checker[0][0] == 'admin@page_admin.com' && checker[0][1] == '@dmin'){
        
            new_pentry.style.display = "block";
        }
        else{
            new_pentry.style.display = "none";
        }
    }
 
}

admin_user();


