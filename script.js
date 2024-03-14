let email = document.getElementById('email');
let senha = document.getElementById('senha');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5f6A"; 
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc"; 
});

senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#4A5f6A";
});
senha.addEventListener('blur',()=>{
    senha.style.borderColor = "#ccc";
});

