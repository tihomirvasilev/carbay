export default function validateRegister(values) {
  let errors = {};

  // Email Errors
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } // Email Errors
  if (!values.name) {
    errors.name = "Name required";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (values.password !== values.rePassword) {
    errors.password = "Passwords must be equals";
  }
  return errors;
}
