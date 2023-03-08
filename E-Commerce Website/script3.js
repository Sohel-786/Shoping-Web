var image_signin = [
    "/assets/sign_in_slide/sing_in_img1.jpg",
    "/assets/sign_in_slide/sing_in_img2.jpg",
    "/assets/sign_in_slide/sing_in_img5.jpg",
    "/assets/sign_in_slide/sing_in_img3.avif",
     "/assets/sign_in_slide/sing_in_img4.avif",

     
];

var iteration_signin = 0;
let slide_signin;
let time3 = 4000;

function changeimg_signin(){
document.querySelector(".signup_slide").src = image_signin[iteration_signin];
if(iteration_signin < image_signin.length-1){
    iteration_signin++;
}
else{
    iteration_signin = 0;
}

slide_signin = setTimeout(`changeimg_signin()`, time3);
}

changeimg_signin();
