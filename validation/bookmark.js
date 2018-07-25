const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.url = !isEmpty(data.url) ? data.url : "";
  data.title = !isEmpty(data.title) ? data.title : "";

  if (Validator.isEmpty(data.url)) {
    errors.url = "Url field is required";
  }

  if (!Validator.isURL(data.url)) {
    errors.url = "Not a valid URL";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
