let data = document.querySelector("form");

function signup(){
    let name  = data.name.value;
    let email = data.email.value;
    let bdate = data.bdate.value;
    let phone = data.phone.value;
    let password  = data.password.value;
    let user = 1;


    let signup_data = {
        name, 
        email,
        bdate,
        phone,
        password,
        user:user
    };

    let signup_arr;

    signup_arr = localStorage.getItem('signup');

    if(signup_arr == null){
        signup_arr = [];
    }
    else{
        signup_arr = JSON.parse(signup_arr);
        signup_data.user = signup_arr.length + 1;
    }

    signup_arr.push(signup_data);
    localStorage.setItem('signup', JSON.stringify(signup_arr));

    clearInput();

    window.location.href = 'sign_in_page.html';

}


function key_press(e){
    if(e.key == "Enter"){
        sign_in();
    }
}

 function sign_in(){
    let emailphone = data.emailphone.value;
    let pass = data.password.value;

    console.log(typeof pass);
    let signin_arr;

    signin_arr = localStorage.getItem('signup');

    if(signin_arr == null){
        alert(`There is no User Info available in Server plase Sign up first`);
    }
    else{
        signin_arr = JSON.parse(signin_arr);
    

    for(let i = 0; i < signin_arr.length ; i++){

        let obj = signin_arr[i];

        console.log(typeof obj.password)
        if(obj.email == emailphone || obj.phone == emailphone ){
         
            if(obj.password == pass.toString()){
            
                
                let user_log = localStorage.getItem('user_log');
                let current_user = [];

                if(user_log == null){
                    user_log = [];
                }
                else{
                    user_log = JSON.parse(user_log);
                    user_log.pop();
                }
               
                let isLogin = obj.user;

                current_user.push(emailphone);
                current_user.push(pass);
                current_user.push(isLogin);

                user_log.push(current_user);
                localStorage.setItem('user_log', JSON.stringify(user_log));

                window.location.href = 'landing_page.html';
                break;    
            }
            else{
                    alert(`Please Check the Password`);
            }
        }
        else{
            if(i == signin_arr.length - 1){
                alert(`Please Check the Email or Phone Number`);
                }
            }
        }
    }
 }

 let checker = JSON.parse(localStorage.getItem('user_log'));

 if(checker !== null && checker !== 0){

    function display_avatar(){
        let avatar = JSON.parse(localStorage.getItem('user_log'));
        
        let ph_e_address;
        let pass;
        
        ph_e_address = avatar[0][0];
        pass = avatar[0][1];
      
        let ans = get_the_current_user(ph_e_address,pass);
        display_avatar_info(ans);

    }

    function get_the_current_user(first,second){
    
        let arr;
        arr = JSON.parse(localStorage.getItem('signup'));
        let obj;

        arr.forEach(el => {
            
            let email = el.email;
            let ph_no = el.phone;
            let password = el.password;

            for(let key in el){
                if((email == first || ph_no == first) && password == second){
                    obj = el;
                    break;
                }
            }
        });

        return obj;
    }
    
    function display_avatar_info(ans){

        document.querySelector(".avatar_h").innerHTML = "Hi, " + ans.name;
    } 

    hide_login_btn();

    window.onload =  display_avatar();

}

    function hide_login_btn(){
        let login = document.querySelector(".login_section");
        login.style.display = "none";

        let logout = document.querySelector("#logout_section");
        logout.style.display = "block";
    }

    function logout(){

        localStorage.removeItem('user_log');
        window.location.href = 'sign_in_page.html';
    }

 function clearInput(){
    let input = document.querySelectorAll('input');
    for(let i = 0; i< input.length ; i++){
        input[i].value = "";
    }
}

function display_in_option(){
    let options = document.querySelector(".display_signup");
    options.style.display = 'block';
}

