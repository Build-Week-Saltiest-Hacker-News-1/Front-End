export default function validate(values) {
    let error = {};
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
       error.email = "Email address is invalid";
    }
    if (values.password.length < 8) {
       error.password = "Password needs to be more than 8 characters";
    }
    if (values.name.length > 25) {
        error.name = "must be 25 characters or less"
    }
    if (values.user.length > 10) {
        error.user = "must be 10 characters or less"
    }
    return error;
  }