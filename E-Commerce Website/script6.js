

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

    window.onload =  display_avatar();

}

let p_data = localStorage.getItem('product_details');

function table_data(){
       
    if(p_data == null || p_data.length == 0){
        alert('there is no Product data Available');
    }
    else{
        p_data = JSON.parse(p_data);
        
        p_data.forEach((el,i) => {
            append_p_in_table(el,i);
        })
    }
}

table_data();

function append_p_in_table(el,i){
    let tbody = document.querySelector('tbody');

    let tr = document.createElement('tr');

    let td1 = document.createElement("td");
    td1.innerText = i + 1;

    let td2 = document.createElement("td");
    td2.innerText = el.pname;

    let td3 = document.createElement("td");
    td3.innerText = el.price;

    let td4 = document.createElement("td");
    let img = document.createElement("img");
    img.src = el.img;

    td4.append(img);
    td4.setAttribute('id','td4');

    let td5 = document.createElement("td");
    td5.innerText = "X";
    td5.setAttribute("class", "delete");
    td5.addEventListener('dblclick', remove_product);

    tr.append(td1,td2,td3,td4,td5);

    tbody.append(tr);
}

function remove_product(){
    let index = event.target.parentNode.children[0].innerHTML - 1;
    
    let new_data = p_data.filter((el,i) => {
        if(i !== index){
            return el;
        }
    }) 

    localStorage.setItem('product_details', JSON.stringify(new_data));

    window.location.reload();
}

function show_newp_entry(){
    let entry = document.querySelector('#entry');
    entry.style.display = 'block';

    let pro_data = document.querySelector('#table');
    pro_data.style.display = 'none';

}

function show_table(){
    let entry = document.querySelector('#entry');
    entry.style.display = 'none';

    let pro_data = document.querySelector('#table');
    pro_data.style.display = 'flex';

}