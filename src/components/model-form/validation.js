export default function validateCreateModel(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Name required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  // Brand Errors
  if (values.brand === "") {
    errors.brand = "Brand Required";
  }

  return errors;
}
