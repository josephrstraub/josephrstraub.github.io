import $ from "jquery";

function renderLoginView() {
  $("body").children().hide();
  $(".login").show();
}

export {renderLoginView};
