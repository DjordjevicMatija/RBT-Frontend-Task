function validatePassword(password) {
    if (password.length < 6) {
        return "too short";
    }
    if (password.length > 24) {
        return "too long";
    }

    let error = '';
    let first = true;

    if (!/[A-Z]/.test(password)) {
        error += "missing upper case letter";
        first = false;
    }

    if (!/[a-z]/.test(password)) {
        if(!first){
            error += ' and ';
        }
        error += "missing lower case letter";
        first = false;
    }

    if (!/\d/.test(password)) {
        if(!first){
            error += ' and ';
        }
        error += "missing diggit";
        first = false;
    }

    if (/(\w)\1{2,}/.test(password)) {
        if(!first){
            error += ' and ';
        }
        error += "more than 2 repeated characters";
        first = false;
    }

    if (!/.*[^A-Za-z0-9\s].*[^A-Za-z0-9\s].*/.test(password)) {
        if(!first){
            error += ' and ';
        }
        error += "less than 2 special character";
    }

    if(error == '')
        return "Password is valid";
    else
        return error;
}
console.log(validatePassword("P1zz@"));
console.log(validatePassword("iLoveProgramming"));
console.log(validatePassword("Fi#g91@"));