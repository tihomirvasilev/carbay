export default function validateCreateAd(values) {
  let errors = {};

  if (!values.brand) {
    errors.brand = "* задължително";
  }
  if (!values.model) {
    errors.model = "* задължително";
  }
  if (!values.category) {
    errors.category = "* задължително";
  }

  if (!values.firstRegistration) {
    errors.firstRegistration = "* задължително";
  }
  if (!values.milage) {
    errors.milage = "* задължително";
  }
  if (!values.engine) {
    errors.engine = "* задължително";
  }
  if (!values.transmission) {
    errors.transmission = "* задължително";
  }
  if (!values.power) {
    errors.power = "* задължително";
  }
  if (!values.transmission) {
    errors.transmission = "* задължително";
  }
  if (!values.price) {
    errors.price = "* задължително";
  }
  if (!values.phone) {
    errors.phone = "* задължително ";
  }

  if (!values.city) {
    errors.city = "* задължително";
  }
  return errors;
}
