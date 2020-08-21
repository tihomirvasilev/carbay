export default function validateSearch(values) {
  let errors = {};

  if (!values.brand) {
    errors.brand = "Марката е задължителна поле";
  }

  if (!values.model) {
    errors.model = "Модела е задължителенo поле";
  }

  if (!values.engine) {
    errors.engine = "Вид Гориво е задалжително поле";
  }

  if (!values.price) {
    errors.price = "Цена до е задължително поле";
  }

  return errors;
}
