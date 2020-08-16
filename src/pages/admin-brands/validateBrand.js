export default function validateCreateBrand(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Name required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  return errors;
}
