var email= document.getElementByld('Email');
var password= document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor= white;
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#accc";
});
password.addEventListener('focus',()=>{
   password.style.borderColor= white;
});

password.addEventListener('blur',()=>){
    password.style.borderColor = "#accc";
}