function display_none(){
    let options = document.querySelector(".display_signup");
    options.style.display = 'none'; 
}



    var image = [
                    "/assets/slide show/first.jpeg",
                    "/assets/slide show/img1.jpg",
                    "/assets/slide show/img2.jpg",
                    "/assets/slide show/img3.jpg",
                    "/assets/slide show/img4.png",                    
                    "/assets/slide show/img5.jpg"                    
                ]
    var time = 2500;
    var iteration = 0;
    let slide;

    function changeimg(){
        document.querySelector(".slide").src = image[iteration];
        if(iteration < image.length-1){
            iteration++;
        }
        else{
            iteration = 0;
        }

        slide = setTimeout(`changeimg()`, time);
    }

changeimg();


function stop_slide(){
    clearTimeout(slide);
}

function start_slide(){
    slide = setTimeout(`changeimg()`, time);
}


function right_shift(){
    stop_slide();

    if(iteration < image.length-1){
        iteration++;
        console.log(iteration)
    }
    else{
        iteration = 0;
        console.log(iteration)
    }
    document.querySelector(".slide").src = image[iteration];
}

function left_shift(){
    stop_slide();

    if(iteration <= image.length-1 && iteration > 0){
        iteration--;
    }
    else{
        iteration = image.length-1;
    }
    document.querySelector(".slide").src = image[iteration];
}

function submit_product(){
    let pname = data.pname.value;
    let price = data.price.value;
    let img = data.image.value;
    let p_cat = data.p_cat.value;

    // let product = {
    //     pname,
    //     price,
    //     img,
    //     p_cat
    // }

    class Product {
        constructor(name,p,url,category){
            this.pname = name;
            this.price = p;
            this.img = url;
            this.p_cat = category;
        }
    }

    let product  = new Product(pname,price,img,p_cat);


    let pdetail = localStorage.getItem('product_details');

    if(pdetail == null){
        pdetail = [];
    }
    else{
        pdetail = JSON.parse(pdetail);
    }

    pdetail.push(product);

    localStorage.setItem('product_details', JSON.stringify(pdetail));

    clearInput();
    data.p_cat.value = "";
    data.pname.value = "";
    window.location.reload();

}

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
}

function product_append_master(){
    let details = JSON.parse(localStorage.getItem('product_details'));

    details.forEach(el => {
        product_append(el);
    });
}

product_append_master();


function product_info(e){
    let pname = e.target.parentNode.children;
    let info;
    info = localStorage.getItem('info_page');
    let arr = [];
    if(info == null){
        info = [];
    }
    else{
        info = JSON.parse(info);
    }    

    info.pop();

    for(let i = 0; i<pname.length; i++){
        if(i == 0){
            arr.push(pname[i].src);
        }
        else{
            arr.push(pname[i].innerHTML)
        }
    }

    info.push(arr);

    localStorage.setItem('info_page', JSON.stringify(info));
    window.location.href = 'Product_info.html';
}


 function redirect_to_carts(){
    if(checker == null || checker.length == 0){
        window.location.href = 'sign_in_page.html';
    }
    else{   
        window.location.href = 'Carts.html';
    }
 }


 function avatar_extras(){

    if(checker == null || checker.length == 0){
        
    }
    else{
             let a_extra = document.querySelector("#avatar_extras");
             a_extra.style.display = "block";
    }
 }

 function hide_a_extras(){
    
        let a_extra = document.querySelector("#avatar_extras");
        a_extra.style.display = "none";
  
 }

 function product_entry_page(){
    window.location.href = 'product_entry_page.html';
 }

 function show_category(e){
    let cat = e.target.innerHTML;
    cat = cat.toLowerCase();
    console.log(cat);
    
    let product_det = localStorage.getItem('product_details');

    if(product_det == null || product_det.length == 0){
        alert('There is no Product Available in this Category yet');
    }
    else{

        product_det = JSON.parse(product_det);

        let new_pro_det = localStorage.getItem("show_category");

        if(new_pro_det == null){
            new_pro_det = [];
        }
        else{
            new_pro_det = JSON.parse(new_pro_det);
            new_pro_det = [];
        }

        console.log(new_pro_det);

       new_pro_det = product_det.filter(el => {
            for(let key in el){
                if(el.p_cat == cat){
                    return el;
                }
            }
        });
        
        localStorage.setItem('show_category', JSON.stringify(new_pro_det));

        window.location.href = 'showing-products.html';
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

window.onload = admin_user();


