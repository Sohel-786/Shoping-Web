var image_signup = [
    "/assets/Sign_up_image.png",
    "/assets/Sign_up_image2.png",
    "/assets/Sign_up_image3.png"                   
];

var iteration_signup = 0;
let slide_signup;
let time2 = 3000;

function changeimg_signup(){
document.querySelector(".signup_slide").src = image_signup[iteration_signup];
if(iteration_signup < image_signup.length-1){
    iteration_signup++;
}
else{
    iteration_signup = 0;
}

slide_signup = setTimeout(`changeimg_signup()`, time2);
}

changeimg_signup();
