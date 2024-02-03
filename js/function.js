const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(username, password, email, repassword){
    if(!username.value){
        alert("Username is empty");
        username.focus();
        return false;
    }

    if(username.value.trim().length < 3){
        alert("Usenrame length must be more than 3 char");
        username.focus();
        return false;
    }

    if(!email.value){
        alert("Email is empty");
        email.focus();
        return false;
    }

    if(validateEmail(email.value)){
        email.focus();
        alert("Email is invalid")
        return false;
    }

    if(!repassword.value){
        alert("Repassword is empty");
        repassword.focus();
        return false;
    }

    if(password.value != repassword.value){
        password.focus();
        repassword.value = '';
        alert("Password and Repassword is not same")
        return false;
    }

    if(!username.value){
        alert("Userame is empty");
        username.focus();
        return false;
    }

    if(password.value.trim().length < 3){
        password.focus();
        alert("Password length need to be more than 3 char")
    }

    return true;
}

export {validate}