//Obfuscate email
$(".contact").on("click", function() {
  const username = "i.am.wending";
  const domain = "gmail.com";

  window.location.href =
    "mailto:" +
    username.substring(0) +
    "@" +
    domain.substring(0);
});

//Password protect page
function loadPage(pwd) {
  var hash = pwd;
  hash = Sha1.hash(pwd);
  var url = hash + "/index.html";

  $.ajax({
    url : url,
    dataType : "html",
    success : function(data) {
      window.location = url;
    },
    error : function(xhr, ajaxOptions, thrownError) {
      parent.location.hash= hash;
      $("#wrongPassword").show();
      $("#password").addClass("error");
      $("#password").removeClass("shaken").addClass("shaken");
      $("#password").val("");
      $("#password").focus();
    }
  });
}

$("#loginbutton").on("click", function() {
  loadPage($("#password").val());
});

$("#password").keypress(function(e) {
  if (e.which == 13) {
    loadPage($("#password").val());
  }
});

$("#password").focus();
