$(document).ready(function() {
  $("#submit").click(function () {
      var test = $.ajax({
          type        : "POST",
          url         : "http://iwin247.info:3474/auth/signup",
          address     : $("#address").val(),
          email       : $("#email").val(),
          id          : $("#id").val(),
          name        : $("#nickName").val(),
          passwd      : $("#passwd").val(),
          phone_number: $("#phoneNum").val(),
          success     : function (data) {
              return data;
          },
          error       : function () {
              alert("실패")
          }
      });
      test.done(function (test) {
            alert("성공")
      });
  });
});
