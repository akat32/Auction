//login
$(document).ready(function() {
  $("#loginButton").click(function() {
      var test=$.ajax({
        type: "POST",
        url: "http://iwin247.info:3474/auth/signin",
        id: $("#id").val(),
        passwd: $("#passwd").val(),
        success: function(data) {
          return data;
        },
        error: function() {
          alert("ERROR");
        }
      });
      test.done(function(test){
        $("#message").html("로그인 성공");
      });
  });
});
