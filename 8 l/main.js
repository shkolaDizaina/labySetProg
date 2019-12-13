const [
    login,
    password,
    repassword,
    mail,
    btn,
] = ['login', 'password', 'repassword', 'mail', 'btn'].map(x => document.getElementById(x)) //прошлись по всем айдишникам и присовили их новым переменным

btn.addEventListener('click' , function(){
    validName();
    validPass();
    validMail();
    validRepass();

})

const validName = () => {
    let name = login.value;
    
    let errore = '';
    if (name.length < 1 || name.length > 50) {
        errore = "логин должно содержать от 1 до 50 символов";
        login.classList.add("isInvalid")
    } else login.classList.add("isValid");
    
    document.getElementById('name-errore').innerHTML = errore;

}

const validPass = () => {
    let pass = password.value;
        
    let errore = '';
    if (pass.length < 1 || pass.length > 50) {
        errore = "пароль должен содержать от 5 до 50 символов";
        password.classList.add("isInvalid")
    } else password.classList.add("isValid");
    
    document.getElementById('pass-errore').innerHTML = errore;

}


const validMail = () => {
    let email = mail.value;
    
    let errore = '';

    if (email.length < 1 || email.length > 50) {
        errore = "емейл должно содержать от 1 до 50 символов";
        mail.classList.add("isInvalid")
    } else mail.classList.add("isValid");
    
    document.getElementById('mail-errore').innerHTML = errore;

}

const validRepass = () => {
   let rePass = repassword.value;
   let pass = password.value;

   let errore = '';


   if (rePass.length === 0) {
        errore = "Это поле обязательно для заподнения";
        password.classList.add("is-invalid")
    } else if (rePass !== pass) {
        errore = "Пароли должны совпадать";
        password.classList.add("is-invalid")
    } else password.classList.add("is-valid");
        document.getElementById('repeat-errore').innerHTML = errore


}

