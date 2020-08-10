export default function validateCreateOption(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Name required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  return errors;
}
