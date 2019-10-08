$(document).ready(function() {
  //Obfuscate email
  $(".contact").click(function() {
    const username = "i.am.wending";
    const domain = "gmail.com";

    window.location.href =
      "mailto:" +
      username.substring(0) +
      "@" +
      domain.substring(0);

    console.log(username);
  });
});
