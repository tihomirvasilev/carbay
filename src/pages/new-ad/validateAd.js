export default function validateCreateAd(values) {
  let errors = {};

  // Brand Errors
  if (!values.brand) {
    errors.brand = "Brand required";
  }

  return errors;
}
