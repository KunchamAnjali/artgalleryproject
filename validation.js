const validation = (values) => {
    let errors = {}

    if(!values.name){
        errors.name="Name Required"
    }
    else if(values.name.length < 5) {
        errors.name = "Name must be more than  5 char"
    }

    
    if(!values.password){
        errors.password="password Required"
    }
    else if(values.password.length < 9) {
        errors.password = "passwrd must be more than 9 char"
    }

    if(!values.confirmpassword){
        errors.confirmpassword="Confirm Password Required"
    }

    else if(values.password !== values.password) {
        errors.password = "passwrd must be more than 9 char"
    }
     return errors;
}

export default validation;