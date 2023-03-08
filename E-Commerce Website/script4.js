function product_info_append(){

    let info_arr = JSON.parse(localStorage.getItem("info_page"));
    
    document.querySelector(".pimg").src = info_arr[0][0];
    
    
    let p_det = JSON.parse(localStorage.getItem("product_details"));

    let p_info = info_arr[0][1];

    for(let i = 0; i<p_det.length ; i++){
        let obj = p_det[i];
        let br = 0;

        for(let key in obj){
            let p_n = obj.pname;
            let count = 0;

            for(let k = 0; k<25 ; k++){

                if( p_n[k] == p_info[k] ){
                    continue;
                }
                else{
                    count++;
                }
            }

            if(count == 0){
                p_info = p_n;
                br++;
                break;
            }
        }

        if(br !== 0){
            break;
        }
    }

    document.querySelector(".p_name").innerHTML = p_info;
    document.querySelector('.price').innerHTML = info_arr[0][2];
}

product_info_append();


function add_to_cart(){
    
    let user_log_arr = JSON.parse(localStorage.getItem('user_log'));
    
    if(user_log_arr == null || user_log_arr.length == 0){
        window.location.href = 'sign_in_page.html';
    }
    else{

     let User = "user" + user_log_arr[0][2];
    console.log(User);
    
    let arr = [];
    let child_arr = {};

    let product = document.querySelector(".p_info_container");

    let img = document.querySelector('.pimg').src;
    let pro_name = product.children[0].innerHTML;
    let pro_price = product.children[2].innerHTML;
    
    child_arr.pname = pro_name;
    child_arr.price = pro_price;
    child_arr.img = img;

    let cart = localStorage.getItem('cart_keeper');

    if(cart == null){

        cart = {};
        arr.push(child_arr);
        cart[User] = arr;

    }
    else{
        cart = JSON.parse(cart);

        for(let key in cart){
            if(cart[User] == undefined){
                arr.push(child_arr);
                cart[User] = arr;
            }
            else{
                if(key == User){
                    cart[User].push(child_arr);
                }
            }
      }
    } 

    localStorage.setItem('cart_keeper', JSON.stringify(cart));

    }
   
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



