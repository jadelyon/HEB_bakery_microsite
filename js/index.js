

// FIlter anything
$(document).ready(function () {
    $("#anythingSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myDIV *").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });